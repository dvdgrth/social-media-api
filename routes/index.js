const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Hello World from index");
  res.render("index", {
    title: "social-media-api",
    bodyTitle: "social-media-api",
    welcomeMessage: "Welcome to the one and only social media site",
    users: ["user 1", "user 2", "user 3"],
    posts: ["post 1", "post 2", "post 3"],
  });
});

module.exports = router;
