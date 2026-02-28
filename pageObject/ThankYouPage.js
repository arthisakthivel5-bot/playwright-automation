const { expect } = require("@playwright/test");
class ThankYouPage {

    constructor(page) {

        this.note = page.locator(".hero-primary")
        this.orderid = page.locator("label.ng-star-inserted")

    }

    async orderDetails() {

        await expect(this.note).toHaveText(" Thankyou for the order. ");
        const orderID = await this.orderid.textContent();
        const cleanorderID = orderID.replace(/\|/g, "").trim();
        return cleanorderID;
    }


}

module.exports = { ThankYouPage };