import { LoginPage } from '../PageObjects_TS/LoginPage';
import { DashboradPage } from '../PageObjects_TS/DashboradPage';
import { PaymentPage } from '../PageObjects_TS/PaymentPage';
import { OrdersPage } from '../PageObjects_TS/OrdersPage';
import { Page} from '@playwright/test';
export class POManager{

    page:Page;
    loginpage : LoginPage;
    dashboradpage :DashboradPage;
    payment:PaymentPage;
    order:OrdersPage;
    

    constructor(page:Page)
    {
        this.page = page;
        this.loginpage = new LoginPage(this.page);
        this.dashboradpage = new DashboradPage(this.page);
        this.payment = new PaymentPage(this.page);
        this.order = new OrdersPage(this.page);
    };
    getLoginPage()
    {
        return this.loginpage;
    };
    getDashboradPage()
    {
        return this.dashboradpage;
    }
    getPaymentPage()
    {
        return this.payment;
    }
    getOrdersPage()
    {
        return this.order
    }
};
module.exports={ POManager };