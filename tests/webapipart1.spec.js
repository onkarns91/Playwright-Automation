const {test ,expect,request}=require("@playwright/test");  //request :Exposes API that can be used for the Web API testing.
let odrId;
let token;
const loginpayload= {userEmail:"onkar11@test.com",userPassword:"Onkar1999"};
const orderpayload = {orders: [{country: "Bermuda", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

test.beforeAll( async()=>     //Declares a beforeAll hook that is executed once per worker process before all tests.
{ 
    //login API context
    const apicontext =await request.newContext(); //Creates new instances of APIRequestContext.
    const apiresponse =await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", //apicontext.post > Sends HTTP(S) POST request and returns its response.
    {
    data:loginpayload
    }); 
    expect(apiresponse.ok()).toBeTruthy();
    const responsejson=await apiresponse.json();
    token= responsejson.token;
    console.log(token);

//create new API context for >create order   

const orderresponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data:orderpayload,
        headers:
        {
        'content-type': 'application/json',
        'authorization':token,
        }
    }
)
const orderresponsejson=await orderresponse.json();
console.log('orderresponse :',orderresponsejson);
odrId=await orderresponsejson.orders[0];
});


test.beforeEach(()=> {}); //Declares a beforeEach hook that is executed before each test.

test('get name of first product',async ({page})=>{
await page.addInitScript(value =>
{
window.localStorage.setItem('token',value);
},token);

const email="onkar11@test.com";
await page.goto("https://rahulshettyacademy.com/client");
const orderbtn=page.locator("li [routerlink*='myorders']");
await orderbtn.click();


const row=page.locator("tbody tr");
await row.first().waitFor();
const rowcount=await row.count();
const expectedId = odrId.replace(/\|/g, "").trim();

for(let i=0;i<rowcount;++i)
{   const id=await row.nth(i).locator("th").textContent();
    if(id.includes(expectedId))
    {
        console.log("MATCH FOUND! 🎯");
        await row.nth(i).locator("td button.btn-primary").click();
        break;
    }   
}
//TC_05 On order summary page verify orderdetails>>
await expect (page.locator("div .email-title")).toHaveText(" order summary ");

const orderdtls=await page.locator("div .col-text").textContent();
await expect (odrId.includes(orderdtls)).toBeTruthy();
const billid=await page.locator("div .text").nth(0);
const billcountry=await page.locator("div .text").nth(1);
const dilvid=await page.locator("div .text").nth(2);
const dilvcountry=await page.locator("div .text").nth(3);

await expect (billid).toHaveText(email);
await expect(billcountry).toContainText("Bermuda");
await expect (dilvid).toHaveText(email);
await expect (dilvcountry).toContainText("Bermuda");
await expect(page.locator("div .title")).toHaveText(" ZARA COAT 3 ");
});