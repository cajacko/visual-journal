const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
const { join } = require("path");
const routes = require("./src/routes/index");

const tmpDir = join(__dirname, "../../tmp");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const sendImage = (req, res) => data => {
  res.contentType("image/png");
  res.end(data, "binary");
};

const sendFile = (req, res) => (...args) => res.sendFile(...args);

routes.forEach(route => {
  const args = [
    `/${route[0]}`,
    (req, res) =>
      route[1]({
        sendImage: sendImage(req, res),
        sendFile: sendFile(req, res),
        fs,
        tmpDir
      })(req, res)
  ];

  switch (route[2]) {
    case "post":
      app.post(...args);
      break;
    default:
      app.get(...args);
      break;
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
