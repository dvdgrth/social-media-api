const express = require("express");
const path = require("path");
const DB = require("./../databaseInterface");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("api.html", { root: path.join(__dirname, "./../views") });
});

// Get user by id.
router.get("/users/:id", async (req, res) => {
  res.json(await DB.getUserById(req.params.id));
});

// Get post by id.
router.get("/posts/:id", async (req, res) => {
  res.json(await DB.getPostById(req.params.id));
});

router.get("/posts", async (req, res) => {
  if (req.query.q) {
    res.json(await DB.searchPosts(req.query.q));
  } else {
    res.json(await DB.getAllPosts());
  }
});

router.get("/users", async (req, res) => {
  if (req.query.q) {
    res.json(await DB.searchUsers(req.query.q));
  } else {
    res.json(await DB.getAllUsers());
  }
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

router.post("/posts/comments", async (req, res) => {
  const body = await req.body;
  console.log(body);
  const ret = await DB.createComment(body.post, body.author, body.body);
  console.log(ret);
  res.send("created?");
});

module.exports = router;
