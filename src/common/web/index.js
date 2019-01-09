const html = require("./html");
const style = require("./style");
const script = require("./script");
const { render } = require("../utils/ejs");

module.exports = function(data, options) {
  return render(html(style, script), data, options);
};
