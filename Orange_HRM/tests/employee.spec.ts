import {test ,expect} from '@playwright/test';
import { EmployeePage } from '../pages/EmployeePage';
import { LoginPage } from '../pages/LoginPage';

const user: { Username: string, Password: string } = { Username: 'Admin', Password: 'admin123' }
const Base_Url = "https://opensource-demo.orangehrmlive.com/";




test('add new employee',async({page})=>{
test.setTimeout(90000);
const login = new LoginPage(page);
await login.navigateToPage(Base_Url);
await login.ValidLogin(user.Username,user.Password);
const employee = new EmployeePage(page);
await expect(employee.viewEmployeeList()).toBeTruthy();
await employee.AddEmployee('omkar','sawant','4564','Omkar@8969','Pass@123');



});