const buildHtml = require("../../common/web/index");
const Browsers = require("../modules/Browsers");

const browsers = new Browsers();

module.exports = ({ fs, baseUrl }) => props => {
  return browsers.getBrowser({ baseUrl }).then(browser => {
    const html = buildHtml(props);

    const close = () => browser.close();

    return browser
      .setViewPort({ height: 4032, width: 4032 })
      .then(() => browser.setContent(html))
      .then(() => browser.getScreenshot())
      .catch(e =>
        close().then(() => {
          throw e;
        })
      )
      .then(res => close().then(() => res));
  });
};
