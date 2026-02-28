const { test, expect } = require("@playwright/test")
const { POManager } = require("../pageObject/POManager")
const testdata = require("../testdata/ClientPO.json")
const { customtest } = require("../testdata/test-base")

for (const data of testdata) {
    test(`@Web User can place an order and verify it in order history for ${data.productName}`, async ({ page }) => {

        const pomanager = new POManager(page)
        const loginPage = pomanager.getLoginPage();
        const dashboardPage = pomanager.getDashboardPage();
        const checkoutPage = pomanager.getCheckOutPage();
        const paymentDetailsPage = pomanager.getPaymentDetailspage();
        const thankyouPage = pomanager.getThankyouPage();
        const myorderDetailsPage = pomanager.getMyOrder();
        const vieworderDetails = pomanager.getViewOrder();

        await loginPage.gotoLoginpage();
        await loginPage.Login(data.email, data.pwd);

        // Verify Home Page
        await dashboardPage.verifyHomePage();

        // Search Products
        await dashboardPage.SearchProductAddCart(data.productName);

        //Added Toaster
        await dashboardPage.verifyToaster();

        //Navigating to Cart
        await dashboardPage.NavigatetoCart();

        await expect(page.locator("div li").first()).toBeVisible();

        //Mycart Page
        await checkoutPage.Mycartpage();

        //Payment Page
        await paymentDetailsPage.paymentDetails(data.email);

        //Thankyou Page
        const cleanorderID = await thankyouPage.orderDetails();

        //MyOrder Page
        await myorderDetailsPage.myorderDetails(cleanorderID);

        //ViewOrder Details Page
        await vieworderDetails.ViewOrder(cleanorderID, data.productName, data.email)

    });
}
customtest(`User can place an order and verify it in order history`, async ({ page, testDataforOrder }) => {

    const pomanager = new POManager(page)
    const loginPage = pomanager.getLoginPage();
    const dashboardPage = pomanager.getDashboardPage();
    const checkoutPage = pomanager.getCheckOutPage();
    const paymentDetailsPage = pomanager.getPaymentDetailspage();
    const thankyouPage = pomanager.getThankyouPage();
    const myorderDetailsPage = pomanager.getMyOrder();
    const vieworderDetails = pomanager.getViewOrder();

    await loginPage.gotoLoginpage();
    await loginPage.Login(testDataforOrder.email, testDataforOrder.pwd);

    // Verify Home Page
    await dashboardPage.verifyHomePage();

    // Search Products
    await dashboardPage.SearchProductAddCart(testDataforOrder.productName);

    //Added Toaster
    await dashboardPage.verifyToaster();

    //Navigating to Cart
    await dashboardPage.NavigatetoCart();

    await expect(page.locator("div li").first()).toBeVisible();

    //Mycart Page
    await checkoutPage.Mycartpage();

    //Payment Page
    await paymentDetailsPage.paymentDetails(testDataforOrder.email);

    //Thankyou Page
    const cleanorderID = await thankyouPage.orderDetails();

    //MyOrder Page
    await myorderDetailsPage.myorderDetails(cleanorderID);

    //ViewOrder Details Page
    await vieworderDetails.ViewOrder(cleanorderID, testDataforOrder.productName, testDataforOrder.email)

});