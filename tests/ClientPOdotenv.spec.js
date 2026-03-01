const { test, expect } = require("@playwright/test");
test("EndtoEndenv @Web", async ({ page }) => {

    await page.goto(process.env.BASE_URL);
    await page.getByPlaceholder("email@example.com").fill(process.env.LOGIN_EMAIL);
    await page.getByPlaceholder("enter your passsword").fill(process.env.LOGIN_PASSWORD);
    await page.getByText("Login").click();
})