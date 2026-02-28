const { expect } = require("@playwright/test");
class MyOrderPage {

    constructor(page) {

        this.page = page
        this.myOrder = page.locator("button[routerlink='/dashboard/myorders']")
        this.allOrders = page.locator("tbody")

    }

    
    async myorderDetails(cleanorderID) {

        await this.myOrder.click();
        await this.allOrders.waitFor();
        const rows = this.page.locator("tbody tr");
        for (let i = 0; i < await rows.count(); i++) {
    
            const roworderID = await rows.nth(i).locator("th").textContent();
            if (roworderID === cleanorderID) {
    
                await rows.nth(i).locator(".btn.btn-primary").click();
                break;
            }   
        }

    }


}

module.exports = { MyOrderPage };