//importing mongoose
const mongoose = require('mongoose')

//creating a new schema for posts to be stored in the DB
const postSchema = {
  title: String,
  content: String,
}

//creating a new Post model based on the postSchema defined earlier
const Post = mongoose.model('Post', postSchema)

//exporting Post model
module.exports = Post
