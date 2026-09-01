const{test , expect}=require("@playwright/test");


test('get name of first product',async ({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/client",{timeout:30000});
console.log('Page Title :',await page.title());
const email="onkar11@test.com";//anshika@gmail.com
const pass="Onkar1999";//Iamking@000

await page.getByPlaceholder("email@example.com").fill(email);
await page.getByPlaceholder("enter your passsword").fill(pass);
await page.getByRole("button",{name :'Login'}).click();


 
//TO GET ALL PRODUCTS NAMES  
await page.locator("div.card-body h5").last().waitFor();  // waitfor - to waituntil specific locator to load.
console.log('All Products Name :',await page.locator("div.card-body h5").allTextContents());

//TC_02 select and add to cart one product>>

await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add To Cart"}).click();
await page.getByRole("listitem").getByRole("button",{name :'Cart'}).click();



await page.locator("div li").first().waitFor();
await expect(page.getByText("ZARA COAT 3")).toBeVisible();
await page.getByRole("button",{name :'Checkout'}).click();


//TC_03 Enter payment details and Place oder>>
const cvvInput=page.locator("input.input.txt").nth(1);
await cvvInput.fill("123");
const cardName=page.locator("input.input.txt").nth(2);
await cardName.fill("onkar sawant");

//pressSequentially("Enter") >> to press multiple keys in sequence.

await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150});

await page.getByRole("button",{name:' India'}).nth(1).click();
await page.getByText("Place Order ").click();
await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();


});