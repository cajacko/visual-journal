var functions = require("firebase-functions");
const entry = require("./src/entry");

exports.getJournalPhoto = functions.https.onRequest(entry);
