const { test, expect } = require('@playwright/test');

test('visual testing demo', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');

  await page.screenshot({ path: 'UISS.png' }); //captured screenshot of page and The file path to save the image to.
//  await expect(await page.screenshot({ path: 'UISS.png' })).toMatchSnapshot('pageone.png') //toMatchSnapshot :To compare screenshots.

  await page.getByRole("button", { name: 'Submit' }).click();
  await page.locator("div.alert-success").screenshot();
});