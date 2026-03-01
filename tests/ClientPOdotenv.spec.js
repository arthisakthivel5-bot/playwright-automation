const { test, expect } = require("@playwright/test");
test("EndtoEndenv @Web", async ({ page }) => {

    const email = process.env.LOGIN_EMAIL;
    const password = process.env.LOGIN_PASSWORD;

    await page.goto(process.env.BASE_URL);
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByText("Login").click();

    // Home page after login
    await expect(page.getByText("Automation Practice")).toBeVisible();
    console.log(await page.title());
})