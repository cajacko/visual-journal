const Browser = require("./Browser");

class Browsers {
  constructor({ baseUrl }) {
    this._browserProps = { baseUrl };
    this.nextBrowser = new Browser(this._browserProps);
  }

  getBrowser() {
    const browser = this.nextBrowser;

    this.nextBrowser = new Browser(this._browserProps);

    return browser.isReady().then(() => browser);
  }
}

module.exports = Browsers;
