const { LoginPage } = require("../pageObject/LoginPage")
const { DashboardPage } = require("../pageObject/DashboardPage");
const { CheckOutPage } = require("../pageObject/CheckOutPage");
const { PaymentPage } = require("../pageObject/PaymentPage");
const { ThankYouPage } = require("../pageObject/ThankYouPage");
const { MyOrderPage } = require("../pageObject/MyOrderPage")
const { ViewOrderPage } = require("../pageObject/ViewOrderPage.js")

class POManager {

    constructor(page) {

        this.page = page
        this.loginPage = new LoginPage(page)
        this.dashboardPage = new DashboardPage(page)
        this.checkoutPage = new CheckOutPage(page)
        this.paymentDetailsPage = new PaymentPage(page)
        this.thankyouPage = new ThankYouPage(page)
        this.myorderDetailsPage = new MyOrderPage(page)
        this.vieworderDetails = new ViewOrderPage(page)


    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }
    getCheckOutPage() {
        return this.checkoutPage;
    }
    getPaymentDetailspage() {
        return this.paymentDetailsPage;
    }
    getThankyouPage() {
        return this.thankyouPage;
    }
    getMyOrder(){
        return this.myorderDetailsPage;
    }
    getViewOrder(){
        return this.vieworderDetails;
    }


}

module.exports = { POManager };