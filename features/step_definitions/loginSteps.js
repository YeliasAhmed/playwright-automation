const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
require('dotenv').config();
const { POManager } = require('../../pageobjects/POManager');

Given('I launch the browser', async function () {
  const { chromium } = require('playwright');
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.poManager = new POManager(this.page);
});

When('I navigate to the application', async function () {
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
