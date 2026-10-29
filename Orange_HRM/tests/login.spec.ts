import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const user: { Username: string, Password: string } = { Username: 'Admin', Password: 'admin123' }
const Base_Url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
test('login with valid credentials', async ({ page }) => {

    const login = new LoginPage(page);
    await login.navigateToPage(Base_Url);
    expect(await page.title()).toContain('OrangeHRM');
    await login.ValidLogin(user.Username, user.Password);
    // await page.pause()
    await page.waitForTimeout(3000);
    //const screenshot =await page.screenshot({path :'OrangeDashborad.png'});
    //await expect (screenshot).toMatchSnapshot('orange.png');
    await expect(page).toHaveURL(/dashboard/);
});

test('login with Invalid credentials', async ({ page }) => {

    const login = new LoginPage(page);
    await login.navigateToPage(Base_Url);
    const validation = await login.InvalidLogin(user.Username,'dummy')
    expect(validation).toBeTruthy();

});



test('forget Password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToPage(Base_Url);
    await login.forgetPassjourney('dummy');
    await expect(page.getByText('Reset Password link sent successfully')).toBeVisible({timeout:60000});
    const bool =await page.getByText('A reset password link has been sent to you via email').isVisible()
    console.log('boolean is :',bool);
});