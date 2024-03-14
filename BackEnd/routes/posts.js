const express = require('express');
const Post = require('../models/postModel')

const router=express.Router();



// GET all posts
router.get('/',(req,res)=>{
    res.json({mssg:"GET all posts"})
})

// GET a single post
router.get('/:id',(req,res)=>{
    res.json({mssg:"GET a single post"})
})

// POST all posts
router.post('/', async (req,res)=>{
    const {description, image} = req.body;
    try{
        const post = await Post.create({description, image})
        res.status(200).json(post)

    }catch(error){
        res.status(400).json({error: error.message})
    }
})

// DELETE a single posts
router.delete('/:id',(req,res)=>{
    res.json({mssg:"DELETE a post"})
})

// PATCH all posts
router.patch('/:id',(req,res)=>{
    res.json({mssg:"UPDATE a post"})
})

module.exports = router;