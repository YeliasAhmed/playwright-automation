class POManager {
  constructor(page) {
    this.page = page;
    this.homePage = null;
  }
  getHomePage() {
    if (!this.homePage) {
      const { HomePage } = require('./HomePage');
      this.homePage = new HomePage(this.page);
    }
    return this.homePage;
  }
}
module.exports = { POManager };
