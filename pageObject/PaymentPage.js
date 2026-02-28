const { expect } = require("@playwright/test");
class PaymentPage {

    constructor(page) {


        //this.submit = page.locator("[type='submit']")
        //this.myOrder = page.locator("button[routerlink='/dashboard/myorders']")
        this.page = page
        this.applyCoupon = page.locator("[type='submit']")
        this.placeOrder = page.locator(".btnn")
        this.couponConfirm = page.locator(".mt-1.ng-star-inserted")
        this.country = page.locator("[placeholder*='Country']")

    }

    async paymentDetails(email) {

        await this.page.locator("[type='text']").nth(2).fill("Sarisheddy");
        await this.page.locator("[type='text']").nth(3).fill("rahulshettyacademy");
        await this.applyCoupon.click();
    
        await expect(this.couponConfirm).toHaveText("* Coupon Applied");
    
        await this.country.pressSequentially("ind");
    
        const dropdown = this.page.locator(".ta-results");
        await dropdown.waitFor();
    
        const dropdownCount = await dropdown.locator("button").count();
        for (let i = 0; i < dropdownCount; i++) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text === " India") {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
        await expect(this.page.locator(".user__name [type='text']").first()).toHaveText(email)
        await this.placeOrder.click();
    }


}

module.exports = { PaymentPage };