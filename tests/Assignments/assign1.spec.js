const { test, expect } = require('@playwright/test');

const SIX_EVENTS_RESPONSE = {
    data: [
        { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
        { id: 2, title: 'Rock Night Live', category: 'Concert', eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
        { id: 3, title: 'IPL Finals', category: 'Sports', eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
        { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
        { id: 5, title: 'Lollapalooza India', category: 'Festival', eventDate: '2025-06-20T12:00:00.000Z', venue: 'Mahalaxmi Racecourse', city: 'Mumbai', price: '3000', totalSeats: 5000, availableSeats: 2000, imageUrl: null, isStatic: false },
        { id: 6, title: 'AI & ML Expo', category: 'Conference', eventDate: '2025-06-25T10:00:00.000Z', venue: 'Bangalore International Exhibition Centre', city: 'Bangalore', price: '750', totalSeats: 300, availableSeats: 180, imageUrl: null, isStatic: false },
    ],
    pagination: { page: 1, totalPages: 1, total: 6, limit: 12 },
};

const FOUR_EVENTS_RESPONSE = {
    data: [
        { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
        { id: 2, title: 'Rock Night Live', category: 'Concert', eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
        { id: 3, title: 'IPL Finals', category: 'Sports', eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
        { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
    ],
    pagination: { page: 1, totalPages: 1, total: 4, limit: 12 },
};


test('Banner IS visible when 6 events are returned', async ({ page }) => {

    await page.route('**/api/events**', async route => {
        let body = JSON.stringify(SIX_EVENTS_RESPONSE);
        await route.fulfill({
            Status: 200,
            contentType: 'application/json',
            body,
        })
    })
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder('you@email.com').fill("onkar11@test.com");
    await page.locator("input#password").fill("Onkar@1999");
    await page.getByRole("button", { name: 'Sign In' }).click();
    await expect(page.locator("span.inline-flex").first()).toBeVisible();
    await page.locator("span.inline-flex").first().click();

    const Cardcount = await page.locator("article#event-card").count();
    await console.log('Total Cardcount :', Cardcount);
    await expect(Cardcount).toBe(6);
    await expect(page.locator("div.flex.items-start").first()).toBeVisible();
    await expect(page.locator("strong.mx-1").first()).toContainText("9 bookings");
});


test('Banner is NOT visible when 4 events are returned', async ({ page }) => {

    await page.route('**/api/events**', async route => {
        const body = JSON.stringify(FOUR_EVENTS_RESPONSE);
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body,
        })
    });
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder('you@email.com').fill("onkar11@test.com");
    await page.locator("input#password").fill("Onkar@1999");
    await page.getByRole("button", { name: 'Sign In' }).click();
    await expect(page.locator("span.inline-flex").first()).toBeVisible();
    await page.locator("span.inline-flex").first().click();

    const Cardcount = await page.locator("article#event-card").count();
    await console.log('Total Cardcount :', Cardcount);
    await expect(Cardcount).toStrictEqual(4);
    await expect(await page.locator("strong.mx-1").first()).not.toBeVisible();

});