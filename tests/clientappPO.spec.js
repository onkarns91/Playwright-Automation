const { test, expect } = require("@playwright/test");
const { POManager } = require('../PageObjects/POManager');
const testdata = JSON.parse(JSON.stringify(require('../Utils/ClientappTestData.json')));

test('login js > dashboard js', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);

    const loginpage = poManager.getLoginPage()
    await loginpage.validLogin(testdata.UserEmail,testdata.UserPass);


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
    await dashboradpage.AddToCart(testdata.productName);

    //Enter payment details and Place oder>>
    const payment = poManager.getPaymentPage();
    await payment.paymentDetails(testdata.Cvv,testdata.CardName,testdata.country,' India');
    await expect(page.locator("label[type='text']")).toHaveText(testdata.UserEmail);

   
    //goto 'Your Orders' scan page find orderID and view order summary >>
    await expect(page.locator("h1.hero-primary")).toContainText(" Thankyou for the order. ");
    console.log(await page.locator('h1.hero-primary').textContent());
    const ordrId =await  page.locator("tbody label").nth(1).textContent();
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

    await expect(billid).toHaveText(testdata.UserEmail);
    await expect(billcountry).toContainText("India");
    await expect(dilvid).toHaveText(testdata.UserEmail);
    await expect(dilvcountry).toContainText("India");
    await expect(page.locator("div .title")).toHaveText(" ZARA COAT 3 ");

});