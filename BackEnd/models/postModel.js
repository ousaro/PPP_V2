const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema= new Schema({
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    programType: {
        type: String,
        required: true,
    },
    association_id:{
        type: String,
        required: true,

    },
    association_profile:{
        type: String,
        required: true
    },
    association_name:{
        type: String,
        required: true
    },
    association_verified:{
        type: Boolean,
        required: true
    }


},{ timestamps: true })


module.exports = mongoose.model('Post', postSchema);
