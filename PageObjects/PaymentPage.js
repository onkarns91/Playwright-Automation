class PaymentPage {

    constructor(page) {
        this.page = page;
        this.cvvInput = this.page.locator("input.input.txt").nth(1);
        this.CardName = this.page.locator("input.input.txt").nth(2);
        this.country = this.page.locator('div [placeholder*="Country"]');
        this.dropdwn = this.page.locator(".ta-results");
    };
       async paymentDetails(Cvv,CardName,countryName)
    {
        await this.cvvInput.fill(Cvv);
        await this.CardName.fill(CardName);
        await this.country.pressSequentially(countryName,{delay :150})
        await this.dropdwn.waitFor();
        const optncount = await this.dropdwn.locator("button").count();
            for (let i = 0; i < optncount; ++i) {
                const value = await this.dropdwn.locator("button").nth(i).textContent();
                if (value === " India") {
                    await this.dropdwn.locator("button").nth(i).click();
                    console.log('Selected country :', value);
                    break;
                }
            }
        
        await this.page.locator("a.action__submit").click();
    };   



    };
    module.exports={PaymentPage};