import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigateToPage(url: string) {

        await this.page.goto(url,{waitUntil: 'domcontentloaded',timeout :30000});
    }
    async enterText(locator: Locator, text: string){
        await locator.fill(text);
    }

    async clickElement(locator: Locator) {
        await locator.click()
    }
    async verifyvisible(locator: Locator) {
        await expect(locator).toBeVisible()
    }

}

