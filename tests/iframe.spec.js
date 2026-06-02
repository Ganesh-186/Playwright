import test from '@playwright/test'
import { asyncWrapProviders } from 'node:async_hooks';

test('iframe',async({page})=>{
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
  const frame = await page.frameLocator('[name="globalSqa"]')
  await frame.getByText('Selenium 3.0 Training').click();

  await page.waitForTimeout(4000);
})

test('Nested frames',async({page})=>{
  await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');
  const frame1 = await page.frameLocator('(//iframe[@src="new-tab-sample.php"])[1]')
  await frame1.locator('[href="https://www.tutorialspoint.com"]').click();
  await frame1.frameLocator()
  await page.waitForTimeout(4000)
  
  await page.waitForTimeout(4000);

})

test('File upload ',async({page})=>{
  // await page.goto('https://www.file.io/');
  await page.goto('https://demoqa.com/upload-download');

  await page.setInputFiles('#uploadFile','D:/study purpose/Javascript/Playwright/insta.png');
  //await page.setInputFiles('#select-files-input',['D:/study purpose/playwright/fullpage.png','D:/study purpose/playwright/insta.png'])
  await page.waitForTimeout(4000)
  await page.setInputFiles('#uploadFile',[]);
  await page.waitForTimeout(4000)
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#downloadButton').click()
  ])
  await download.saveAs('D:\\study purpose\\playwright\\recordvideo\\SampleImage.png')
  
})