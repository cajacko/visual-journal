const buildHtml = require("../../common/web/index");
const Browsers = require("../modules/Browsers");
const TempFile = require("../modules/TempFile");

const browsers = new Browsers({ baseUrl: "http://localhost:3000" });

module.exports = ({ fs, tmpDir }) => props => {
  const tempFile = new TempFile({ fs, tmpDir });

  return browsers.getBrowser().then(browser => {
    const html = buildHtml(props);

    const close = () => Promise.all([tempFile.remove(), browser.close()]);

    return Promise.all([
      tempFile.write(html).then(() => tempFile.getID()),
      browser.setViewPort({ height: 4032, width: 4032 })
    ])
      .then(([tempFileID]) => browser.goTo(`/tempFile?id=${tempFileID}`))
      .then(() => browser.getScreenshot())
      .catch(e =>
        close().then(() => {
          throw e;
        })
      )
      .then(res => close().then(() => res));
  });
};
