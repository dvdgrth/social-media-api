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
    const ret = await DB.getUserById(req.params.id);
    if (ret != null) {
      res.json(ret);
    } else {
      let error = new Error(`Id not found. (id = ${req.params.id})`);
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
});

// Get post by id.
router.get("/posts/:id", async (req, res, next) => {
  try {
    const ret = await DB.getPostById(req.params.id);
    if (ret != null) {
      res.json(ret);
    } else {
      let error = new Error(`Id not found. (id = ${req.params.id})`);
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
});

// Get Posts.
router.get("/posts", async (req, res, next) => {
  try {
    if (req.query.q) {
      res.json(await DB.searchPosts(req.query.q));
    } else {
      res.json(await DB.getAllPosts());
    }
  } catch (error) {
    next(error);
  }
});

// Get Users.
router.get("/users", async (req, res, next) => {
  try {
    if (req.query.q) {
      res.json(await DB.searchUsers(req.query.q));
    } else {
      res.json(await DB.getAllUsers());
    }
  } catch (error) {
    next(error);
  }
});

// Create User.
router.post("/users", async (req, res, next) => {
  try {
    const ret = await DB.createUser(
      req.body.name,
      req.body.email,
      req.body.password
    );
    res.json(ret);
  } catch (error) {
    next(error);
  }
});

// Create Post.
router.post("/posts", async (req, res, next) => {
  try {
    const ret = await DB.createPost(
      req.body.title,
      req.body.author,
      req.body.body
    );
    res.json(ret);
  } catch (error) {
    next(error);
  }
});

// Create comment.
router.post("/posts/comments", async (req, res, next) => {
  try {
    const ret = await DB.createComment(
      req.body.post,
      req.body.author,
      req.body.body
    );
    res.json(ret);
  } catch (error) {
    next(error);
  }
});

// Delete Post.
router.delete("/posts/:id", async (req, res, next) => {
  try {
    const ret = await DB.deletePostById(req.params.id);
    res.json(ret);
  } catch (error) {
    next(error);
  }
});

// Delete User.
router.delete("/users/:id", async (req, res, next) => {
  try {
    const ret = await DB.deleteUserById(req.params.id.trim());
    res.json(ret);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
