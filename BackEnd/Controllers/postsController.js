const Post = require('../models/postModel');
const mongoose = require('mongoose');





// GET all posts
const getPosts = async (req,res)=>{

    const posts = await Post.find({}).sort({createdAt:-1})

    res.status(200).json(posts);
}


// GET a single post


// Create new post

const  createNewPost = async (req,res)=>{
    const {description, image, programType} = req.body;

    let emptyFields = [];

    if(!description){
        emptyFields.push('description');
    }
    if(!programType){
        emptyFields.push('programType')
    }
 
    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    // add doc to db
    try{
        const post = await Post.create({description, image, programType})
        res.status(200).json(post)

    }catch(error){
        res.status(400).json({error: error.message})
    }
}


// DELETE a single posts

const deletePost = async (req,res)=>{

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Post"});
    }

    const post = await Post.findOneAndDelete({_id: id});

    if(!post){
        return res.status(400).json({error: "No such post"});
    }

    res.status(200).json(post);

}

// PATCH a single post



module.exports = {
    createNewPost,
    getPosts,
    deletePost,

}