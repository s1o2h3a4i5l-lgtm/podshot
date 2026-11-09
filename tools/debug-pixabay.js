const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36' });
  await page.goto('https://pixabay.com/images/search/indian%20business%20portrait/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  console.log('title:', await page.title());
  const srcs = await page.$$eval('img', imgs => imgs.map(i => i.src).filter(s => s.includes('cdn.pixabay')));
  console.log(srcs.length, srcs.slice(0,8));
  await browser.close();
})();
