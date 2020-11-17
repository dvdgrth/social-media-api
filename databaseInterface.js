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

async function createUser(name, email, password) {
  // TODO: Test if user is already exists.
  const newUser = new User({
    name,
    email,
    password,
  });
  return await newUser.save();
}

async function createPost(title, author, body) {
  const newPost = new Post({
    title,
    author,
    body,
  });
  return await newPost.save();
}

async function createComment(post, author, body) {
  let p = await Post.findById(post);
  p.comments.push({ body: body, author: author });
  return await p.save();
}

async function getAllPosts() {
  return await Post.find({});
}

async function getAllUsers() {
  return await User.find({});
}

async function getPostById(id) {
  return await Post.findById(id);
}

async function getUserById(id) {
  return await User.findById(id);
}

exports.initConnection = initConnection;
exports.createUser = createUser;
exports.createPost = createPost;
exports.createComment = createComment;
exports.getAllPosts = getAllPosts;
exports.getAllUsers = getAllUsers;
exports.getPostById = getPostById;
exports.getUserById = getUserById;
