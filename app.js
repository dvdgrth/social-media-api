const express = require("express");
const DB = require("./databaseInterface");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const PORT = 3000;

const app = express();

app.set("view engine", "pug");

DB.initConnection();

app.use(express.static("public"));
app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
