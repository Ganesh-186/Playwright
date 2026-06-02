import {test} from '@playwright/test'
import { TIMEOUT } from 'node:dns';

// test('page open',async({page})=>{
//   await page.goto('https://www.facebook.in');
//   await page.waitForTimeout(4000);
//   await page.title();
//   await page.url();
//   await page.screenshot({path : 'instagram.jpeg'});
// })

// test('login functionality', async({page})=>{
//   await page.goto('https://www.instagram.com');
//   await page.locator('#_R_1h5l6n6pcldcpbn6b5ipamH1_').fill('lazy_._king');
//   await page.locator('input#_R_1hll6n6pcldcpbn6b5ipamH1_').fill('Ganesh@1804');

//   await page.click('[aria-label="Log In"]');
//   await page.waitForTimeout(5000);
//   await page.screenshot({path : 'logedin.png'});

// });

// test('Dorp Down', async({page})=>{
//   await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');

//   // await page.selectOption('div[id="simple-dropdown"] >select[class="form-select block w-full mt-1"]',{value : 'option 3'});
//   await page.selectOption('div[id="simple-dropdown"] >select[class="form-select block w-full mt-1"]',{value : 'option3'});
//   // await page.selectOption('div[id="simple-dropdown"] >select[class="form-select block w-full mt-1"]',{label :'Option 2'});
//   await page.screenshot({path : 'logedin.png'});
// });

// test('Search with id locator', async({page})=>{
//   await page.goto('https://www.amazon.com/');
//   await page.locator('input#twotabsearchtextbox').fill('laptop');
//   //await page.click('input[value="Go"]');
//   // await page.click('//input[@value="Go"]');
//   await page.keyboard.press('Enter');
//    await page.waitForTimeout(5000);
//   // await page.goBack();
// });

// test('go to playwright site with iframe',async({page})=>{
//   await page.goto('https://playwright.dev/community/learn-videos');

// });

// test('Navigation Example', async ({ page }) => {

//   await page.goto('https://www.amazon.in/');

//   await page.goto('https://www.instagram.com/');

//   await page.goBack();

//   await page.goForward();

//   await page.reload();

// });


// test('Browser Context', async () => {

//   const browser = await chromium.launch({
//     headless: false
//   });

//   const context = await browser.newContext();

//   const page = await context.newPage();

//   await page.goto('https://www.amazon.in');
//   await page.selectOption('#searchDropdownBox',{value="search-alias=fashion"});
//   await page.waitForTimeout(3000);

// });



// test('myntra search bar test',async({page})=>{
//   await page.goto('https://www.myntra.com/');
//   await page.getByPlaceholder('Search for products, brands and more').fill('Pants');
//   await page.locator('//a[@class="desktop-submit"]').click();
// })

// test('amazon with testid',async({page})=>{
//   await page.goto('https://www.amazon.com/');
//   await page.getByText('Returns').click();
//   await page.getByLabel('Amazon').click();
//   await page.getByRole('searchbox').fill('mobile');
//   await page.locator('#nav-search-submit-button').click();
//   await page.waitForTimeout(3000);
// });

// test('myntra search bar test',async({page})=>{
//   await page.goto('https://demoqa.com/text-box');
//   await page.getByLabel('name@example.com').fill('ganeshravi1804@gmail.com');
//  await page.waitForTimeout(3000);
// });


// test('Dropdown check', async ({page}) => {


//   await page.goto('https://www.amazon.in');
//   await page.selectOption('#searchDropdownBox',{value : "search-alias=fashion"});
//   await page.waitForTimeout(3000);
//   await page.selectOption('select[class="form-multiselect block w-full mt-1"]',['Option1','Option2']);

// });

// test('Dropdown check Multiselect', async ({page}) => {


//   await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');


//   await page.selectOption('select[class="form-multiselect block w-full mt-1"]',['option1','option2']);
//     await page.waitForTimeout(3000);
// });

  
// test('JS alerts Popup handling',async ({page}) => {

//   // js pop -> alert
//   // playwright automatically handles the alert popup
//   // page.on('dailog') -> to handle alert

//   // simple alert  -> 'OK' button
//   // confirm alert -> 'ok' and 'cancel'
//   // prompt alert  -> 'textbox'
// page.on('dialog',(dialog)=>{
//   console.log( dialog.message());   // give the text in the dialog box
//   console.log(dialog.type());   // gives the type of the alert
//   //dialog.accept('Nithees');  // to press 'ok'
//   //dialog.dismiss(); // to press cancel
//   //  if(dialog.type() === 'confirm'){
//   //    dialog.dismiss();
//   //  }
   
//   if(dialog.type() === 'prompt'){
//     dialog.dismiss();
//   }
  
// });
//   await page.goto('https://demoqa.com/alerts');
//   //await page.click('#alertButton');
//   //await page.click('#timerAlertButton')
//   //await page.waitForTimeout(6000);
//   //await page.click('#confirmButton');
//   await page.click('#promtButton');


// });



// test('General HTML Popup', async ({ page }) => {

//   await page.goto('https://www.flipkart.com');

//   await page.locator('[class = "b3wTlE"]')
//             .click();
console.log();// });



// test('Flipkart Login Popup', async ({ page }) => {

//   await page.goto('https://www.flipkart.com');

// const [popup] = await Promise.all([

//    page.waitForSelector('.b3wTlE')
// ])
//   await page.locator('.b3wTlE').click();
// });

// test('testing iframe',async({page})=>{
//   await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
//   await page.locator('#iFrame').click();
//   await page.frameLocator('iframe[class=" lazyloaded"]').getByText('Selenium 3.0 Training').click();

//   await page.waitForTimeout(3000);

// })

// test('Flipkart Login Popup with try catch', async ({ page }) => {

//   await page.goto('https://www.flipkart.com');

// try{
//   await page.waitForSelector('.b3wTlE',{
//     timeout:4000});
//   await page.locator('.b3wTlE').click();
//   console.log('popup closed')

// }
// catch{
//   console.log('No popup');
// }
// });

// test('File upload',async({page})=>{
//   await page.goto('https://demoqa.com/upload-download');
//   await page.setInputFiles('#uploadFile',['insta.png','fullpage.png']);
//  await page.waitForTimeout(3000);
// });


// test('Web Table Handling', async ({ page }) => {

//   await page.goto('https://demoqa.com/webtables');

//   const rows = await page.locator('table tbody tr');

//   console.log(await rows.count());

//   for(let i = 0; i < await rows.count(); i++){

//     const cols = await rows.nth(i).locator('td');
//     console.log(cols);
//     for(let j = 0; j<await cols.count();j++){
//       const text = await cols.nth(j).textContent();
//       console.log(text);
//     }
//   }

// });


test('Custom Dropdown', async ({ page }) => {

  await page.goto('https://demoqa.com/select-menu');

  await page.click('#withOptGroup');

  await page.click('text=Group 1, option 1');
  await page.waitForTimeout(3000);
});