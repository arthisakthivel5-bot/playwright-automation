const { test, expect } = require("@playwright/test")

test("First Playwright Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator("#username")
    const signIn = page.locator("[type='submit']")
    const cardTitle = page.locator(".card-body a")
    console.log(await page.title())
    await userName.fill("rahulshetty");
    await page.locator("#password").fill("Learning@830$3mK2");
    await signIn.click()
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');
    //await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    //page.route("**/*.{jpg,png,jpeg}", route => route.abort())
    //page.on("request", request => console.log(request.url()))
    //page.on("response",response => console.log(response.url(),response.status()))
    console.log(await cardTitle.first().textContent());
    console.log(await cardTitle.nth(1).textContent());
    const allTitles = await cardTitle.allTextContents();
    console.log(allTitles)


}),

    test("Second Playwright Test", async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        const userName = page.locator("#username")
        const signIn = page.locator("[type='submit']")
        const documentLink = page.locator("[href*='documents']")
        await userName.fill("rahulshetty");
        await page.locator("#password").fill("Learning@830$3mK2");
        await page.locator("[value='user']").check();
        console.log(await page.locator("[value='user']").isChecked());
        await expect(page.locator("[value='user']")).toBeChecked();
        await page.locator("#okayBtn").click();
        await page.locator("#terms").check();
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked()).toBeFalsy();
        await expect(documentLink).toHaveAttribute("class", "blinkingText");
        await signIn.click()

    }),
    test("Third Playwright Test", async ({ page, context }) => {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        const documentLink = page.locator("[href*='documents']")
        await expect(documentLink).toHaveAttribute("class", "blinkingText");
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            documentLink.click()
        ])

        const text = await newPage.locator(".red").textContent();
        console.log(text);

    })