var functions = require("firebase-functions");
const routes = require("./src/routes");

routes.forEach(route => {
  exports[route[0]] = functions.https.onRequest(route[1]);
});
