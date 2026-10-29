import { Page, expect, Locator } from '@playwright/test'
import { BasePage } from '../pages/BasePage';
import { EmployeePage } from '../pages/EmployeePage';
import { LoginPage } from '../pages/LoginPage'

export class PageManger {

    page: Page;
    BasePage: BasePage;
    EmployeePage: EmployeePage;
    LoginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.BasePage = new BasePage(this.page)
        this.EmployeePage = new EmployeePage(this.page)
        this.LoginPage = new LoginPage(this.page)
    }
    getBasePage() {
        return this.BasePage;
    }
    getLoginPage() {
        return this.LoginPage;
    }
    getEmployeePage() {
        return this.EmployeePage;
    }

}