const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../support/POManager');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.poManager = new POManager(this.page);
});

After(async function () {
  await this.browser.close();
});
