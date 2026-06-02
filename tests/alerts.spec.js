import test from '@playwright/test';

test('alerts handle',async({page})=>{

    // simple -> ok 
    // confirm alert -> ok and cancel
    // promt alert -> textbox
   
    //dialog.type()     -> Get the type
    //dialog.message()  -> get the message in the popup
    //dialog.accept()   -> to click ok
    //dialog.dismiss()  -> to click cancel
     page.on('dialog',async(dialog)=>{
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept();
        if(dialog.type() == 'confirm'){
            dialog.accept();
        }
        else{
            dialog.dismiss();
        }
        // if(dialog.message()=== 'Do you confirm action?'){
        //     dialog.accept();
        // }
        // if(dialog.type()=='prompt'){
        //     await page.waitForTimeout(3000);
        //     dialog.accept('Ganesh');
        // }
    })

    await page.goto('https://demoqa.com/alerts');
    //await page.locator('#alertButton').click();
    //await page.locator('#confirmButton').click();
    await page.locator('#promtButton').click();
})