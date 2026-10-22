class OrdersPage {

    constructor(page) {
        this.page = page;
        
        this.orderbtn = this.page.locator("li [routerlink*='myorders']");
        this.row = this.page.locator("tbody tr");

    };
    async ViewOrder(expectedId) {
        await this.orderbtn.click();
        await this.row.first().waitFor();
        this.rowcount = await this.row.count();
       
        
        for (let i = 0; i < this.rowcount; ++i) {
            const id = await this.row.nth(i).locator("th").textContent();
            if (id.includes(expectedId)) {
                console.log("MATCH FOUND! 🎯");
                await this.row.nth(i).locator("td button.btn-primary").click();
                break;
            }

        }

    };

}

module.exports={ OrdersPage };