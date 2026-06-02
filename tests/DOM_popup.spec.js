 import test from '@playwright/test';
 import { promiseHooks } from 'node:v8';

test('Checking DOM based POPUP',async({page})=>{
 await page.goto('https://www.flipkart.com/');
 
 try{
    await page.waitForSelector('.b3wTlE',{timeout: 5000})
    await page.locator('.b3wTlE').click();
    console.log('Popup closed');
 }
 catch{
    console.log('Popup not appeared');
 }
 await page.locator('//span[text()="Login"]').hover();
 await page.mouse.wheel(0,2000)

//  await page.locator('//span[text()="Login"]').dblclick();
 
 await page.locator("//div[text()='Electronics']").click({button:'right'})

//  await page.locator('//span[text()="Login"]').click();

 await page.waitForTimeout(4000)
})
