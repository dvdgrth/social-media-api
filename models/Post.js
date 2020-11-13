const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: String,
  // comments: [{ body: String, date: Date, author: String }],
  date: { type: Date, default: Date.now },
  // rating: Number,
});
postSchema.post("save", () => console.log("saved post"));
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
