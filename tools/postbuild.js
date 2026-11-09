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

// GitHub Pages build only (GH_PAGES=1): safety net for any asset path we didn't prefix in source
// (vendor CSS we don't hand-edit, anything missed). Rewrites unprefixed /images|videos|brand|gif
// |icons|favicon references across every output file to carry the /podshot basePath, so nothing
// 404s once served from https://<user>.github.io/podshot/. No-op for the normal (local/prod) build.
if (process.env.GH_PAGES === '1') {
  const BASE = '/podshot';
  const assetRe = /(["'(])\/(images|videos|brand|gif|icons|favicon|fonts)([^"')]*)/g;
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
  console.log(`postbuild: GH_PAGES safety net patched ${patched} asset paths across ${filesTouched} files`);
}
