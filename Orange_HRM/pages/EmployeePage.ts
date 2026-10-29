import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';



export class EmployeePage extends BasePage {

    PimModule: Locator;
    employeeList: Locator;
    addEmployee: Locator;
    FirstName: Locator;
    LastName: Locator;
    toggleBtn: Locator;
    userName: Locator;
    password: Locator;
    cnfpassword: Locator;
    saveBtn: Locator;
    empID: Locator;
    checkBox: Locator;
    actnBtn: Locator;
    FstName: Locator;


    constructor(page: Page) {
        super(page)
        this.PimModule = page.locator("li.oxd-main-menu-item-wrapper").nth(1);
        this.employeeList = page.locator(".orangehrm-container");
        this.addEmployee = page.getByRole("link", { name: 'Add Employee' });
        this.FirstName = page.getByPlaceholder("First Name");
        this.LastName = page.getByPlaceholder("Last Name");
        this.empID = page.locator("input.oxd-input").nth(4)
        this.toggleBtn = page.locator('.oxd-switch-wrapper')
        this.userName = page.locator("input.oxd-input--active").nth(5);
        this.password = page.locator("input[type='password']").nth(0);
        this.cnfpassword = page.locator("input[type='password']").nth(1);
        this.saveBtn = page.getByRole('button', { name: ' Save ' });
        this.checkBox = page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').first();
        this.actnBtn = page.getByRole('button').filter({ hasText: /^$/ }).nth(3);
        this.FstName = page.getByRole('textbox', { name: 'First Name' });
    }
    async viewEmployeeList() {
        await this.clickElement(this.PimModule);
        await this.employeeList.waitFor({ state: 'visible' });
        return await this.employeeList.isVisible();
    }
    async AddEmployee(FirstName: string, LastName: string, empID: string, userName: string, Passwrd: string) {
        await Promise.all([
            this.page.waitForURL('**/pim/addEmployee'),
            this.clickElement(this.addEmployee)
        ]);
        await this.enterText(this.FirstName, FirstName);
        await this.enterText(this.LastName, LastName);
        await this.empID.clear();
        await this.enterText(this.empID, empID);
        await this.clickElement(this.toggleBtn);
        await this.enterText(this.userName, userName);
        await this.enterText(this.password, Passwrd);
        await this.enterText(this.cnfpassword, Passwrd);
        console.log('empID :',await this.empID.inputValue())
        console.log('userName :',await this.userName.inputValue())
        await this.clickElement(this.saveBtn);
        await expect(this.page).toHaveURL(/\/viewPersonalDetails\/empNumber\/\d+$/, { timeout: 9000 })
    }
    async editEmployee(editFstName: string) {
        await this.page.waitForLoadState('domcontentloaded', { timeout: 3000 })
        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await this.clickElement(this.PimModule);
        await this.clickElement(this.checkBox);
        await this.clickElement(this.actnBtn);
        await this.page.waitForTimeout(3000);
        await this.clickElement(this.FstName);
        await this.enterText(this.FstName, editFstName);
        await this.page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
        await this.page.locator('form').filter({ hasText: 'Blood Type-- Select --' }).getByRole('button').click();
        await expect(this.page.getByText('Success', { exact: true })).toBeVisible();

    }


}
