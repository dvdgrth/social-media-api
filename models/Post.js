const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  body: { type: String, required: true },
  comments: [
    {
      body: { type: String, required: true },
      date: { type: Date, default: Date.now },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
  ],
  date: { type: Date, default: Date.now },
  // rating: Number,
});
postSchema.post("save", () => console.log("A new Post was saved."));
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
