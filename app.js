const { static } = require("express");
const express = require("express");
const DB = require("./databaseInterface");
const indexRouter = require("./routes/index");
const PORT = 3000;

const app = express();

app.set("view engine", "pug");

DB.initConnection();

app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
