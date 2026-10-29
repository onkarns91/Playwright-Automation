import {Page,Locator,expect} from '@playwright/test';
import { BasePage } from '../pages/BasePage';



export class EmployeePage extends BasePage{

    PimModule : Locator;
    employeeList : Locator ;
    addEmployee : Locator;
    FirstName : Locator;
    LastName : Locator;
    toggleBtn : Locator;
    userName : Locator;
    password : Locator;
    cnfpassword : Locator;
    saveBtn : Locator;
    empID : Locator;



    constructor(page :Page)
    {
        super(page)
        this.PimModule = page.locator("li.oxd-main-menu-item-wrapper").nth(1);
        this.employeeList = page.locator(".orangehrm-container");
        this.addEmployee = page.getByRole("link",{name : 'Add Employee'});
        this.FirstName = page.getByPlaceholder("First Name");
        this.LastName = page.getByPlaceholder("Last Name");
        this.empID = page.locator("input.oxd-input").nth(4)
        this.toggleBtn = page.locator('.oxd-switch-wrapper')
        this.userName = page.locator("input.oxd-input--active").nth(5);
        this.password = page.locator("input[type='password']").nth(0);
        this.cnfpassword = page.locator("input[type='password']").nth(1);
        this.saveBtn = page.getByRole('button',{name :' Save '});
    }
    async viewEmployeeList()
    {
        await this.clickElement(this.PimModule);
        await this.employeeList.waitFor({state :'visible'});
        return await this.employeeList.isVisible();
    }
    async AddEmployee(FirstName:string,LastName:string,empID:string, userName:string,Passwrd:string){
        await Promise.all([
            this.page.waitForURL('**/pim/addEmployee'),
            this.clickElement(this.addEmployee)
        ]);
        await this.enterText(this.FirstName,FirstName);
        await this.enterText(this.LastName,LastName);
        await this.empID.clear();
        await this.enterText(this.empID,empID);
        await this.clickElement(this.toggleBtn);
        await this.enterText(this.userName,userName);
        await this.enterText(this.password,Passwrd);
        await this.enterText(this.cnfpassword,Passwrd);
        await this.clickElement(this.saveBtn);
        await expect(this.page).toHaveURL(/\/viewPersonalDetails\/empNumber\/\d+$/,{timeout:9000})
    }


}
