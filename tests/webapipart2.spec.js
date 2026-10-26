const { test, expect } = require("@playwright/test");


const email = "onkar11@test.com";//anshika@gmail.com
const pass = "Onkar1999";//Iamking@000
let webcontext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client", { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(pass);
    await page.getByRole("button", { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' }); //storageState :Returns storage state for this browser context
    webcontext = await browser.newContext({ storageState: 'state.json' });

});


test('@API get all product name', async () => {
    const page = await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");

    //TO GET ALL PRODUCTS NAMES  
    await page.locator(".card-body b").last().waitFor({ timeout: 5000 });  // waitfor - to waituntil specific locator to load.
    console.log('All Products_Name :', await page.locator(".card-body h5 b").allTextContents());

})

test('@API select product and make payment', async () => {
    const page = await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: "Add To Cart" }).click();
    await page.getByRole("listitem").getByRole("button", { name: 'Cart' }).click();

    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button", { name: 'Checkout' }).click();


    //Enter payment details and Place oder>>
    const cvvInput = page.locator("input.input.txt").nth(1);
    await cvvInput.fill("123");
    const cardName = page.locator("input.input.txt").nth(2);
    await cardName.fill("onkar sawant");


    await page.getByPlaceholder("Select Country").pressSequentially("ind", { delay: 150 });

    await page.getByRole("button", { name: ' India' }).nth(1).click();
    await page.getByText("Place Order ").click();
    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
})