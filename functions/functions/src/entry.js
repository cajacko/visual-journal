const puppeteer = require("puppeteer");

module.exports = (req, res) => {
  console.log("hi there");

  puppeteer
    .launch()
    .then(() => {
      console.log("launched");
      res.send("launched");
    })
    .catch(e => {
      console.error(e);
      res.send("error");
    });
};
