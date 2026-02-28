const { test, expect, request } = require("@playwright/test");
const { APIUtils } = require('../Utils/APIUtils');

const loginPayLoad = {
  userEmail: "sarisheddy@gmail.com",
  userPassword: "Sari@1996"
};

let token;

test.beforeAll(async () => {

  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);

  token = await apiUtils.getToken();   // only login

});

test("Empty Order State", async ({ page }) => {

  await page.addInitScript(value => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", route =>
    route.fulfill({
      body: JSON.stringify({
        data: [],
        message: "No Orders"
      })
    })
  );

  await page.goto("https://rahulshettyacademy.com/client/#/dashboard/myorders");

  await page.locator("button[routerlink*='myorders']").click();
  console.log(await page.locator(".mt-4").textContent());

});