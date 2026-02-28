const { test, expect } = require("@playwright/test");

test("Get Token Only", async ({ request }) => {

    // const loginPayLoad = {
    //     userEmail: "sarisheddy@gmail.com",
    //     userPassword: "Sari@1996"
    // }

    // const response = await request.post(
    //     "https://rahulshettyacademy.com/api/ecom/auth/login",
    //     { data: loginPayLoad }
    // );

    // const responseJson = await response.json();
    // console.log(responseJson.token);

    async function getToken(request) {

        // login
        let loginPayLoad = {
            userEmail: "sarisheddy@gmail.com",
            userPassword: "Sari@1996"
        }
        const response = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayLoad });
        const responseJson = await response.json();
        const apitoken = responseJson.token;
        return apitoken;

    }

    async function createOrder(request, apiToken) {

        const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5" }] }
        const orderresponse = await request.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    authorization: apiToken,
                    "content-type": "application/json"
                }
            });
        const orderresponseresponseJson = await orderresponse.json();
        const apiorderID = orderresponseresponseJson.orders[0];
        return apiorderID;


    }

});