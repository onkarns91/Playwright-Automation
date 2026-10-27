import { test, expect} from '@playwright/test';
import { POManager } from '../PageObjects_TS/POManager';
const  testdata = JSON.parse(JSON.stringify(require('../Utils/ClientappTestData.json')));
import { customTest } from '../Utils_TS/test-base';

test.describe.configure({mode:'parallel'}); // to run all tests within file parallely.
//test.describe.configure({mode:'serial'}); // to run all tests within file sequentially.
//data driven by importing from extrnal json file and run test for multiple login
for(const data of testdata) 
{test(`client App login for ${data.productName}`, async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);

    const loginpage = poManager.getLoginPage()
    await loginpage.validLogin(data.UserEmail,data.UserPass);


    const ProductName = page.locator("div.card-body h5").first();
    console.log('First Product Name :', await ProductName.textContent());
    await expect(ProductName).toContainText("ADIDAS");
    //TO GET ALL PRODUCTS NAMES  
    await page.locator("div.card-body h5").last().waitFor();  // waitfor - to waituntil specific locator to load.
    console.log('All Products_Name :', await page.locator("div.card-body h5").allTextContents());

    //select and add to cart one product>> 
    const bool = await page.locator("h5:has-text('ZARA COAT 3')").isVisible();
    await expect(bool).toBeTruthy();
    const dashboradpage = poManager.getDashboradPage()
    await dashboradpage.AddToCart(data.productName);

    //Enter payment details and Place oder>>
    const payment = poManager.getPaymentPage();
    await payment.paymentDetails(data.Cvv,data.CardName,data.country,' India');
    await expect(page.locator("label[type='text']")).toHaveText(data.UserEmail);

   
    //goto 'Your Orders' scan page find orderID and view order summary >>
    await expect(page.locator("h1.hero-primary")).toContainText(" Thankyou for the order. ");
    console.log(await page.locator('h1.hero-primary').textContent());
    const ordrId:any =await  page.locator("tbody label").nth(1).textContent();
    console.log(ordrId);
    const expectedId = ordrId.replace(/\|/g, "").trim();
    
    const order = poManager.getOrdersPage();
    await order.ViewOrder(expectedId);
    

    //TC_05 On order summary page verify orderdetails>>
    await expect(page.locator("div .email-title")).toHaveText(" order summary ");

    const orderdtls = await page.locator("div .col-text").textContent();
    await expect(ordrId.includes(orderdtls)).toBeTruthy();
    const billid = await page.locator("div .text").nth(0);
    const billcountry = await page.locator("div .text").nth(1);
    const dilvid = await page.locator("div .text").nth(2);
    const dilvcountry = await page.locator("div .text").nth(3);

    await expect(billid).toHaveText(data.UserEmail);
    await expect(billcountry).toContainText("India");
    await expect(dilvid).toHaveText(data.UserEmail);
    await expect(dilvcountry).toContainText("India");
    await expect(page.locator("div .title")).toHaveText(data.productName);

});}



//data driven by fixture
customTest(`client App login for`, async ({ browser,testDataforOrder }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);

    const loginpage = poManager.getLoginPage()
    await loginpage.validLogin(testDataforOrder.UserEmail,testDataforOrder.UserPass);


    const ProductName = page.locator("div.card-body h5").first();
    console.log('First Product Name :', await ProductName.textContent());
    await expect(ProductName).toContainText("ADIDAS");
    //TO GET ALL PRODUCTS NAMES  
    await page.locator("div.card-body h5").last().waitFor();  // waitfor - to waituntil specific locator to load.
    console.log('All Products_Name :', await page.locator("div.card-body h5").allTextContents());

    //select and add to cart one product>> 
    const bool = await page.locator("h5:has-text('ZARA COAT 3')").isVisible();
    await expect(bool).toBeTruthy();
    const dashboradpage = poManager.getDashboradPage()
    await dashboradpage.AddToCart(testDataforOrder.productName);

    //Enter payment details and Place oder>>
    const payment = poManager.getPaymentPage();
    await payment.paymentDetails(testDataforOrder.Cvv,testDataforOrder.CardName,testDataforOrder.country,' India');
    await expect(page.locator("label[type='text']")).toHaveText(testDataforOrder.UserEmail);

   
    //goto 'Your Orders' scan page find orderID and view order summary >>
    await expect(page.locator("h1.hero-primary")).toContainText(" Thankyou for the order. ");
    console.log(await page.locator('h1.hero-primary').textContent());
    const ordrId:any =await  page.locator("tbody label").nth(1).textContent();
    console.log(ordrId);
    const expectedId = ordrId.replace(/\|/g, "").trim();
    
    const order = poManager.getOrdersPage();
    await order.ViewOrder(expectedId);
    

    //TC_05 On order summary page verify orderdetails>>
    await expect(page.locator("div .email-title")).toHaveText(" order summary ");

    const orderdtls = await page.locator("div .col-text").textContent();
    await expect(ordrId.includes(orderdtls)).toBeTruthy();
    const billid = await page.locator("div .text").nth(0);
    const billcountry = await page.locator("div .text").nth(1);
    const dilvid = await page.locator("div .text").nth(2);
    const dilvcountry = await page.locator("div .text").nth(3);

    await expect(billid).toHaveText(testDataforOrder.UserEmail);
    await expect(billcountry).toContainText("India");
    await expect(dilvid).toHaveText(testDataforOrder.UserEmail);
    await expect(dilvcountry).toContainText("India");
    await expect(page.locator("div .title")).toHaveText(testDataforOrder.productName);

});