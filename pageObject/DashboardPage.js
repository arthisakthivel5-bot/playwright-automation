const { expect } = require("@playwright/test");
class DashboardPage {

    constructor(page, expect) {

        this.products = page.locator(".card-body");
        this.title = page.getByText("Automation Practice");
        this.productsText = page.locator(".card-body b")
        this.toaster = page.locator("#toast-container")
        this.ToCart = page.locator(".btn.btn-custom", { hasText: "Cart" });

    }

    async verifyHomePage() {
        await expect(this.title).toBeVisible();
    }


    async SearchProductAddCart(productName) {
        const titles = await this.productsText.allTextContents();
        console.log(titles);

        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            if ((await this.products.nth(i).locator("b").textContent()) === productName) {
                await this.products.nth(i).getByText("Cart").click();
                break;
            }
        }

    }

    async verifyToaster() {

        await expect(this.toaster).toHaveText(" Product Added To Cart ");
    }

    async NavigatetoCart() {

        await this.ToCart.click();
    }

}

module.exports = { DashboardPage };