//Topic 1 — JavaScript Variables ,Focus: let, const, object properties, scope & return.

//Assignment 1 — API Login Token:Task: Use the Yahoo user’s login API to obtain a token and store it in the appropriate variable.
const { test, expect, request } = require('@playwright/test');

const Login_api = "https://api.eventhub.rahulshettyacademy.com/api/auth/login";
const Login_payload = { email: "om@yahoo.com", password: "Omkar@1999" };

let token;

test.beforeAll(async () => {
    const apicontext = await request.newContext();
    const apiresponse = await apicontext.post(Login_api, { data: Login_payload });
    console.log('apiresponse :', apiresponse);
    await expect(apiresponse).toBeOK();
    const apiresponsejson = await apiresponse.json();
    token = apiresponsejson.token;
    await expect(token).toBeTruthy();
}
);

test('extract login token', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto('https://eventhub.rahulshettyacademy.com');
    console.log('\ntoken :', token);

});

//Assignment 3:Task: Manage the data for both Yahoo and Gmail users.

const user = {
    Gmail_user: { email: "om@Gmail.com", password: "Omkar@1999" },
    Yahoo_user: { email: "om@yahoo.com", password: "Omkar@1999" },
};

const yahoo = user.Gmail_user;
const Gmail = user.Yahoo_user;
console.log('yahoo_email :',yahoo.email);
console.log('Gmail_email :',Gmail.email);