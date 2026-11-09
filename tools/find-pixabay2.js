const { chromium } = require('playwright');
const fs = require('fs');

const queries = [
  ['team1', 'indian man portrait'],
  ['team2', 'indian woman portrait'],
  ['team3', 'indian man smiling'],
  ['team4', 'indian woman smiling'],
  ['avatar1', 'indian businessman'],
  ['avatar2', 'indian shop owner'],
  ['avatar3', 'indian businesswoman'],
  ['avatar4', 'indian entrepreneur'],
];

(async () => {
  const browser = await chromium.launch();
  const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
  const results = {};
  for (const [key, q] of queries) {
    const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, userAgent: ua });
    await page.goto('https://pixabay.com/images/search/' + encodeURIComponent(q) + '/?order=ec', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
    const items = await page.$$eval('img', imgs => imgs
      .filter(i => i.src.includes('cdn.pixabay.com/photo/') && i.naturalWidth > 100)
      .map(i => ({ src: i.src.replace(/_640\./, '_1280.'), alt: i.alt })));
    results[key] = items.slice(0, 8);
    console.log(key, items.length);
    await page.close();
  }
  fs.writeFileSync('C:/Users/s1o2h/AppData/Local/Temp/claude/f24f2c817d24f3c4/f604ce2c-e64c-4670-ba23-704c0eaa0835/scratchpad/pixabay-results2.json', JSON.stringify(results, null, 2));
  await browser.close();
})();
