const express = require('express')
const router = express.Router()
const Post = require('../models/blogModel')
const postController = require('../controller/postController')

//all the logic written in postController
router.get('/', postController.post_index)
router.get('/compose', postController.post_create_get)
router.post('/compose', postController.post_create_post)
router.get('/:postId', postController.post_details)
router.delete('/delete/:postId', postController.post_delete)

module.exports = router
