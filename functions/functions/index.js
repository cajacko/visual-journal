const functions = require("firebase-functions");
const fs = require("fs-extra");
const { join } = require("path");
const set = require("lodash/set");
const get = require("lodash/get");
const unset = require("lodash/unset");
const admin = require("firebase-admin");
const tempy = require("tempy");
const routes = require("./src/routes");

admin.initializeApp();

const tmpDir = tempy.directory();

const sendImage = (req, res) => data => {
  res.contentType("image/png");
  res.end(data, "binary");
};

const sendFile = (req, res) => (...args) => res.sendFile(...args);

const sendJSON = (req, res) => json => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(json));
};

const getRef = location => `/${location.join("/")}`;

const store = {
  set: (location, value) =>
    admin
      .database()
      .ref(getRef(location))
      .set(value)
      .then(() => store.get(location)),
  get: location =>
    admin
      .database()
      .ref(getRef(location))
      .once("value")
      .then(snapshot => snapshot.val()),
  remove: location =>
    admin
      .database()
      .ref(getRef(location))
      .remove()
};

routes.forEach(route => {
  exports[route[0]] = functions.https.onRequest((req, res) =>
    route[1]({
      store,
      baseUrl: "https://us-central1-visual-journal-514e4.cloudfunctions.net",
      sendImage: sendImage(req, res),
      sendFile: sendFile(req, res),
      sendJSON: sendJSON(req, res),
      fs,
      tmpDir
    })(req, res)
  );
});
