const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');


const { expect } = require('@playwright/test');
// const { chromium } = require('playwright');
require('dotenv').config();
// const { POManager } = require('../../pageobjects/POManager');

setDefaultTimeout(60 * 1000); // increase timeout

// // Hooks
// Before(async function () {
//   this.browser = await chromium.launch({ headless: false });
//   this.context = await this.browser.newContext();
//   this.page = await this.context.newPage();
//   this.poManager = new POManager(this.page);
// });

// After(async function () {
//   await this.browser.close();
// });

// Steps

Given('I navigate to the application', async function () {
  await this.page.goto(process.env.BASE_URL);
});

Then('I should see the home page title', async function () {
  const title = await this.page.title();
  expect(title).toContain("Automation Exercise");
});

Given('I click on the Products button', async function () {
  const homePage = this.poManager.getHomePage();
  await homePage.clickProducts();
});

Then('I should be navigated to ALL PRODUCTS page successfully', async function () {
  await this.page.waitForURL('**/products');
  const url = this.page.url();
  expect(url).toContain('/products');
});
