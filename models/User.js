const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});
userSchema.post("save", () => console.log("A new user was saved."));
const User = mongoose.model("User", userSchema);

module.exports = User;
