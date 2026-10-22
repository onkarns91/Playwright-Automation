class DashboradPage {

    constructor(page) {
        this.page = page;
        this.product = this.page.locator(".card-body");
        this.checkoutbtn = this.page.locator("text=Checkout");
    };

     async AddToCart(productName) {
        const count = await this.product.count();
        for (let i = 0; i < count; ++i) {
            if (await this.product.nth(i).locator("b").textContent() === productName) {
                await this.product.nth(i).locator("text= Add To Cart").click();
                break;
            }
        };
        const cart = this.page.locator('[routerlink="/dashboard/cart"]');
        await cart.click();
        await this.page.locator("div li").first().waitFor({ timeout: 60000 });
        await this.checkoutbtn.click();
    };
    };
module.exports={DashboradPage};

