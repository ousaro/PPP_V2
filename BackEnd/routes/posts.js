const express = require('express');
const router=express.Router();
const {createNewPost, getPosts, deletePost} = require("../Controllers/postsController")



// GET all posts
router.get('/', getPosts)

// GET a single post
router.get('/:id',(req,res)=>{
    res.json({mssg:"GET a single post"})
})

// Create a new post
router.post('/', createNewPost)

// DELETE a single posts
router.delete('/:id', deletePost)

// PATCH a single post
router.patch('/:id',(req,res)=>{
    res.json({mssg:"UPDATE a post"})
})

module.exports = router;