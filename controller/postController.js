const Post = require('../models/blogModel')

const post_index = (req, res) => {
  Post.find({}, function (err, posts) {
    res.render('posts/allPosts', {
      posts: posts,
    })
  })
}

const post_details = (req, res) => {
  const requestedPostId = req.params.postId
  Post.findOne({ _id: requestedPostId }, function (err, post) {
    res.render('posts/post', {
      post: post,
      title: post.title,
      content: post.content,
    })
  })
}

const post_create_get = (req, res) => {
  res.render('posts/compose')
}

const post_create_post = (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  })

  post.save(function (err) {
    if (!err) {
      res.redirect('/posts')
    }
  })
}

const post_delete = (req, res) => {
  const postId = req.params.postId
  Post.findByIdAndDelete(postId, (err) => {
    if (!err) {
      res.redirect('/')
    } else {
      console.log(err)
    }
  })
}
module.exports = {
  post_index,
  post_details,
  post_delete,
  post_create_get,
  post_create_post,
}
