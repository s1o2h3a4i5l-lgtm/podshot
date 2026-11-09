// Loads a page, reports console errors and failed requests, and saves screenshots down the page.
// Usage: node tools/check.js /path [shots=6] [width=1440]
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const route = process.argv[2] || '/';
const shots = Number(process.argv[3] || 6);
const width = Number(process.argv[4] || 1440);
const base = process.env.BASE || 'http://localhost:3100';
const out = path.join(__dirname, '..', '_shots');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 0.5 })).newPage();
  const errors = [];
  p.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE ' + m.text().slice(0, 300)); });
  p.on('response', (r) => { if (r.status() >= 400) errors.push(`HTTP ${r.status()} ${r.url()}`); });
  await p.goto(base + route, { waitUntil: 'networkidle', timeout: 120000 });
  await p.waitForTimeout(2500);
  const total = await p.evaluate(() => document.body.scrollHeight);
  const name = route === '/' ? 'home' : route.slice(1).replace(/\//g, '__');
  const step = Math.max(900, Math.floor(total / shots));
  for (let i = 0, y = 0; i < shots && y < total; i++, y += step) {
    await p.evaluate((v) => window.scrollTo(0, v), y);
    await p.waitForTimeout(1600);
    for (let t = 0; t < 3; t++) { try { await p.screenshot({ path: path.join(out, `${name}-${width}-${i}.jpg`), type: 'jpeg', quality: 60, timeout: 20000 }); break; } catch (e) { if (t === 2) errors.push('SHOT FAILED ' + i); } }
  }
  console.log(`height=${total}`);
  console.log(errors.length ? [...new Set(errors)].join('\n') : 'no errors');
  await b.close();
})();
