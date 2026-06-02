import test from '@playwright/test';

test('Dropdown',async({page})=>{
    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    // await  page.locator('[data-target="simple-dropdown"]').click();
    //await page.selectOption('[class="form-select block w-full mt-1"]','Option 3')

    // await page.selectOption('[class="form-select block w-full mt-1"]',{value:"option3"})
    //await page.selectOption('[class="form-select block w-full mt-1"]',"option3")

    //await page.selectOption('[class="form-select block w-full mt-1"]',{index:1})


    //Multi select
    await page.locator('[data-target="multi-select-dropdown"]').click()
    //await page.selectOption('[class="form-multiselect block w-full mt-1"]',['Option 2','Option 4','Option 5'])
    await page.selectOption('[class="form-multiselect block w-full mt-1"]',[{index:0},{index:1},{index:2},{index:3}])
    await page.waitForTimeout(4000);

})

//keyword variablename = value;

test('Dropdown 2',async({page})=>{
    await page.goto('https://demoqa.com/select-menu');
    
    await page.click('#react-select-2-input')
    await page.locator('text=A root option').click();
    await page.waitForTimeout(4000);

})

