const { test, expect, request } = require("@playwright/test");
const { APIUtils } = require("../Utils/APIUtils");

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

test("Security Testing", async ({ page }) => {

  await page.addInitScript(value => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route => route.continue({
      url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6"
    })
  );

  await page.goto("https://rahulshettyacademy.com/client/#/dashboard/myorders");
  await page.locator("button:has-text('View')").first().click();
  await expect(page.getByText("You are not authorize to view this order")).toBeVisible();
});