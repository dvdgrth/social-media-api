const express = require("express");
const DB = require("./databaseInterface");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const { json } = require("express");
const PORT = 3000;

const app = express();

app.set("view engine", "pug");

DB.initConnection();

app.use(express.static("public"));
app.use(express.json());
app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
