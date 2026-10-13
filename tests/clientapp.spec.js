const { test, expect } = require("@playwright/test");

//TC_01 login with valid credentials and get name of first product>>

test('get name of first product', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client", { waitUntil: "domcontentloaded", timeout: 60000 });
    console.log('Page Title :', await page.title());
    const email = "onkar11@test.com";//anshika@gmail.com
    const pass = "Onkar1999";//Iamking@000
    const UserEmail = page.locator("input#userEmail");
    const UserPass = page.locator("input#userPassword");
    const Loginbtn = page.locator("input#login");
    await UserEmail.fill(email);
    await UserPass.fill(pass);
    await Loginbtn.click();

    const ProductName = page.locator("div.card-body h5").first();
    console.log('First Product Name :', await ProductName.textContent());
    await expect(ProductName).toContainText("ADIDAS");
    //TO GET ALL PRODUCTS NAMES  
    await page.locator("div.card-body h5").last().waitFor();  // waitfor - to waituntil specific locator to load.
    console.log('All Products Name :', await page.locator("div.card-body h5").allTextContents());

    //TC_02 select and add to cart one product>>
    const product = page.locator(".card-body");
    const productName = "ZARA COAT 3";
    const count = await product.count();
    for (let i = 0; i < count; ++i) {
        if (await product.nth(i).locator("b").textContent() === productName) {
            await product.nth(i).locator("text= Add To Cart").click();
            break;
        }
    };
    const cart = page.locator('[routerlink="/dashboard/cart"]');
    await cart.click();
    await page.locator("div li").first().waitFor({ timeout: 60000 });
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    //("h3:has-text('ZARA COAT 3')") ==syntax >> ("tagname:has-text('')") , :has-text >> called as 'sudo class'. //isVisible() >>Returns whether the element is visible. return boolean value.
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();


    //TC_03 Enter payment details and Place oder>>
    const cvvInput = page.locator("input.input.txt").nth(1);
    await cvvInput.fill("123");
    const cardName = page.locator("input.input.txt").nth(2);
    await cardName.fill("onkar sawant");
    const country = page.locator('div [placeholder*="Country"]');
    //pressSequentially("Enter") >> to press multiple keys in sequence.
    await country.pressSequentially("ind", { delay: 150 });
    const dropdwn = page.locator(".ta-results");
    await dropdwn.waitFor();
    const optncount = await dropdwn.locator("button").count();

    for (let i = 0; i < optncount; ++i) {
        const value = await dropdwn.locator("button").nth(i).textContent();
        if (value === " India") {
            await dropdwn.locator("button").nth(i).click();
            console.log('Selected country :', value);
            break;
        }
    }
    await expect(page.locator("label[type='text']")).toHaveText(email);



    await page.locator("a.action__submit").click();

    //TC_04 goto 'Your Orders' scan page find orderID and view order summary >>
    await expect(page.locator("h1.hero-primary")).toContainText(" Thankyou for the order. ");
    console.log(await page.locator('h1.hero-primary').textContent());
    const odrId = await page.locator("tbody label").nth(1).textContent();
    console.log(odrId);



    const orderbtn = page.locator("li [routerlink*='myorders']");
    await orderbtn.click();


    const row = page.locator("tbody tr");
    await row.first().waitFor();
    const rowcount = await row.count();
    const expectedId = odrId.replace(/\|/g, "").trim();



    for (let i = 0; i < rowcount; ++i) {
        const id = await row.nth(i).locator("th").textContent();
        if (id.includes(expectedId)) {
            console.log("MATCH FOUND! 🎯");
            await row.nth(i).locator("td button.btn-primary").click();
            break;
        }

    }
    //TC_05 On order summary page verify orderdetails>>
    await expect(page.locator("div .email-title")).toHaveText(" order summary ");

    const orderdtls = await page.locator("div .col-text").textContent();
    await expect(odrId.includes(orderdtls)).toBeTruthy();
    const billid = await page.locator("div .text").nth(0);
    const billcountry = await page.locator("div .text").nth(1);
    const dilvid = await page.locator("div .text").nth(2);
    const dilvcountry = await page.locator("div .text").nth(3);

    await expect(billid).toHaveText(email);
    await expect(billcountry).toContainText("India");
    await expect(dilvid).toHaveText(email);
    await expect(dilvcountry).toContainText("India");
    await expect(page.locator("div .title")).toHaveText(" ZARA COAT 3 ");

});