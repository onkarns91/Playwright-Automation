/* const { test, expect,request } = require('@playwright/test');




test.beforeAll(async () => {

  //User A(yahoo) booking via api > user B(Gmail) log in via browser and trying booking URL >user b to see "Access Denied" error.
    const apicontext = await request.newContext();
    const Apiresponse=await apicontext.post("https://eventhub.rahulshettyacademy.com/api",{
        data:,
    });



});


/* test('Cross-User Booking Access Denied',async ()=>
{
    
}); */ 