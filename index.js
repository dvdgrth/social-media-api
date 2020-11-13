const express = require("express");
const mongoose = require("mongoose");
const DB = require("./databaseInterface");
const PORT = 3000;

const app = express();

(async function () {
  await DB.initConnection();
  console.log("after init");
})();

console.log("after init 2");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
