const express = require('express');

const {createNewPost, getPosts,getPostsForId, deletePost} = require("../Controllers/postsController")
const vrequireAuth = require("../middleware/vrequireAuth")
const arequireAuth = require("../middleware/arequireAuth")


const router=express.Router();

// middleware to protect the api
// require auth for all the posts routes
router.use(vrequireAuth);
router.use(arequireAuth);

// GET all posts
router.get('/', getPosts)

// GET all posts for an association_id
router.get('/:id', getPostsForId)

// Create a new post
router.post('/', createNewPost)

// DELETE a single posts
router.delete('/:id', deletePost)

// PATCH a single post
router.patch('/:id',(req,res)=>{
    res.json({mssg:"UPDATE a post"})
})

module.exports = router;