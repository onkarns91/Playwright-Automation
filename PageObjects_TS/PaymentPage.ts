import { Page , Locator} from '@playwright/test';
export class PaymentPage {

    page:Page;
    cvvInput : Locator;
    CardName : Locator;
    country : Locator;
    dropdwn : Locator;

    constructor(page:Page) {
        this.page = page;
        this.cvvInput = this.page.locator("input.input.txt").nth(1);
        this.CardName = this.page.locator("input.input.txt").nth(2);
        this.country = this.page.locator('div [placeholder*="Country"]');
        this.dropdwn = this.page.locator(".ta-results");
    };
       async paymentDetails(Cvv:string,CardName:string,country:string,countryName:string)
    {
        await this.cvvInput.fill(Cvv);
        await this.CardName.fill(CardName);
        await this.country.pressSequentially(country,{delay :150})
        await this.dropdwn.waitFor();
        const optncount = await this.dropdwn.locator("button").count();
            for (let i = 0; i < optncount; ++i) {
                const value = await this.dropdwn.locator("button").nth(i).textContent();
                if (value === countryName) {
                    await this.dropdwn.locator("button").nth(i).click();
                    console.log('Selected country :', value);
                    break;
                }
            }
        
        await this.page.locator("a.action__submit").click();
    };   



    };
    module.exports={PaymentPage};