const { expect } = require('@playwright/test');
const { customtest } = require("./Utils/Fixtures");


customtest('custom fixture demo', async ({ authenticatedpage, CreateOrder,TestData }) => {

    //for login using 'authenticatedpage' fixutre. 
    await authenticatedpage.goto("https://rahulshettyacademy.com/client");

    //to create oder using 'CreateOrder' fixture.
    const orderbtn = authenticatedpage.locator("li [routerlink*='myorders']");
    await orderbtn.click();
    await expect(authenticatedpage.getByText(CreateOrder.odrId)).toBeVisible();
    console.log('prodctName :',TestData.prodctName); //data driven

});