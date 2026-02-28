const { test, expect } = require("@playwright/test")
test("Playwright methods for findingelements", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByPlaceholder("Password").fill("Arthi@1995");
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link", { name: "Shop" }).click();
    await page.waitForLoadState();
    await page.locator("app-card").filter({ hasText: "Samsung Note 8" }).getByRole("button").click();

})

