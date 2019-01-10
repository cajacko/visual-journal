const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
const { join } = require("path");
const set = require("lodash/set");
const get = require("lodash/get");
const unset = require("lodash/unset");
const tempy = require("tempy");
const routes = require("./src/routes/index");

const tmpDir = tempy.directory();

const app = express();
const port = 3000;

app.use(bodyParser.json());

const sendImage = (req, res) => data => {
  res.contentType("image/png");
  res.end(data, "binary");
};

const sendFile = (req, res) => (...args) => res.sendFile(...args);

const sendJSON = (req, res) => json => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(json));
};

let data = {};

const store = {
  set: (location, val) => {
    data = set(data, location, val);

    return Promise.resolve();
  },
  get: location => {
    return Promise.resolve(get(data, location));
  },
  remove: location => {
    data = unset(data, location);

    return Promise.resolve();
  }
};

routes.forEach(route => {
  const args = [
    `/${route[0]}`,
    (req, res) =>
      route[1]({
        store,
        baseUrl: "http://localhost:3000",
        sendImage: sendImage(req, res),
        sendFile: sendFile(req, res),
        sendJSON: sendJSON(req, res),
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
