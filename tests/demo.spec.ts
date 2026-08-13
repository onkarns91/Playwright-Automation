import { test, expect } from '@playwright/test';


test ('first test',async ({ page }) => {

    await page.goto('https://playwright.dev');

     await expect(page).toHaveTitle(/Playwright/);
     //await page.waitForTimeout(5000);
     await page.pause();  
});


