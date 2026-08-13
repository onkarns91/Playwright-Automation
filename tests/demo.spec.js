const {test , expect} = require('@playwright/test');

/* test('browser context Playwright Test', async ({browser})=>   //'test' annotation
    {
        const context=await browser.newContext()
        const page=await context.newPage()
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await page.title()); //to print page title     
    }); */
/*Whenever we use await, it is normally used inside an async function. 
await pauses the execution of that async function until the Promise is resolved or rejected,
allowing asynchronous operations to be handled in a sequential-looking way.*/

/* test('page playwright test',async({page})=>{     //"test.only" - used to run only this test & skip remaining all.
    await page.goto("https://youtube.com/")
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("YouTube"); //--from page expecting to have title as "Google"
}) ; */

//TC_01 : enter incorrect username and verify validation >>
test('browser context Playwright Test', async ({browser})=>   //'test' -annotation
    {
        const context=await browser.newContext();
        const page=await context.newPage();
        //store CSS locators in variable:
        const username=page.locator("input#username");
        const password=page.locator("input#password");
        const signin=page.locator('input[value="Sign In"]');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log('page title :',await page.title()); //to print page title    
        await username.fill("rahul"); //1. if id is present > page.locator("tagname#id") , ".fill" - to enter value 
        await password.fill("Learning@830$3mK2"); //2. if class attribute is present> page.locator("tagname.class")
        await signin.click();//3. if needs to write locator based on attribute > page.locator('input[attribute='value']') ,".click" - to click btn
        console.log('Validation msg :',await page.locator('[style*= "block"]').textContent()); // textContent - to get content for locator 
        const locator =(page.locator('[style*= "block"]'));//make variable of locator 
        await expect(locator).toContainText("Incorrect"); // to verify correct validation mesg display    


//TC_02 : Re-enter correct username and sign in and select product >>
        // .fill("")  -to remove entered value of locator 
        await username.fill("");                   
        await username.fill("rahulshettyacademy");
        await signin.click();
        const iphn=page.locator(".card-body a");

        //when locators which extract multipme webelements in page use -- .nth() 
        console.log('first product name :', await iphn.first().textContent()); //.first() -to selects 1st product/web-element
        console.log('second product name :', await iphn.nth(1).textContent());  //.nth(1) -to selects specific product/web-element , here (1)= 2nd web-element.












    });