const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userType:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required : true,
    },
    confirmPass:{
        type: String,
        required : true,
    },
    fullName:{
        type: String,
        required : true,
    },
    photo:{ 
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    gender:{
        type: String,
    },
    address:{
        type: String,
    },
    city:{
        type: String,
    },
    description:{
        type: String,
    }

})

// creating a static signup
userSchema.statics.signup = async function(fullName,email, password, confirmPass, photo, userType){

    // checking if some fields are empty
    if(!password || !confirmPass || !userType){
        throw Error("All field must be filled")
    }

    // checking for a valid email
    if(!validator.isEmail(email)){
        throw Error("Please Enter a valid Email")
    }

    // chechikng for a strong password
    if(!validator.isStrongPassword(password)){
        throw Error("Weak Password")
    }

    // if the email already exist then didn't add it 
    const exists = await this.findOne({email})

    if(exists){
        throw Error("Email already exist!")
    }

    // if not hash the password and add the user to the db
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const confirmHash = await bcrypt.hash(confirmPass, salt);

    const match = await bcrypt.compare(confirmPass, hash)

    if(!match){
        throw Error("Password is not correct")
    }

    const user = await this.create({userType,email, password: hash,confirmPass: confirmHash,fullName, photo});

    return user;

}

// creating a static login
userSchema.statics.login = async function(email,password){

    // checking if some fields are empty
    if(!email || !password){
        throw Error("All field must be filled")
    }


    // if the email doesn't exist then send error 
    const user = await this.findOne({email})

    if(!user){
        throw Error("Incorrect Email!")
    }

    // if the password doesn't match then send error 
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("Incorrect Password!")
    }

    return user;

}

module.exports = mongoose.model('User',userSchema)