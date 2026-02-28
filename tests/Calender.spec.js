const { test, expect } = require("@playwright/test")
test("Calender Test case", async ({ page }) => {

    const year = "2027"
    const month = "06"
    const date = "15"
    const expectedDate = year + "-" + month + "-" + date;
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__calendar-button__icon").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.getByText(year).click();
    await page.waitForLoadState();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month) - 1).click();
    await page.locator(".react-calendar__month-view__days__day").filter({ hasText: date }).click();
    await expect(page.locator(".react-date-picker__inputGroup input[name='date']")).toHaveValue(expectedDate);


})