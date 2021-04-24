require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const postRoutes = require('./routes/postsRoutes')
const homeStartingContent =
  'Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.'
const aboutContent =
  'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
const contactContent =
  'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.'

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

//connecting to mongoDB atlas using mongoose
const mongoPass = process.env.MONGO_PASS
mongoose.connect(
  'mongodb+srv://testUser:' + mongoPass + '@cluster0.bhdih.mongodb.net/blogDB',
  { useNewUrlParser: true }
)

//Schema and model written in models/blogModels and imported
// const postSchema = {
//   title: String,
//   content: String,
// }

// const Post = mongoose.model('Post', postSchema)

//GET routes for home, about and contact
app.get('/', (req, res) => {
  res.render('home', { startingContent: homeStartingContent })
})

app.get('/about', function (req, res) {
  res.render('about', { aboutContent: aboutContent })
})

app.get('/contact', function (req, res) {
  res.render('contact', { contactContent: contactContent })
})

//GET and POST routes for posts imported from postRoutes
app.use('/posts', postRoutes)

//GET and POST routes for posts written in postRoutes
// app.get('/posts', (req, res) => {
//   Post.find({}, function (err, posts) {
//     res.render('allPosts', {
//       posts: posts,
//     })
//   })
// })

// app.get('/posts/compose', function (req, res) {
//   res.render('compose')
// })

// app.post('/posts/compose', function (req, res) {
//   const post = new Post({
//     title: req.body.postTitle,
//     content: req.body.postBody,
//   })

//   post.save(function (err) {
//     if (!err) {
//       res.redirect('/')
//     }
//   })
// })

// app.get('/posts/:postId', function (req, res) {
//   const requestedPostId = req.params.postId

//   Post.findOne({ _id: requestedPostId }, function (err, post) {
//     res.render('post', {
//       post: post,
//       title: post.title,
//       content: post.content,
//     })
//   })
// })

// app.delete('/posts/delete/:postId', (req, res) => {
//   const postId = req.params.postId
//   Post.findByIdAndDelete(postId, (err) => {
//     if (!err) {
//       res.redirect('/')
//     } else {
//       console.log(err)
//     }
//   })
// })

// Using GET method to delete posts from DB
// app.get('/delete/:postId', (req, res) => {
//   const postId = req.params.postId
//   Post.deleteOne({ _id: postId }, (err) => {
//     if (!err) {
//       res.redirect('/')
//     }
//   })
// })

// app.get('/register', (req, res) => {
//   res.render('register')
// })

// app.post('/register', (req, res) => {
//   var username = req.body.username
//   var password = req.body.password
//   console.log(username, password)
// })

// app.get('/login', (req, res) => {
//   res.render('login')
// })

//running the server at port 3000
app.listen(3000, function () {
  console.log('Server started on port 3000')
})
