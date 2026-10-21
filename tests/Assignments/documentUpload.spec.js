const { test, expect } = require('@playwright/test');
const Exceljs = require('exceljs');



//create seperate function Readfile
function Readfile(worksheet, oldvalule) {
    let output = { row: -1, column: -1 }; //create object for roe/column number for generic.
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === oldvalule) {
                output.row = rowNumber;
                output.column = colNumber;
                console.log('old valule :', cell.value)
            }
        })

    });
    return output;
};

async function WriteExcelTest(oldvalule, newvalue, change, Path) {


    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(Path) //give excel path to workbook ,readFile :read from a file
    const worksheet = workbook.getWorksheet('Sheet1'); //provide exact SheetName
    const output = await Readfile(worksheet, oldvalule);


    let cell = worksheet.getCell(output.row, output.column + change.colChange);  //getCell :Get or create cell getCell(rowNumber,ColNumber)
    cell.value = newvalue //.value :Value of the cell
    console.log('cell value has been change/update.')
    console.log('new valule :', cell.value)
    await workbook.xlsx.writeFile(Path) //writeFile :write/update to a file

}
// WriteExcel('omkar', 456,{rowChange:0,colChange:2}, "C:/Users/Reva Sawant/Downloads/download21.xlsx");


test('Documnet upload', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const searchText = 'Banana';
    const UpdateText = '999';
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const dl = await downloadPromise;
    const filePath = await dl.path(); //path() :Returns path to the downloaded file for a successful download

    await WriteExcelTest(searchText, UpdateText, { rowChange: 0, colChange: 2 }, filePath);
    await page.locator("input#fileinput").click();
    await page.locator("input#fileinput").setInputFiles(filePath);
    await page.pause();

    const textLocator = await page.getByText(searchText);
    const row = await page.locator("div.sc-jsEeTM")
    const desiredRow = await row.filter({ has: textLocator });
    await expect(desiredRow.locator('div#cell-4-undefined')).toContainText(UpdateText);
    
});    