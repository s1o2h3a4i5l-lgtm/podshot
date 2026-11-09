// Converts Agina's server-rendered HTML sections into JSX reference files under _ref/jsx.
// Usage: node tools/html2jsx.js
const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

const SITE = path.join(__dirname, '..', '..', 'site-clone', 'site');
const OUT = path.join(__dirname, '..', '_ref', 'jsx');
fs.mkdirSync(OUT, { recursive: true });

const PAGES = {
  'home-01': 'index.html', 'home-02': 'home-02.html', 'home-03': 'home-03.html', about: 'about.html', services: 'services.html',
  'service-details': 'services/brand-foundations.html', project: 'project.html', 'project-details': 'project/brandmark.html',
  pricing: 'pricing-plan.html', contact: 'contact.html', blog: 'blog.html', 'blog-details': 'blog/how-branding-influences-customer-trust.html',
  'gallery-showcase': 'gallery-showcase.html', 'perspective-showcase': 'perspective-showcase.html', 'skew-showcase': 'skew-showcase.html',
  team: 'team.html', 'team-details': 'team/emily-carter.html', careers: 'careers.html', error: 'error.html', policy: 'policy-privacy.html',
};

const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength', colspan: 'colSpan',
  rowspan: 'rowSpan', autoplay: 'autoPlay', playsinline: 'playsInline', srcset: 'srcSet', crossorigin: 'crossOrigin',
  frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen', enctype: 'encType', autocomplete: 'autoComplete',
  'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', 'xmlns:xlink': 'xmlnsXlink', novalidate: 'noValidate', spellcheck: 'spellCheck',
};
const BOOL = new Set(['muted', 'loop', 'autoPlay', 'playsInline', 'disabled', 'checked', 'hidden', 'required', 'readOnly', 'allowFullScreen', 'selected', 'noValidate']);
const VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'area', 'col', 'embed', 'track', 'wbr', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse', 'stop', 'use']);
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function attrName(n) {
  if (ATTR[n]) return ATTR[n];
  if (n.startsWith('data-') || n.startsWith('aria-')) return n;
  if (n.includes('-') || n.includes(':')) return camel(n.replace(':', '-'));
  return n;
}

function styleObj(s) {
  const parts = s.split(';').map((x) => x.trim()).filter(Boolean).map((decl) => {
    const i = decl.indexOf(':');
    const k = decl.slice(0, i).trim();
    const v = decl.slice(i + 1).trim().replace(/'/g, "\\'");
    return k.startsWith('--') ? `'${k}': '${v}'` : `${camel(k)}: '${v}'`;
  });
  return `{{ ${parts.join(', ')} }}`;
}

function nextImage(src) {
  const m = /\/_next\/image\?url=([^&]+)/.exec(src.replace(/&amp;/g, '&'));
  return m ? decodeURIComponent(m[1]) : src;
}

function attrs(el) {
  const out = [];
  const raw = el.rawAttributes;
  for (const [k0, v0] of Object.entries(raw)) {
    const k = k0.toLowerCase();
    if (['data-nimg', 'decoding', 'srcset', 'sizes', 'fetchpriority'].includes(k)) continue;
    let v = v0.replace(/&amp;/g, '&');
    const name = attrName(k);
    if (name === 'src' || name === 'href' || name === 'poster') v = nextImage(v);
    if (name === 'style') { out.push(`style=${styleObj(v)}`); continue; }
    if (BOOL.has(name) && (v === '' || v === name || v === k)) { out.push(name); continue; }
    if (el.rawTagName === 'input' && name === 'value') { out.push(`defaultValue="${v}"`); continue; }
    out.push(`${name}="${v.replace(/"/g, '&quot;')}"`);
  }
  return out.length ? ' ' + out.join(' ') : '';
}

function text(t) {
  return t.replace(/[{}]/g, (c) => `{'${c}'}`).replace(/<!--[\s\S]*?-->/g, '');
}

function toJsx(node, depth = 0) {
  const pad = '  '.repeat(depth);
  if (node.nodeType === 3) {
    const t = text(node.rawText);
    return t.trim() ? pad + t.trim() : '';
  }
  if (node.nodeType !== 1) return '';
  const tag = node.rawTagName;
  if (!tag) return node.childNodes.map((c) => toJsx(c, depth)).filter(Boolean).join('\n');
  if (tag === 'script' || tag === 'noscript' || tag === 'template') return '';
  const a = attrs(node);
  const kids = node.childNodes.map((c) => toJsx(c, depth + 1)).filter(Boolean);
  if (!kids.length && (VOID.has(tag) || tag === 'svg' || tag === 'g' || tag === 'i' || tag === 'span' || tag === 'div' || tag === 'source' || tag === 'iframe')) {
    return `${pad}<${tag}${a} />`;
  }
  if (tag === 'textarea') return `${pad}<textarea${a} />`;
  return `${pad}<${tag}${a}>\n${kids.join('\n')}\n${pad}</${tag}>`;
}

const index = [];
for (const [name, file] of Object.entries(PAGES)) {
  const html = fs.readFileSync(path.join(SITE, file), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const root = parse(html, { comment: false, blockTextElements: { script: false, style: false, noscript: false } });
  const content = root.querySelector('#smooth-content') || root.querySelector('body');
  const main = content.querySelector('main');
  const tops = main ? [...main.childNodes.filter((x) => x.nodeType === 1), ...content.childNodes.filter((x) => x.nodeType === 1 && x.rawTagName === 'footer')] : content.childNodes.filter((x) => x.nodeType === 1);
  tops.forEach((s, i) => {
    const id = `${name}__${String(i).padStart(2, '0')}`;
    fs.writeFileSync(path.join(OUT, id + '.jsx'), toJsx(s));
    index.push(`${id}  ${(s.getAttribute('class') || '').slice(0, 70)}`);
  });
  if (name === 'home-01') {
    const body = root.querySelector('body');
    for (const sel of ['.tj-preloader', 'header', '.tj-offcanvas', '.tj-mobile-menu', '.tj-search-popup']) {
      const el = body.querySelector(sel);
      if (el) fs.writeFileSync(path.join(OUT, `shell__${sel.replace(/[^a-z-]/g, '')}.jsx`), toJsx(el));
    }
    const wrapper = body.querySelector('#has_smooth') || body.querySelector('#smooth-wrapper');
    fs.writeFileSync(path.join(OUT, 'shell__structure.txt'), body.childNodes.filter((c) => c.nodeType === 1).map((c) => `<${c.rawTagName}${c.rawAttrs ? ' ' + c.rawAttrs.slice(0, 120) : ''}>`).join('\n') + '\n\nwrapper: ' + (wrapper ? wrapper.rawAttrs : 'none'));
  }
}
fs.writeFileSync(path.join(OUT, '_index.txt'), index.join('\n'));
console.log(index.length, 'sections converted');
