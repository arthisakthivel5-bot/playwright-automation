const { test, expect } = require("@playwright/test")
test("API Login + Create Order", async ({ page, request }) => {

    const loginPayLoad = {
        userEmail: "sarisheddy@gmail.com",
        userPassword: "Sari@1996"
    }

    const orderPayLoad = {
        orders:
            [{
                country: "India",
                productOrderedId: "6960ea76c941646b7a8b3dd5"
            }]

    }

    // 1. Login → get token

    const response = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        { data: loginPayLoad }
    );
    expect(response.status()).toBe(200);
    const responseJson = await response.json();
    const apiToken = responseJson.token;
    console.log(apiToken)

    await page.addInitScript(value => { window.localStorage.setItem("token", value) }, apiToken);

    // 2. Create order using token
    const orderResponse = await request.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayLoad,
            headers: {
                "authorization": apiToken,
                "content-type": "application/json"
            }
        }
    );
    const orderResponseJson = await orderResponse.json();
    expect(orderResponse.status()).toBe(201);
    const apiOrderID = orderResponseJson.orders[0];
    console.log(apiOrderID)


});