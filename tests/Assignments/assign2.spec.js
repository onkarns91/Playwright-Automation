const { test, expect, request } = require('@playwright/test');

class Api {
  constructor(ApiContext) {
    this.ApiContext = ApiContext;

    this.user = {
      Yahoo_User: {
        email: "om@yahoo.com",
        password: "Omkar@1999",
      },
      Gmail_User: {
        email: "om@Gmail.com",
        password: "Omkar@1999",
      }
    };
    this.Base_URL = 'https://eventhub.rahulshettyacademy.com';
    this.API_URL = 'https://api.eventhub.rahulshettyacademy.com/api';
    this.token = null;
    this.eventID = null;
    this.yahooBookingId = null;
  };

  async LoginViaAPI(user) {
    const Apiresponse = await this.ApiContext.post(`${this.API_URL}/auth/login`, {
      data: user,
    });
    await expect(Apiresponse.ok()).toBeTruthy();
    const Apiresponsejson = await Apiresponse.json();
    this.token = await Apiresponsejson.token;
    return (this.token)
  }
  async GeteventId() {
    //Fetch()/get() events via API to get a valid event ID
    let response = {};
    response.token = await this.token
    const eventresponse = await this.ApiContext.fetch(`${this.API_URL}/events`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,//pass valid token of event
        }
      }
    );
    await expect(eventresponse.ok()).toBeTruthy();
    const eventresponsejson = await eventresponse.json();
    this.eventID = await eventresponsejson.data[0].id; //get EventID 
    console.log('EventID :', this.eventID);
    response.eventID = await this.eventID;
    return response;
  }
  async CreateBooking(user) {
    const bookingResponse = await this.ApiContext.post(`${this.API_URL}/bookings`, //this.ApiContext
      {
        data: {
          "eventId": this.eventID,
          "customerName": "Yahoo User",
          "customerEmail": user.email,
          "customerPhone": "9876543210",
          "quantity": 1
        },
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    );
    await expect(bookingResponse).toBeOK()//.toBeTruthy();
    const bookingResponsejson = await bookingResponse.json();
    //console.log('bookingResponsejson :', bookingResponsejson);
    this.yahooBookingId = await bookingResponsejson.data.id;
    console.log(this.yahooBookingId);
    return this.yahooBookingId;
  }

  // Login as Gmail user via API 
  async UIlogin(page, user) {
    await page.goto(this.Base_URL);
    await page.getByPlaceholder('you@email.com').fill(user.email);
    await page.locator("input#password").fill(user.password);
    await page.getByRole("button", { name: 'Sign In' }).click();
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
  }
};



test('Cross-User Booking Access Denied', async ({ page, request }) => {

  const Apidata = new Api(request);
  await Apidata.LoginViaAPI(Apidata.user.Yahoo_User);
  await Apidata.GeteventId();
  await Apidata.CreateBooking(Apidata.user.Yahoo_User);
  await Apidata.UIlogin(page, Apidata.user.Gmail_User);

  //Navigate directly to Yahoo's booking URL as Gmail user
  await page.goto(`${Apidata.Base_URL}/bookings/${Apidata.yahooBookingId}`);
  await page.waitForLoadState('networkidle');
  //await page.locator("span.inline-flex").first().click();
  // ── Step 6: Validate Access Denied ───────────────────────────────────────
  await expect(page.getByText('Access Denied')).toBeVisible();
  await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();
});


