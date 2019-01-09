const puppeteer = require("puppeteer");

class Browser {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._browser = null;
    this._page = null;

    this._isReadyPromise = puppeteer.launch().then(browser => {
      this._browser = browser;

      this._browser.newPage().then(page => {
        this._page = page;
      });
    });
  }

  isReady() {
    return this._isReadyPromise.then(() => null);
  }

  setViewPort({ height, width }) {
    return this._ensurePage().setViewport({ height, width });
  }

  goTo(path) {
    const url = `${this._baseUrl}${path}`;

    return this._ensurePage().goto(url, {
      waitUntil: "networkidle0"
    });
  }

  getScreenshot() {
    return this._ensurePage().screenshot();
  }

  close() {
    return this._ensureBrowser().close();
  }

  _ensurePage() {
    if (!this._page) {
      throw new Error(
        "Page is not ready, ensure you've waited for Browser.isReady"
      );
    }

    return this._page;
  }

  _ensureBrowser() {
    if (!this._browser) {
      throw new Error(
        "Browser is not ready, ensure you've waited for Browser.isReady"
      );
    }

    return this._browser;
  }
}

module.exports = Browser;
