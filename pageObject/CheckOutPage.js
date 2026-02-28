const { expect } = require("@playwright/test");
class CheckOutPage {

    constructor(page) {
        this.page = page
        this.checkout = page.getByText("Checkout")

    }

    async Mycartpage(productName) {

        const product = this.page.locator("li").filter({ has: this.page.getByRole("heading", { name: productName }) });

        await expect(product).toBeVisible();

        await this.checkout.click();
    }


}

module.exports = { CheckOutPage };