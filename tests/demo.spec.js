const {test , expect} = require('@playwright/test');

/* test('browser context Playwright Test', async ({browser})=>   //'test' annotation
    {
        const context=await browser.newcontext()
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
/* test('browser context Playwright Test', async ({browser})=>   //'test' -annotation
    {
        const context=await browser.newcontext();
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

    }); */


//TC_02 : select dropdown and radio button
/* test('select dropdown and radio button', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    const username=page.locator("#username"); 
    const password=page.locator("#password");
    const signin=page.locator("#signInBtn");
    const userid="rahulshettyacademy";
    const pwd="Learning@830$3mK2";
    await username.fill(userid);
    await password.fill(pwd);
    // select dropdown
    const dropdown=page.locator("select.form-control");  //create variable for dropdown locator
    await dropdown.selectOption("consult");     //select value from dropdown

    //select radio buttons ,checkbox and implement expect aasertions 
    await page.locator(".customradio").last().click();   //select radio option
    await page.locator("#okayBtn").click();
     
    console.log(await page.locator(".customradio").last().isChecked());   //isChecked - checking whether element checked or not ,gives boolean value.
    await expect (page.locator(".customradio").last()).toBeChecked();  // toBeChecked - verify that element is checked , gives test result - Pass/Fail.
    await page.locator("#terms").click();
    await expect (page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();  // uncheck - to unselect checkbox
    //using sync await with assertions 
    expect(await page.locator("#terms").isChecked()).toBeFalsy();  // toBeFalsy - assertion that verifies a value is falsy in a boolean context.

    // validating the attributes 
    const locatorLink =page.locator("[href*='documents-request']");
    await expect (locatorLink).toHaveAttribute("class","blinkingText");//toHaveAttribute is a Locator assertion method , verifies element has a specific attribute with an expected value.
    
    await signin.click();
    //await page.pause();
});      */

//TC_03 : handling child windows and tabs with playwright by switching browser context
test('child window hndl', async ({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink=page.locator("[href*='documents-request']");

    //create array - to click and open link in new window>>
    const [Newpage]=await Promise.all([               //when needs to run two Promises at a time(simultaneously).
        context.waitForEvent('page'),                //waitForEvent - listen for any new page. types of 'wait' - pending,rejected,fulfilled.
        documentLink.click(),                       //new page is open
    ])
 
    console.log('New page title :',await Newpage.title());
    const domain=await Newpage.locator(".im-para.red strong").textContent();

    //split content ,get userid(mailId)>>
    const arraytext=await domain.split("@"); 
    //arraytext[1].split("m").[];
    const mailId=arraytext[1];
    console.log('mail id :',mailId);

    //fill userid on parent window page
    await page.locator("#username").fill(mailId);
     console.log('username entered :',await page.locator("#username").inputValue());  //inputvalue - to get input value in field 
});    