const express = require("express");
const app = express();
const port = 3000;
const entry = require("./src/entry");

app.get("/", entry);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
