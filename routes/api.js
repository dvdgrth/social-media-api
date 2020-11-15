const express = require("express");
const path = require("path");
const DB = require("./../databaseInterface");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("api.html", { root: path.join(__dirname, "./../views") });
});

router.get("/posts", (req, res) => {
  DB.getAllPosts()
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => res.json({ err: err }));
});

router.get("/users", (req, res) => {
  DB.getAllUsers()
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => res.json({ err: err }));
});

module.exports = router;
