const { chromium } = require('playwright');
const fs = require('fs');

const queries = [
  ['team1', 'indian man professional portrait office'],
  ['team2', 'indian woman professional portrait office'],
  ['team3', 'indian man creative professional smiling'],
  ['team4', 'indian woman video editor professional'],
  ['avatar1', 'indian business owner portrait headshot'],
  ['avatar2', 'indian cafe owner portrait headshot'],
  ['avatar3', 'indian woman professional headshot'],
  ['avatar4', 'indian entrepreneur founder headshot'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  const results = {};
  for (const [key, q] of queries) {
    await page.goto('https://www.pexels.com/search/' + encodeURIComponent(q) + '/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2500);
    const srcs = await page.$$eval('img[src*="images.pexels.com"]', imgs => imgs.map(i => i.src).filter(s => s.includes('/photos/')));
    results[key] = srcs.slice(0, 5);
    console.log(key, q, '->', srcs.length, 'found');
  }
  fs.writeFileSync('C:/Users/s1o2h/AppData/Local/Temp/claude/f24f2c817d24f3c4/f604ce2c-e64c-4670-ba23-704c0eaa0835/scratchpad/stock-results.json', JSON.stringify(results, null, 2));
  await browser.close();
})();
