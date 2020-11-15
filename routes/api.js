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

router.post("/users", async (req, res) => {
  const body = await req.body;
  console.log(body);
  const ret = await DB.createUser(body.name, body.email, body.password);
  console.log(ret);
  res.send("created?");
});

router.post("/posts", async (req, res) => {
  const body = await req.body;
  console.log(body);
  const ret = await DB.createPost(body.title, body.author, body.body);
  console.log(ret);
  res.send("created?");
});

module.exports = router;
