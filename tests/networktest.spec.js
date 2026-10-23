const { test, expect, request } = require("@playwright/test");  //request :Exposes API that can be used for the Web API testing.
const { APiutils } = require('../Utils/APiutils');

const loginpayload = { userEmail: "onkar11@test.com", userPassword: "Onkar1999" };
const orderpayload = { orders: [{ country: "Bermuda", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
const bodypayload = { data: [], message: "No Orders" };


let response;
test.beforeAll(async () =>     //Declares a beforeAll hook that is executed once per worker process before all tests.
{
    //login API context
    const apicontext = await request.newContext(); //Creates new instances of APIRequestContext.
    const APiutil = new APiutils(apicontext, loginpayload);
    response = await APiutil.CreateOrder(orderpayload);
});


//test.beforeEach(()=> {}); //Declares a beforeEach hook that is executed before each test.

test('APT intercept response ', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    const email = "onkar11@test.com";
    await page.goto("https://rahulshettyacademy.com/client");
    const orderbtn = page.locator("li [routerlink*='myorders']");

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a7e11e221054ba465d0cc2f", //Routing provides the capability to modify network requests that are made by a page.
        async route => {
            const response = await page.request.fetch(route.request());  //Fetch the actual API response
            let body = JSON.stringify(bodypayload);    //stringify :Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
            route.fulfill //Send a modified response to the website
                ({
                    response,
                    body,
                })
        });
    //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    await orderbtn.click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a7e11e221054ba465d0cc2f");
    //await page.pause();
    console.log(await page.locator(".mt-4").textContent());
});