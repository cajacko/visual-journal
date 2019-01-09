const getImageURL = require("./getImageURL");
const getImage = require("./getImage");
const buildImage = require("./buildImage");
const tempFile = require("./tempFile");

module.exports = [
  ["getImageURL", getImageURL],
  ["getImage", getImage],
  ["buildImage", buildImage, "post"],
  ["tempFile", tempFile]
];
