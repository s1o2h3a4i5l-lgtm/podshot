// Combines screenshots matching a prefix into one contact sheet image.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const prefix = process.argv[2], cols = Number(process.argv[3] || 2);
const dir = path.join(__dirname, '..', '_shots');
const files = fs.readdirSync(dir).filter((f) => f.startsWith(prefix) && f.endsWith('.jpg')).sort((a, b) => Number(a.match(/-(\d+)\.jpg$/)[1]) - Number(b.match(/-(\d+)\.jpg$/)[1]));
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const imgs = files.map((f) => `<figure><figcaption>${f}</figcaption><img src="data:image/jpeg;base64,${fs.readFileSync(path.join(dir, f)).toString('base64')}"></figure>`).join('');
  await p.setContent(`<style>body{margin:0;background:#888;display:grid;grid-template-columns:repeat(${cols},1fr);gap:6px;padding:6px;font:12px sans-serif}figure{margin:0;background:#fff}img{width:100%;display:block}</style>${imgs}`);
  await p.screenshot({ path: path.join(dir, `_sheet-${prefix}.png`), fullPage: true });
  await b.close();
})();
