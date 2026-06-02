import test from '@playwright/test'

test('screen recording',async({browser})=>{
    const context1 = await browser.newContext({
        recordVideo:{
            dir:'recordvideo/'
        }
    });
    const page1 = await context1.newPage();
    await page1.goto('https://www.amazon.in/');

    const page2 = await context1.newPage();
    await page2.goto('https://www.flipkart.com/');

})