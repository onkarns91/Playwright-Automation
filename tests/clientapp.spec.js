const {test ,
expect}=require("@playwright/test");
const { text } = require("node:stream/consumers");
//TC_01 login with valid credentials and get name of first product>>

test('get name of first product',async ({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/client");
console.log('Page Title :',await page.title());
const email="onkar11@test.com";//anshika@gmail.com
const pass="Onkar1999";//Iamking@000
const UserEmail=page.locator("input#userEmail");
const UserPass=page.locator("input#userPassword");
const Loginbtn=page.locator("input#login");
await UserEmail.fill(email);
await UserPass.fill(pass);
await Loginbtn.click();

const ProductName=page.locator("div.card-body h5").first();
console.log('First Product Name :',await ProductName.textContent());    
await expect (ProductName).toContainText("ADIDAS");
//TO GET ALL PRODUCTS NAMES  
await page.locator("div.card-body h5").last().waitFor();  // waitfor - to waituntil specific locator to load.
console.log('All Products Name :',await page.locator("div.card-body h5").allTextContents());

//TC_02 select and add to cart one product>>
const product= page.locator(".card-body");
const productName="ZARA COAT 3";
const count=await product.count();
    for (let i=0;i<count;++i)
    {
    if(await product.nth(i).locator("b").textContent()===productName)

       {
        await product.nth(i).locator("text= Add To Cart").click();    
        break;    
       }
    };
const cart=page.locator('[routerlink="/dashboard/cart"]');  
await cart.click();
await page.locator("div li").first().waitFor();
const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();    
//("h3:has-text('ZARA COAT 3')") ==syntax >> ("tagname:has-text('')") , :has-text >> called as 'sudo class'. //isVisible() >>Returns whether the element is visible. return boolean value.
expect (bool).toBeTruthy();  
await page.locator("text=Checkout").click();


//TC_03 Enter payment details and Place oder>>
const cvvInput=page.locator("input.input.txt").nth(1);
await cvvInput.fill("123");
const cardName=page.locator("input.input.txt").nth(2);
await cardName.fill("onkar sawant");
const country=page.locator('div [placeholder*="Country"]');
//pressSequentially("Enter") >> to press multiple keys in sequence.
await country.pressSequentially("ind",{delay:150});
const dropdwn=page.locator(".ta-results");
await dropdwn.waitFor();
const optncount=await dropdwn.locator("button").count();

for(let i=0;i<optncount;++i)
{
    const value =await dropdwn.locator("button").nth(i).textContent();
    if(value===" India")
    {
        await dropdwn.locator("button").nth(i).click();
        console.log('Selectes country :',value);
        break;
    }
}
await expect  (page.locator("label[type='text']")).toHaveText(email);



await page.locator("a.action__submit").click();
await expect (page.locator("h1.hero-primary")).toContainText(" Thankyou for the order. ");
console.log(await page.locator('h1.hero-primary').textContent());
const odrId=await page.locator("tbody label").nth(1).textContent();
console.log(odrId);



const orderbtn=page.locator("li [routerlink*='myorders']");
await orderbtn.click();


const Allorders=page.locator("table.table");
await Allorders.waitFor();
const row=Allorders.locator("[scope='row']");
const ordercount=await row.count();
const expectedId = odrId.replace(/\|/g, "").trim();
console.log("TR count:", await Allorders.locator("tr").count());

console.log("Scope row count:", await Allorders.locator("[scope='row']").count());

for(let i=0;i<ordercount;++i)
{
    const ID=(await row.nth(i).textContent())?.trim();
    console.log("Webpage ID:", ID);
    console.log("Expected ID:", expectedId);
    if(ID===expectedId)
    {   
        console.log("MATCH FOUND! 🎯");
        //await row.nth(i).locator("td button.btn-primary").click();
        break;
    }
}
//await expect (page.locator(".email-title")).toHaveText(" order summary ");
await page.pause();




});