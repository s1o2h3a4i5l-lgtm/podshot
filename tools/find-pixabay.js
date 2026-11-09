const { chromium } = require('playwright');
const fs = require('fs');

const queries = [
  ['team1', 'indian man business professional'],
  ['team2', 'indian woman business professional'],
  ['team3', 'indian man creative designer'],
  ['team4', 'indian woman video editing'],
  ['avatar1', 'indian businessman headshot'],
  ['avatar2', 'indian cafe owner smiling'],
  ['avatar3', 'indian businesswoman headshot'],
  ['avatar4', 'indian entrepreneur smiling'],
];

(async () => {
  const browser = await chromium.launch();
  const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
  const results = {};
  for (const [key, q] of queries) {
    const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, userAgent: ua });
    await page.goto('https://pixabay.com/images/search/' + encodeURIComponent(q) + '/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
    const items = await page.$$eval('img', imgs => imgs
      .filter(i => i.src.includes('cdn.pixabay.com/photo/'))
      .map(i => ({ src: i.src, alt: i.alt })));
    results[key] = items.slice(0, 6);
    console.log(key, items.length);
    await page.close();
  }
  fs.writeFileSync('C:/Users/s1o2h/AppData/Local/Temp/claude/f24f2c817d24f3c4/f604ce2c-e64c-4670-ba23-704c0eaa0835/scratchpad/pixabay-results.json', JSON.stringify(results, null, 2));
  await browser.close();
})();
