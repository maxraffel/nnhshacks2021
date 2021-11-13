const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({defaultViewport: null});
    const page = await browser.newPage();
    await page.goto('https://www.fdmealplanner.com/', {waitUntil: 'networkidle2'});
    await page.type('.searchInput', 'newton', { delay: 10 });
    await page.keyboard.press('Enter', {delay: 50});
    await page.keyboard.press('Tab', {delay: 50});
    await page.keyboard.press('Enter', {delay: 50});
    await page.waitForTimeout(2000);
    await page.keyboard.press('Tab', {delay: 50});
    await page.keyboard.press('Tab', {delay: 50});
    await page.keyboard.press('Enter', {delay: 50});
    await page.keyboard.press('Tab', {delay: 50});
    await page.keyboard.press('Enter', {delay: 50});
    await page.waitForTimeout(2000);
    //await page.click('.menuDetails');
    //console.log(await page.$$eval('.menuDetails', (item) => item.length));
    const items = Array.from(await page.$$('.menuDetails'));
    //console.log(Array.from(items));


    for (const i of items) {
        console.log(i.length);
        /*for (const x of Array.from(i.children)) {
            console.log(x.innerHTML);
        }*/
    }
    await page.screenshot({ path: 'abdungis.png', waitUntil: 'networkidle2'});
    await browser.close();
})();
