const {test , expect}=require("@playwright/test");
const { timeLog } = require("console");

const email="onkar11@test.com";//anshika@gmail.com
const pass="Onkar1999";//Iamking@000
let webcontext;

test.beforeAll( async({browser})=>
{ 
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client", {waitUntil: "domcontentloaded",timeout:60000});    
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(pass);
    await page.getByRole("button",{name :'Login'}).click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path :'state.json'}); //storageState :Returns storage state for this browser context
    webcontext =await browser.newContext({storageState:'state.json'});

});


test('get all product name',async()=>
{
    const page=await webcontext.newPage(); 
    await page.goto("https://rahulshettyacademy.com/client"); 
    
    //TO GET ALL PRODUCTS NAMES  
    await page.locator(".card-body b").last().waitFor({timeLog:5000});  // waitfor - to waituntil specific locator to load.
    console.log('All Products Name :',await page.locator(".card-body h5 b").allTextContents());

})
