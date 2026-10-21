const Exceljs=require('exceljs');


async function ExcelTest(){

   let output={row:-1,column:-1}; //create object for roe/column number for dynamic use.
const workbook=new Exceljs.Workbook(); 
await workbook.xlsx.readFile("C:/Users/Reva Sawant/Downloads/download21.xlsx") //give excel path to workbook ,readFile :read from a file
const worksheet= workbook.getWorksheet('Sheet1'); //provide exact SheetName

   
    worksheet.eachRow( (row,rowNumber)=>{
    row.eachCell((cell,colNumber)=>{
        if (cell.value==='Dhoni'){
        output.row=rowNumber;
        output.column=colNumber;
    console.log('old valule :',cell.value)}

    })
})

let cell=worksheet.getCell(output.row,output.column);  //getCell :Get or create cell getCell(rowNumber,ColNumber)
cell.value='Thala for a reason' //.value :Value of the cell
console.log('cell value has been change/update.')
console.log('new valule :',cell.value)
await workbook.xlsx.writeFile("C:/Users/Reva Sawant/Downloads/download21.xlsx") //writeFile :write/update to a file

}
ExcelTest();