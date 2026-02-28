const { test, expect, request } = require("@playwright/test");
const { APIUtils } = require('../Utils/APIUtils');

const loginPayLoad = { userEmail: "sarisheddy@gmail.com", userPassword: "Sari@1996" }
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6960ea76c941646b7a8b3dd5" }] }
let response;
test.beforeAll(async () => {

  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(orderPayLoad);

});

test("@API Place the order", async ({ page }) => {

  await page.addInitScript(value => {

    window.localStorage.setItem("token", value)
  }, response.apiToken);

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("button[routerlink='/dashboard/myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = page.locator("tbody tr");
  for (let i = 0; i < await rows.count(); i++) {

    const roworderID = await rows.nth(i).locator("th").textContent();
    if (roworderID === response.apiOrderID) {

      await rows.nth(i).locator(".btn.btn-primary").click();
      break;
    }
  }

  await expect(page.locator(".col-text.-main")).toHaveText(response.apiOrderID);
});