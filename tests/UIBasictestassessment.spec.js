const { test, expect } = require('@playwright/test')
test("Practice Test Case", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  // //Registering new user
  // await page.locator(".text-reset").click();
  // await page.locator("#firstName").fill("Sari");
  // await page.locator("#lastName").fill("Sheddy");
  // await page.locator("#userEmail").fill("sarisheddy@gmail.com");
  // await page.locator("#userMobile").fill("9789276159");
  // await page.locator("#userPassword").fill("Sari@1996");
  // await page.locator("#confirmPassword").fill("Sari@1996");
  // await page.locator("[type='checkbox']").check();
  // //click on Register
  // await page.locator("#login").click();
  // //Successfully Register
  // await expect(page.getByText('Account Created Successfully')).toBeVisible();
  // //click on login if already existing user
  // await page.locator(".btn.btn-primary").click();
  // //entering the user name and password
  // await expect(page.locator("#userEmail")).toBeVisible();
  await page.locator("#userEmail").fill("sarisheddy@gmail.com");
  await page.locator("#userPassword").fill("Sari@1996");
  await page.locator(".btn.btn-block.login-btn").click();
  //Home page after login
  await expect(page.getByText("Automation Practice")).toBeVisible();
  console.log(await page.title())
  await page.waitForLoadState("networkidle")
  //await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles)




}),
  test("End to End Testcase", async ({ page }) => {

    const email = "sarisheddy@gmail.com"
    const products = page.locator(".card-body");
    const productName = "iphone 13 pro";

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Sari@1996");
    await page.locator(".btn.btn-block.login-btn").click();

    // Home page after login
    await expect(page.getByText("Automation Practice")).toBeVisible();
    console.log(await page.title());

    await page.waitForLoadState("networkidle");

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    const count = await products.count();
    for (let i = 0; i < count; i++) {
      if ((await products.nth(i).locator("b").textContent()) === productName) {
        await products.nth(i).getByText("Cart").click();
        break;
      }
    }

    await expect(page.locator("#toast-container"))
      .toHaveText(" Product Added To Cart ");

    await page.locator(".btn.btn-custom", { hasText: "Cart" }).click();
    await page.locator("div li").first().waitFor();

    const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    expect(bool).toBeTruthy();

    await page.getByText("Checkout").click();
    //await page.locator("div:has-text('CVV Code') input").fill("222");
    await page.locator("[type='text']").nth(2).fill("Sarisheddy");
    await page.locator("[type='text']").nth(3).fill("rahulshettyacademy");
    await page.locator("[type='submit']").click();

    await expect(page.locator(".mt-1.ng-star-inserted"))
      .toHaveText("* Coupon Applied");

    await page.locator("[placeholder*='Country']").pressSequentially("ind");

    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();

    const dropdownCount = await dropdown.locator("button").count();
    for (let i = 0; i < dropdownCount; i++) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
        await dropdown.locator("button").nth(i).click();
        break;
      }
    }
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email)
    await page.locator(".btnn").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
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