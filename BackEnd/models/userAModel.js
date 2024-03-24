const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const validator = require("validator")

const schema = mongoose.Schema;

const userASchema = new schema({
    userType:{
        type: String,
        default : "association"
    },
    name:{
        type: String,
        required: true,
        unique: true,
    },
    address:{
        type: String,
        required:false,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    city:{
        type: String,
        required : false,
    },
    password:{
        type: String,
        required : true,
    },
    confirmPass:{
        type: String,
        required : false,
    },
    description:{
        type: String,
        required : false,
    }


})


userASchema.statics.asignup = async function(email, password, name){

    if(!email || !password || !name){
        throw Error("All field must be filled");
    }


    if(!validator.isEmail(email)){
        throw Error("Please enter a valid email");
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Weak Password")
    }


    const exist = await this.findOne({email});

    if(exist){
        throw Error("Email already exist!")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const auser = await this.create({email, password:hash, name})

    return auser

}

userASchema.statics.alogin = async function(email, password){

    if(!email || !password){
        throw Error("All field must be filled");
    }

    const auser = await this.findOne({email});

    if(!auser){
        throw Error("Incorrect email!")
    }

    const match = await bcrypt.compare(password, auser.password)

    if(!match){
        throw Error("Incorrect password!")
    }

    return auser

}


module.exports = mongoose.model('Auser',userASchema);

