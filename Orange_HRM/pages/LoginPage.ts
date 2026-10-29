import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class LoginPage extends BasePage{

    Username : Locator;
    password : Locator;
    loginBtn : Locator;
    forgetPass : Locator;
    resetPass : Locator;
    invalidText : Locator;

    constructor(page: Page){
        super(page)
        this.Username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('password'); 
        this.loginBtn = page.getByRole('button',{name :' Login '});
        this.forgetPass = page.getByText('Forgot your password? ');
        this.resetPass =page.locator(".oxd-button").nth(1);
        this.invalidText = page.getByText('Invalid credentials');
    }
    async ValidLogin(Username:string,password:string){
        await this.enterText(this.Username,Username);
        await this.enterText(this.password,password);
        await this.clickElement(this.loginBtn);
    }
    async InvalidLogin(Username:string ,password:string){
        await this.enterText(this.Username,Username);
        await this.enterText(this.password,password);
        await this.clickElement(this.loginBtn);
       await this.invalidText.waitFor({state : 'visible'});
        return await this.invalidText.isVisible()
    }
    async forgetPassjourney(Username:string){
        await this.verifyvisible(this.forgetPass);
        await this.clickElement(this.forgetPass);
        await this.enterText(this.Username,Username);
        await this.clickElement(this.resetPass);    
    }

}