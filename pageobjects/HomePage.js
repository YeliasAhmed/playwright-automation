class HomePage {
  constructor(page) {
    this.page = page;
    this.productsBtn = page.locator('a[href="/products"]');
  }
  async clickProducts() {
    await this.productsBtn.click();
  }
}
module.exports = { HomePage };
