const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});
userSchema.post("save", () => console.log("saved user"));
const User = mongoose.model("User", userSchema);

module.exports = User;
