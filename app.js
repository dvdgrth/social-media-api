const express = require("express");
const DB = require("./databaseInterface");
const indexRouter = require("./routes/index");
const PORT = 3000;

const app = express();

DB.initConnection();

app.use("/", indexRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
