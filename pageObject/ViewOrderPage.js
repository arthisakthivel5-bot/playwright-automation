const { expect } = require("@playwright/test");
class ViewOrderPage {

    constructor(page) {

        this.page = page;
        this.myorderID = page.locator(".col-text.-main");
        this.productTitle = page.locator(".title");
        this.emailText = page.locator(".text").first();

    }


    async ViewOrder(cleanorderID, productName, email) {

        await expect(this.myorderID).toHaveText(cleanorderID);
        await expect(this.productTitle).toHaveText(productName);
        await expect(this.emailText).toHaveText(email);

    }


}

module.exports = { ViewOrderPage };