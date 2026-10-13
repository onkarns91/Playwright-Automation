const { test, expect } = require("@playwright/test");

test('popup validations', async ({ page }) => {
  page.setDefaultTimeout(20000);

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/", { timeout: 30000, waitUntil: "domcontentloaded" });
  /* await page.goto("https://www.youtube.com/");
  await page.goBack();     //to navigate barowser back
  await page.goForward();  //to navigate barowser forward */
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();

  //to handle dafult java popup
  page.on('dialog', dialog => dialog.accept()); /* syntax >(method) Page.on(event: "dialog", listener: (dialog: Dialog) => any): Page (+18 overloads)Emitted when a JavaScript dialog appears, 
   such as alert, prompt, confirm or beforeunload. Listener must either dialog.accept([promptText]) or dialog.dismiss() the dialog - otherwise the page will freeze waiting for the dialog, and actions like click will never finish. */
  await page.locator("#confirmbtn").click();

  await page.locator("#confirmbtn").click();
  page.on('dialog', dialog => dialog.dismiss());

  //method to hovers over the element
  await page.locator("#mousehover").hover();
  await page.locator("div a[href='#top']").click();

  //When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe.
  /*   const framesPage=page.frameLocator("#courses-iframe"); 
    await framesPage.locator("li a[href='lifetime-access']:visible").click({timeout:30000});
    const value=await framesPage.locator(".text h2").textContent();
    console.log(await value.split(" ")[1]); */



});