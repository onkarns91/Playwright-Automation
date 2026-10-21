const Exceljs=require('exceljs');


async function ExcelTest(){
const workbook=new Exceljs.Workbook(); 
await workbook.xlsx.readFile("C:/Users/Reva Sawant/Downloads/download21.xlsx") //give excel path to workbook
const worksheet= workbook.getWorksheet('Sheet1'); //provide exact SheetName

   
    worksheet.eachRow( (row,rowNumber)=>{
    row.eachCell((cell,colNumber)=>{
        console.log(cell.value)
    }
)
}
)
}
ExcelTest();