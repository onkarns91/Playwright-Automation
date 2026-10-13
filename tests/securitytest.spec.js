const { test, expect } = require('@playwright/test');

//data
const email = "onkar11@test.com";//anshika@gmail.com
const pass = "Onkar1999";//Iamking@000



test('security test request intercept', async ({ page }) => {
    //login
    await page.goto("https://rahulshettyacademy.com/client", { waitUntil: "domcontentloaded", timeout: 60000 });
    //locator
    const UserEmail = page.locator("input#userEmail");
    const UserPass = page.locator("input#userPassword");
    const Loginbtn = page.locator("input#login");
    await UserEmail.fill(email);
    await UserPass.fill(pass);
    await Loginbtn.click();

    await page.getByRole("button", { name: 'ORDERS' }).click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id*",     //"*" :to include all
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a7e11e221054ba465f8tc28' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p.blink_me")).toHaveText("You are not authorize to view this order");
    await expect(page.getByText('You are not authorize to view')).toBeVisible();

});