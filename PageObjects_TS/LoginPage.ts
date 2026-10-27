import { Page , Locator} from '@playwright/test';
export class LoginPage {

    page:Page;
    UserEmail : Locator;
    UserPass : Locator;
    Loginbtn : Locator;

    constructor(page:Page) {
        this.page = page;
        this.UserEmail = this.page.locator("input#userEmail");
        this.UserPass = this.page.locator("input#userPassword");
        this.Loginbtn = this.page.locator("input#login");
    };


    async validLogin(UserEmail:string, UserPass:string) {
        await this.page.goto("https://rahulshettyacademy.com/client", { waitUntil: "domcontentloaded", timeout: 60000 });
        await this.UserEmail.fill(UserEmail);
        await this.UserPass.fill(UserPass);
        await this.Loginbtn.click();
    };

};
module.exports = { LoginPage }