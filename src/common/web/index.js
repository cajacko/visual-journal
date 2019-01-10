const html = require("./html");
const style = require("./style");
const script = require("./script");
const getThemeProps = require("../utils/getThemeProps");

module.exports = function(data, options) {
  const themeProps = getThemeProps(data.theme, data.themeVariant);
  const allData = { ...data, themeProps };

  return html(style(allData), script(allData), allData);
};
