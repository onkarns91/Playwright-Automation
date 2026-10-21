const Exceljs = require('exceljs');


//create seperate function Readfile
async function Readfile(worksheet, oldvalule) {
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
}




async function WriteExcel(oldvalule, newvalue, Path) {


    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(Path) //give excel path to workbook ,readFile :read from a file
    const worksheet = workbook.getWorksheet('Sheet1'); //provide exact SheetName
    const output = await Readfile(worksheet, oldvalule);


    let cell = worksheet.getCell(output.row, output.column);  //getCell :Get or create cell getCell(rowNumber,ColNumber)
    cell.value = newvalue //.value :Value of the cell
    console.log('cell value has been change/update.')
    console.log('new valule :', cell.value)
    await workbook.xlsx.writeFile(Path) //writeFile :write/update to a file

}
WriteExcel('shreeram', 'omkar', "C:/Users/Reva Sawant/Downloads/download21.xlsx");