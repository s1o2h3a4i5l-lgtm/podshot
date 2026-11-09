const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto('https://www.pexels.com/search/indian%20business%20portrait/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  const title = await page.title();
  console.log('title:', title);
  const imgCount = await page.$$eval('img', imgs => imgs.length);
  console.log('total imgs:', imgCount);
  const samples = await page.$$eval('img', imgs => imgs.slice(0, 10).map(i => ({ src: i.src, srcset: i.srcset })));
  console.log(JSON.stringify(samples, null, 2));
  await page.screenshot({ path: 'C:/Users/s1o2h/AppData/Local/Temp/claude/f24f2c817d24f3c4/f604ce2c-e64c-4670-ba23-704c0eaa0835/images/pexels-debug.png' });
  await browser.close();
})();
