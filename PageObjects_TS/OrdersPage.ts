import { Page , Locator} from '@playwright/test';
export class OrdersPage {

    page:Page;
    orderbtn : Locator;
    row : Locator;

    constructor(page:Page) {
        this.page = page;
        
        this.orderbtn = this.page.locator("li [routerlink*='myorders']");
        this.row = this.page.locator("tbody tr");

    };
    async ViewOrder(expectedId:any) {
        await this.orderbtn.click();
        await this.row.first().waitFor();
        const rowcount:number = await this.row.count();
       
        
        for (let i = 0; i < rowcount; ++i) {
            const id:any = await this.row.nth(i).locator("th").textContent();
            if (id.includes(expectedId)) {
                console.log("MATCH FOUND! 🎯");
                await this.row.nth(i).locator("td button.btn-primary").click();
                break;
            }

        }

    };

}

module.exports={ OrdersPage };