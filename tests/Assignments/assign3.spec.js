//Assignment 2 — Event ID & Booking ID:Task: Get the event ID from the API, create a booking, and store the booking ID.

const { expect } = require('@playwright/test');
const base = require('@playwright/test');

const eventPayload = {
    "title": `Automation Test Event ${Date.now()}`,
    "description": "A premier technology conference.",
    "category": "Conference",
    "venue": "Bangalore International Centre",
    "city": "Bangalore",
    "eventDate": "2026-12-24T09:00:00.000Z",
    "price": 1500,
    "totalSeats": 500,
    "imageUrl": "https://example.com/banner.jpg",
};


const authenticatedPage = base.test.extend({
    testData:
    {
        users:
        {
            email: "om@yahoo.com",
            password: "Omkar@1999",
        },
        Base_Url: 'https://eventhub.rahulshettyacademy.com',
        ApiBase_Url: 'https://api.eventhub.rahulshettyacademy.com/api',
    },

    login: async ({ browser, testData }, use) => {
        const { email, password } = testData.users; //inject testdata 
        const { Base_Url } = testData;
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(Base_Url);
        await page.getByPlaceholder('you@email.com').fill(email);
        await page.locator("input#password").fill(password);
        await page.getByRole("button", { name: 'Sign In' }).click();
        await use(page);
        await context.close();

    },
    createEvent: async ({ playwright, testData }, use) => {
        let response1 = {}
        const { email, password } = testData.users;
        const { ApiBase_Url } = testData;
        const apicontext = await playwright.request.newContext();
        // Step 1: API login
        const response = await apicontext.post(`${ApiBase_Url}/auth/login`, {
            data: {
                email: email,
                password: password,
            },
            headers: { 'content-type': 'application/json' },
        });
        expect(response.ok()).toBeTruthy();
        const responsejson = await response.json()
        const token = await responsejson.token;
        expect(token).toBeTruthy();
        response1.token = token;
        // Step 2: Create event
        const createRes = await apicontext.post(`${ApiBase_Url}/events`,
            {
                data: eventPayload,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            });
        expect(createRes.ok()).toBeTruthy();
        const body = await createRes.json();
        console.log("Create event response:", body)
        const eventId = await body.data.id;
        response1.eventId = eventId;
        await use(response1); // Step 3: Pass event ID and token to the test
        const deleteResponse = await apicontext.delete(`${ApiBase_Url}/events/${eventId}`,
            { headers: { Authorization: `Bearer ${token}` } });


        // teardown — clean up the event after the test finishes
        await apicontext.dispose();

    },
}
);


authenticatedPage('Build a Two-Fixture Test', async ({ login, createEvent }) => {

    await login.locator('a[href="/events"]').first().click();
    console.log("\nCreated Event ID:", createEvent.eventId);
    console.log("\nCreated Event token:", createEvent.token);

});