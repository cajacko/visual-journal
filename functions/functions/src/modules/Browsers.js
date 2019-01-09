const Browser = require("./Browser");

class Browsers {
  constructor() {
    this.nextBrowser = new Browser();
  }

  getBrowser({ baseUrl }) {
    const browser = this.nextBrowser;

    browser.setBaseUrl(baseUrl);

    this.nextBrowser = new Browser();

    return browser.isReady().then(() => browser);
  }
}

module.exports = Browsers;
