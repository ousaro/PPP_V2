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


userASchema.statics.asignup = async function(name,address,email,city, password, confirmPass, description){

    if(!email || !password || !name || !address || !city || !confirmPass || !description){
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
    const confirmHash = await bcrypt.hash(confirmPass, salt);
;
    const match = await bcrypt.compare(confirmPass, hash)

    if(!match){
        throw Error("Password is not correct")
    }

    const auser = await this.create({email, password:hash, name, address, city, confirmPass: confirmHash, description})

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

