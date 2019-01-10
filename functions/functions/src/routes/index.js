const getImageURL = require("./getImageURL");
const getImage = require("./getImage");
const buildImage = require("./buildImage");

module.exports = [
  ["getImageURL", getImageURL, "post"],
  ["getImage", getImage],
  ["buildImage", buildImage, "post"]
];
