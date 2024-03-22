const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userASchema = new schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    address:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    city:{
        type: String,
        required : true,
    },
    password:{
        type: String,
        required : true,
    },
    confirmPass:{
        type: String,
        required : true,
    },
    description:{
        type: String,
        required : true,
    }


})

module.exports = mongoose.model('AUser',userASchema);

