//Topic 3 — Methods & Parameters ,Focus: arguments, parameters, reusable methods & return values.
//Assignment 7 — Login Method ,Task: create loginUser(user) method 

// class login {   
//         user = {
//             Yahoo: { email: "om@yahoo.com", password: "Omkar@1999", },
//             Gmail: { email: "om@Gmail.com", password: "Omkar@1999", },
//         };
//     loginUser(user) {      
//         /* if(user==this.user.Gmail){
//             return `Gmail login for ${this.user.Gmail.email}`;
//         } 
//         else 
//         return  `Yahoo login for ${this.user.Yahoo.email}`; */
//       return(user.email===this.user.Gmail.email)? `Gmail login for ${user.email}`:`Yahoo login for ${user.email}`;
//     }; 



// };

// const log = new login();
// console.log(log.loginUser(log.user.Gmail));
// console.log(log.loginUser(log.user.Yahoo));

//Assignment 8 — Reusable Booking Method ,Task: create createBooking(eventID, user) method

/* const { test, request, expect } = require('@playwright/test');


class booking {
    constructor(apicontext, token) {
        this.apicontext = apicontext;
        this.token = token;
    }
    user = {
        Yahoo: { email: "om@yahoo.com", password: "Omkar@1999" },
        Gmail: { email: "om@Gmail.com", password: "Omkar@1999" },
    };

    async createBooking(eventID, user) {

        const apiresponse = await this.apicontext.post('https://api.eventhub.rahulshettyacademy.com/api/bookings', {
            data: {
                eventId: eventID,
                customerName: 'Yahoo_User',
                customerEmail: user.email,
                customerPhone: +91 - 9876543210,
                quantity: 2,
            },
            headers: { Authorization: `Bearer ${this.token}` }
        })
        await expect(apiresponse).toBeTruthy();
        const apiresponsejson = await apiresponse.json();
        //console.log( 'data.id',apiresponsejson);
        const bookingID = await apiresponsejson.data.id;

        await expect(bookingID).toBeTruthy();
        return (bookingID);
    };
};


const eventpayload = {
    "title": "Tech Summit 2026",
    "description": "A premier technology conference.",
    "category": "Conference",
    "venue": "Bangalore International Centre",
    "city": "Bangalore",
    "eventDate": "2026-12-15T09:00:00.000Z",
    "price": 1500,
    "totalSeats": 500,
    "imageUrl": "https://example.com/banner.jpg"
}
const loginpayload = { email: "om@yahoo.com", password: "Omkar@1999" }
let apicontext;
let eventID;
let token;

test.beforeAll(async () => {

    apicontext = await request.newContext();
    const apires = await apicontext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",
        {
            data: loginpayload
        });
    await expect(apires).toBeOK();
    const json1 = await apires.json();
    token = json1.token;


    const eventcre = await apicontext.post("https://api.eventhub.rahulshettyacademy.com/api/events", {
        data: eventpayload,
        headers: { Authorization: `Bearer ${token}` }
    })
    await expect(eventcre).toBeOK();
    const json2 = await eventcre.json();
    eventID = json2.data.id
    // console.log('json2 :', json2)
    // console.log('Token:', token);
    // console.log('Event ID:', eventID);
});


test('', async () => {


    const bookingHelper = new booking(apicontext, token);

    const bookingID = await bookingHelper.createBooking(
        eventID,
        bookingHelper.user.Yahoo
    );

    console.log('Booking ID:', bookingID);
    expect(bookingID).toBeTruthy();

    
});
 */

//Assignment 9 — User-specific UI Login ,Task: create UIlogin(page, user) method for Playwright UI login .

class UI{   
     user = {
            Yahoo: { email: "om@yahoo.com", password: "Omkar@1999"},
            Gmail: { email: "om@Gmail.com", password: "Omkar@1999"},
        };
    async UIlogin(page, user)
    {
       await page.goto('https://eventhub.rahulshettyacademy.com/login');
       await page.getByPlaceholder("you@email.com").fill(user.email);
       await page.locator("input#password").fill(user.password);
       await page.getByRole('button',{name:'Sign In'}).click();
       console.log ('user logged-in successfully.')
    }

};

const{test,expect}=require('@playwright/test');

test('UI method',async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    const ui=new UI();
    await ui.UIlogin(page,ui.user.Gmail);
    await expect(page.getByRole('link',{name:'Browse Events →'})).toBeVisible();

})