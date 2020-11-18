const express = require("express");
const path = require("path");
const DB = require("./../databaseInterface");

const router = express.Router();

// Api landing page.
router.get("/", (req, res) => {
  res.sendFile("api.html", { root: path.join(__dirname, "./../views") });
});

// Get user by id.
router.get("/users/:id", async (req, res, next) => {
  try {
    res.json(await DB.getUserById(req.params.id));
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
});

// Get post by id.
router.get("/posts/:id", async (req, res, next) => {
  try {
    res.json(await DB.getPostById(req.params.id));
  } catch (error) {
    console.log("INside catch");
    error.statusCode = 400;
    next(error);
  }
});

// Get Posts.
router.get("/posts", async (req, res) => {
  if (req.query.q) {
    res.json(await DB.searchPosts(req.query.q));
  } else {
    res.json(await DB.getAllPosts());
  }
});

// Get Users.
router.get("/users", async (req, res) => {
  if (req.query.q) {
    res.json(await DB.searchUsers(req.query.q));
  } else {
    res.json(await DB.getAllUsers());
  }
});

// Create User.
router.post("/users", async (req, res) => {
  const body = await req.body;
  console.log(body);
  const ret = await DB.createUser(body.name, body.email, body.password);
  console.log(ret);
  res.send("created?");
});

// Create Post.
router.post("/posts", async (req, res) => {
  const body = await req.body;
  console.log(body);
  const ret = await DB.createPost(body.title, body.author, body.body);
  console.log(ret);
  res.send("created?");
});

// Create comment.
router.post("/posts/comments", async (req, res) => {
  const body = await req.body;
  console.log(body);
  const ret = await DB.createComment(body.post, body.author, body.body);
  console.log(ret);
  res.send("created?");
});

module.exports = router;
