import { test, expect } from '@playwright/test';
import { PageManger } from '../pages/PageManager';

const user: { Username: string, Password: string } = { Username: 'Admin', Password: 'admin123' }
const Base_Url = "https://opensource-demo.orangehrmlive.com/";



//test.describe.configure({mode :'parallel'})
test.only('add new employee', async ({ page }) => {
    test.setTimeout(90000);
    var uniqueEmpID = Date.now().toString().slice(-4);
    const login = new PageManger(page);
    await login.getBasePage().navigateToPage(Base_Url);
    await login.getLoginPage().ValidLogin(user.Username, user.Password);
    await expect(login.getEmployeePage().viewEmployeeList()).toBeTruthy();
    await login.getEmployeePage().AddEmployee('omkar', 'sawant', uniqueEmpID, `Omkar${uniqueEmpID}`, 'Pass@123');  //change before run :empID ,Username


});

test('edit existing employee', async ({ page }) => {
    test.setTimeout(90000);
    const login = new PageManger(page);
    await login.getBasePage().navigateToPage(Base_Url);
    await login.getLoginPage().ValidLogin(user.Username, user.Password);
    await login.getEmployeePage().editEmployee('omkarnss');
});