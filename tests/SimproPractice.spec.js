const {test, expect} = require("@playwright/test")
test("Simpro Login",async({page}) => {
let Employee_Name = "Andy Gupta"
await page.goto("https://au-mns-devops-v3.myqa.simprosuite.com/staff/");
await page.getByPlaceholder("Username").fill("Arthi@123");
await page.getByPlaceholder("Password").fill("Arthi@123");
await page.locator("#login_x").click();
await page.waitForLoadState();
await page.locator('[data-cy="People"]').hover();
await page.locator("[data-cy='SubmenuItem_Employees']").click();
await page.locator("[data-cy='Create_Employee']").click();
await page.locator("[data-cy='Employee_Name']").fill(Employee_Name);
await page.locator("[data-cy='Primary_Contact_Email']").fill("mathew@simpro.com");
await page.locator("[data-cy='Custom_Tab']").click();
await page.locator("[data-cy='CustomField_text']").fill("Text");
await page.locator("[data-cy='CustomField_numeric-m']").fill("123");
await page.click("[data-cy='Save_And_Finish']");
// wait for header to confirm page state
await expect(page.getByRole('heading', { name: /Employees/i })).toBeVisible();

// navigate to employee list
await page.getByRole('link', { name: 'Employees' }).click();
await page.locator("[data-cy='Search_Input']").fill(Employee_Name);
await page.keyboard.press("Enter");
await expect(page.locator("[data-cy='Employees_Results_Table']")).toContainText(Employee_Name);




})