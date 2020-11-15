const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");

async function initConnection() {
  try {
    await mongoose.connect("mongodb://localhost/myDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected I guess");
  } catch (error) {
    console.log(error);
  }

  mongoose.connection.on("error", (error) => {
    console.log(error);
  });
}

function createUser(name, email, password) {
  // TODO: Test if user is already exists.
  const newUser = new User({
    name,
    email,
    password,
  });
  newUser.save();
}

async function getAllPosts() {
  return await Post.find({});
}

async function getAllUsers() {
  return await User.find({});
}

exports.initConnection = initConnection;
exports.createUser = createUser;
exports.getAllPosts = getAllPosts;
exports.getAllUsers = getAllUsers;
