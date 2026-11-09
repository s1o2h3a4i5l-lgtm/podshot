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
