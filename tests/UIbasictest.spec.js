const { test, expect } = require("@playwright/test");

test('browser abort-network calls', async ({ browser }) =>   //'test' -annotation
{
    const context = await browser.newContext();
    const page = await context.newPage();
    //locator
    const username = page.locator("input#username");
    const password = page.locator("input#password");
    const signin = page.locator('input[value="Sign In"]');

    page.route('**/*.{css,jpg}', route => route.abort()); //Aborts the route's request.
    page.on('request', request => console.log(request.url()));   //to print all requests URL
    page.on('response', response => console.log(response.url(), response.status())); //to print all requests URL with status

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signin.click();
    await page.getByRole("button", { name: 'Add ' }).nth(0).click();
    await page.pause();
});
 