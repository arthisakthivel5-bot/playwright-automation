const { test, expect } = require("@playwright/test")

test("Fixtures Practise", async ({ page, context }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents']");
    await expect(documentLink).toHaveAttribute("class", "blinkingText")
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        documentLink.click()
    ])
    await expect(newPage).toHaveURL(/documents/);
    console.log(await newPage.title())
    const text = await newPage.locator(".red").textContent();
    console.log(text)
    await newPage.locator("a.dropdown-toggle:visible").click();
    const [aboutPage] = await Promise.all([
        context.waitForEvent("page"),
        newPage.locator("[href*='about-speaker']").first().click()
    ])
    await aboutPage.waitForLoadState();
    console.log(await aboutPage.title())
    const header = await aboutPage.getByRole('heading', { name: /Rahul/i }).textContent();
    console.log(header)
    await newPage.bringToFront()
    await newPage.locator("[href*='blog']").first().click();
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await newPage.goBack();
    await newPage.waitForLoadState();
    console.log(await newPage.title());

})