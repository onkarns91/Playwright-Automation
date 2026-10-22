const { test, expect } = require("@playwright/test");
const { LoginPage } = require('../PageObjects/LoginPage');
const { DashboradPage } = require('../PageObjects/DashboradPage');
const { PaymentPage } = require('../PageObjects/PaymentPage');
const { OrdersPage } = require('../PageObjects/OrdersPage');


test('login js > dashboard js', async ({ browser }) => {
    const UserEmail = "onkar11@test.com";//anshika@gmail.com
    const UserPass = "Onkar1999";//Iamking@000
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginpage = new LoginPage(page);
    await loginpage.validLogin(UserEmail,UserPass);


    const ProductName = page.locator("div.card-body h5").first();
    console.log('First Product Name :', await ProductName.textContent());
    await expect(ProductName).toContainText("ADIDAS");
    //TO GET ALL PRODUCTS NAMES  
    await page.locator("div.card-body h5").last().waitFor();  // waitfor - to waituntil specific locator to load.
    console.log('All Products_Name :', await page.locator("div.card-body h5").allTextContents());

    //select and add to cart one product>>
    const productName = "ZARA COAT 3"; 
    const bool = await page.locator("h5:has-text('ZARA COAT 3')").isVisible();
    await expect(bool).toBeTruthy();
    const dashboradpage = new DashboradPage(page);
    await dashboradpage.AddToCart(productName);

    //Enter payment details and Place oder>>
    const Cvv = '123'
    const CardName = "onkar sawant"; 
    const countryName = "ind"
    const payment = new PaymentPage(page);
    await payment.paymentDetails(Cvv,CardName,countryName);
    await expect(page.locator("label[type='text']")).toHaveText(UserEmail);

   
    //goto 'Your Orders' scan page find orderID and view order summary >>
    await expect(page.locator("h1.hero-primary")).toContainText(" Thankyou for the order. ");
    console.log(await page.locator('h1.hero-primary').textContent());
    console.log(ordrId);
    const order = new OrdersPage(page);
    await order.ViewOrder();


    //TC_05 On order summary page verify orderdetails>>
    await expect(page.locator("div .email-title")).toHaveText(" order summary ");

    const orderdtls = await page.locator("div .col-text").textContent();
    await expect(ordrId.includes(orderdtls)).toBeTruthy();
    const billid = await page.locator("div .text").nth(0);
    const billcountry = await page.locator("div .text").nth(1);
    const dilvid = await page.locator("div .text").nth(2);
    const dilvcountry = await page.locator("div .text").nth(3);

    await expect(billid).toHaveText(UserEmail);
    await expect(billcountry).toContainText("India");
    await expect(dilvid).toHaveText(UserEmail);
    await expect(dilvcountry).toContainText("India");
    await expect(page.locator("div .title")).toHaveText(" ZARA COAT 3 ");

});