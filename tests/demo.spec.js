const {test} = require('@playwright/test');

test('browser context Playwright Test', async ({browser})=>   //'test' annotation
    {
        const context=await browser.newContext()
        const page=await context.newPage()
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")     
    })
/*Whenever we use await, it is normally used inside an async function. 
await pauses the execution of that async function until the Promise is resolved or rejected,
allowing asynchronous operations to be handled in a sequential-looking way.*/

test('page playwright test',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
})