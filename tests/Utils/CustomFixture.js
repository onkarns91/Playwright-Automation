const base = require("@playwright/test");
const { APiutils } = require('./APiutils.js');
const {request} = require("@playwright/test"); 
const loginpayload = { userEmail: "onkar11@test.com", userPassword: "Onkar1999" };
const orderpayload = { orders: [{ country: "Bermuda", productOrderedId: "6960eac0c941646b7a8b3e68" }] };

exports.customtest = base.test.extend(
    {
        authenticatedpage: async ({ page }, use) => {
            const email = "onkar11@test.com";//anshika@gmail.com
            const pass = "Onkar1999";//Iamking@000
            await page.goto("https://rahulshettyacademy.com/client", { waitUntil: "domcontentloaded", timeout: 60000 });
            await page.getByPlaceholder("email@example.com").fill(email);
            await page.getByPlaceholder("enter your passsword").fill(pass);
            await page.getByRole("button", { name: 'Login' }).click();
            await page.waitForLoadState('networkidle');
            await use(page);
        },


        CreateOrder: async ({},use) => {
            const apicontext = await request.newContext(); 
            const APiutil = new APiutils(apicontext, loginpayload);
            const response = await APiutil.CreateOrder(orderpayload);
            await use(response);
        },

    });


