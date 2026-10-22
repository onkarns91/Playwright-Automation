const { LoginPage } = require('../PageObjects/LoginPage');
const { DashboradPage } = require('../PageObjects/DashboradPage');
const { PaymentPage } = require('../PageObjects/PaymentPage');
const { OrdersPage } = require('../PageObjects/OrdersPage');

class POManager{

    constructor(page)
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