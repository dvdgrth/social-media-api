const express = require("express");
const DB = require("./../databaseInterface");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await DB.getAllUsers();
  const posts = await DB.getAllPosts();

  res.render("index", {
    title: "social-media-api",
    bodyTitle: "social-media-api",
    welcomeMessage: "Welcome to the one and only social media site",
    users: users,
    posts: posts,
  });
});

module.exports = router;
