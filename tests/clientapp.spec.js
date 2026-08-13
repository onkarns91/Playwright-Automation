const {test , expect}=require("@playwright/test");



//TC_01 login with valid credentials and get name of first product>>
test('get name of first product', async ({page})=>{
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


});