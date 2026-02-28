const { test, expect } = require("@playwright/test")
test("Refined EndtoEnd", async ({ page }) => {

  const email = "sarisheddy@gmail.com"
  const password = "Sari@1996"
  const products = page.locator(".card-body");
  const productName = "iphone 13 pro";

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill(password);
  await page.getByText("Login").click();

  // Home page after login
  await expect(page.getByText("Automation Practice")).toBeVisible();
  console.log(await page.title());
  await page.waitForLoadState("networkidle");
  await page.locator(products).filter({ hasText: productName }).getByRole("button", { name: " Add To Cart" }).click();
  await expect(page.locator("#toast-container")).toHaveText(" Product Added To Cart ");

  await page.getByRole("listitem").getByRole("button").filter({ hasText: "Cart" }).click();
  await page.locator("div li").first().waitFor();
  await expect(page.getByText(productName)).toBeVisible();
  await page.getByText("Checkout").click();
  await page.locator(".field").filter({ hasText: "CVV Code" }).getByRole("textbox").fill("222");
  await page.locator(".field").filter({ hasText: "Name on Card" }).getByRole("textbox").fill("Sarisheddy");
  await page.locator(".field").filter({ hasText: "Apply Coupon" }).getByRole("textbox").fill("rahulshettyacademy");
  await page.getByRole('button', { name: 'Apply Coupon' }).click();

  await expect(page.getByText("* Coupon Applied")).toBeVisible();

  await page.getByPlaceholder("Select Country").pressSequentially("ind");

  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  await page.locator(".ta-results").getByText("India", { exact: true }).click();
  await expect(page.getByText(email)).toBeVisible();
  await page.getByText("Place Order ").click();
  await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
  const orderID = await page.locator("label.ng-star-inserted").textContent();
  console.log(orderID)
  const cleanorderID = orderID.replace(/\|/g, "").trim();
  console.log(cleanorderID)
  await page.locator("button[routerlink='/dashboard/myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = page.locator("tbody tr");
  for (let i = 0; i < await rows.count(); i++) {

    const roworderID = await rows.nth(i).locator("th").textContent();
    if (roworderID === cleanorderID) {

      await rows.nth(i).locator(".btn.btn-primary").click();
      break;
    }
  }

  await expect(page.locator(".col-text.-main")).toHaveText(cleanorderID);
  await expect(page.locator(".title")).toHaveText(productName);
  await expect(page.locator(".text").first()).toHaveText(email)
});