const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Hello World from index");
  res.render("index", {
    title: "social-media-api",
    message: "social-media-api",
    input: "ewhfouwrheofieu",
  });
});

module.exports = router;
