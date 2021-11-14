const puppeteer = require('puppeteer');
import { Menu, Item } from '/menu.js'

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
    await page.waitForTimeout(3000);
    //await page.click('.menuDetails');
    //console.log(await page.$$eval('.menuDetails', (item) => item.length));
    
    const items = await page.$$('.tempMenuItemMonthly');
    


    //console.log(Array.from(items));
    //let menuArr = [];
    for (const item of items) {

        //ayo max this is sleepy max speaking u gotta do .click on each item, check for everything labeled nutridetial or value or whatever idkman and then hit escape for ez dubs
        //just like do it here cuz that makes sense and then put all the stuff into item objects and pop those into a meal object for each meal and then write some methods
        //then just connect it up to website and boom yay you did it high five its 2am please help me :)))

        //gets the innerhtml of everything then makes it into a string then does basic formatting
        let text = await page.evaluate(el => el.innerText, item);
        let texter = JSON.stringify(text);
        //checks to see if it is empty and skips it if so
        if (texter.length <= 2) { continue }
        //removes " from either side of the string since those are always there
        texter = texter.substring(1);
        texter = texter.substring(0, texter.length - 1);
        let menuArr = texter.split('\\n');
        for (let i = 0; i < menuArr.length; i++) {
            menuArr[i] = menuArr[i].trim();
            if (menuArr[i] === '') {
                menuArr.splice(i, 1);
                i -= 1;
            }
        }
        console.log(menuArr);
    }
    //console.log(menuArr);
    
    await page.screenshot({ path: 'abdungis.png', waitUntil: 'networkidle2'});
    await browser.close();
})();
