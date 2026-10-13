const { test, expect } = require("@playwright/test");



//30 sec default test timeout 
test('test', async ({ page }) => {
    //test.setTimeout(timeout =10000); //@ test level >> Changes the test await timeout for the current test. 
    const slowExpect = expect.configure({ timeout: 10000 });  //create variable for assertion timeout & can apply within specific test.
    page.setDefaultTimeout(9000); //set action timeout @ test level for each actions within test (expect any specific timeout mentioned @steplevel)


    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Student").check();    //when locator with Label tag
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByPlaceholder("Password").fill("Omkar124"); //when locator with Placeholder atribute
    await page.getByRole("button", { name: 'submit' }).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();

    //5 sec default timeout for expect assertion (@ step level >> {timeout : 10000}) will apply to specific step.
    await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({ timeout: 10000 });

    await page.getByRole("link", { name: 'Shop' }).click({ timeout: 5000 }); //set action timeout @ step level
    await slowExpect(page.locator("h1.my-4")).toHaveText("Shop Name");  //here applys slowExpect ,so timeout will be 90000 for this step.
    await page.locator("app-card.col-lg-3").filter({ hasText: 'Samsung Note 8' }).getByRole("button").click();
    //await page.getByRole("button",{name : ' Checkout '}).click();
    await console.log("!!Test Passed!!");


    /* timeout priority as fllows:
    1. step level -> 2. test level -> 3. Global level */

});