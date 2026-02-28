const { test, expect } = require("@playwright/test");
test.describe.configure({ mode: 'parallel' });
test("@Web Morevalidation", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com/")
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    page.once("dialog", dialog => dialog.dismiss());
    await page.locator("#confirmbtn").click();
    page.once("dialog", dialog => dialog.accept());
    await page.locator("#alertbtn").click();
    await page.locator("#mousehover").hover();
    await page.locator(".mouse-hover-content").getByText("Top").click();
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href='lifetime-access']:visible").click();
    const number = await framesPage.locator(".text h2 span").textContent();
    console.log(number);



})
test("@Web Visual Comparison Testing", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    expect(await page.screenshot()).toMatchSnapshot("Actual.png");

})

