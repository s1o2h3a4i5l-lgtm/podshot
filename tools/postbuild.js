// Static hosts serve files as-is, but Next's client asks for segment prefetch files by a flat dotted name
// (e.g. __next.blog.$d$slug.__PAGE__.txt) while the export writes them nested (__next.blog/$d$slug/__PAGE__.txt).
// Copy each nested file to its flat name so client navigation works on any static host.
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
let copied = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('__next.')) flatten(full, dir, entry.name);
    else if (entry.name !== '_next') walk(full);
  }
}

function flatten(root, parent, prefix) {
  const stack = [[root, prefix]];
  while (stack.length) {
    const [dir, name] = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      const flatName = `${name}.${entry.name}`;
      if (entry.isDirectory()) stack.push([full, flatName]);
      else { fs.copyFileSync(full, path.join(parent, flatName)); copied += 1; }
    }
  }
}

walk(OUT);
console.log(`postbuild: wrote ${copied} flat prefetch files`);

// Prefix any leftover unprefixed root asset URLs when exporting for a subfolder (SITE_BASE_PATH or GH_PAGES=1).
const rawBase = process.env.SITE_BASE_PATH || (process.env.GH_PAGES === '1' ? '/podshot' : '');
const BASE = rawBase ? `/${rawBase.replace(/^\/+|\/+$/g, '')}` : '';

if (BASE) {
  const assetRe = /(["'(])\/(images|videos|brand|gif|icons|favicon|fonts|map-tiles)([^"')]*)/g;
  let patched = 0;
  let filesTouched = 0;

  function walkPatch(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walkPatch(full); continue; }
      if (!/\.(html|css|js|txt|json)$/.test(entry.name)) continue;
      const text = fs.readFileSync(full, 'utf8');
      let changed = false;
      const next = text.replace(assetRe, (m, lead, group, rest, offset) => {
        if (text.slice(Math.max(0, offset - BASE.length - 1), offset + 1 + group.length) === `${BASE}/${group}`) return m;
        changed = true;
        patched += 1;
        return `${lead}${BASE}/${group}${rest}`;
      });
      if (changed) { fs.writeFileSync(full, next); filesTouched += 1; }
    }
  }
  walkPatch(OUT);
  console.log(`postbuild: basePath(${BASE}) patched ${patched} asset paths across ${filesTouched} files`);
}

// Write .htaccess so Apache/cPanel serves trailingSlash directory indexes cleanly without parent rewrite interference.
const htaccess = [
  'DirectoryIndex index.html',
  'Options -Indexes',
  'RewriteEngine On',
  `ErrorDocument 404 ${BASE}/404.html`,
  '',
].join('\n');
fs.writeFileSync(path.join(OUT, '.htaccess'), htaccess);
console.log(`postbuild: wrote ${BASE ? `subfolder (${BASE})` : 'root'} .htaccess`);
