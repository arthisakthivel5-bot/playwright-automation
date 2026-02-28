const ExcelJs = require("exceljs")
const {test, expect} = require("@playwright/test")

async function WriteExcel(filePath,searchText,replaceText) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet("Sheet1");
    const output = await ReadExcel(worksheet,searchText)
    const cell =  worksheet.getCell(output.row, output.column);
    cell.value = replaceText
    await workbook.xlsx.writeFile(filePath)


}

async function ReadExcel(worksheet,searchText) {
    let output = { row: -1, column: -1 }

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {

            if (cell.value === searchText) {

                output.row = rowNumber
                output.column = colNumber
            }

        })
        
    })

    if (output.row === -1) {

        throw new Error("Text not found in Excel")
    }

    return output;
}



test("Upload & Download Excel",async ({page})=> {

const originalValue = "Kivi"
const updatedValue = "Kite"
await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
const downloadPromise = page.waitForEvent("download");
await page.getByRole('button', { name: 'Download' }).click();
const download = await downloadPromise;
await download.saveAs("/Users/arthisakthivel/Downloads/download.xlsx");
await WriteExcel("/Users/arthisakthivel/Downloads/download.xlsx", originalValue, updatedValue);
await page.locator("#fileinput").click();
await page.locator("#fileinput").setInputFiles("/Users/arthisakthivel/Downloads/download.xlsx")
const textLocator = page.getByText(updatedValue);
const desireRow = page.getByRole("row").filter({has:textLocator})
const price = await desireRow.locator("#cell-4-undefined").textContent();
console.log("Updated value:", updatedValue);
console.log("Price:", price);

})