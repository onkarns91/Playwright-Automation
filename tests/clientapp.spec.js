const {test , expect}=require("@playwright/test");



//TC_01 login with valid credentials and get name of first product>>
test('get name of first product', async ({browser})=>{
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

    // const ProductName=page.locator("div.card-body h5").first();
    // console.log('First Product Name :',await ProductName.textContent());    
    // await expect (ProductName).toContainText("ADIDAS");

    //TO GET ALL PRODUCTS NAMES  
    await page.locator("div.card-body h5").last().waitFor();  // waitfor - to wait until specific locator to load.
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
    
    const cart= page.locator('[routerlink="/dashboard/cart"]');   
    await cart.click();
    
    
    console.log('item number :',await page.locator(".infoWrap").locator(".itemNumber").textContent());
    const cartitemname=await page.locator(".infoWrap h3").textContent();
    if(cartitemname==="ZARA COAT 3")
    {
        console.log('cartitemname :',await cartitemname);
    };
});