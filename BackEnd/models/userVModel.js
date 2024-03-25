const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const Schema = mongoose.Schema;

const userVSchema = new Schema({
    userType:{
        type: String,
        default: "volounteer"
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    date:{
        type: Date,
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
    gender:{
        type: String,
        required : true,
    }

})

// creating a static signup
userVSchema.statics.vsignup = async function(firstName,lastName,email,date,password,confirmPass, gender){

    // checking if some fields are empty
    if(!email || !password || !firstName || !lastName || !date || !confirmPass || !gender){
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

    const vuser = await this.create({email, password: hash,firstName,lastName,date,confirmPass: confirmHash, gender});

    return vuser;

}

// creating a static login
userVSchema.statics.vlogin = async function(email,password){

    // checking if some fields are empty
    if(!email || !password){
        throw Error("All field must be filled")
    }


    // if the email doesn't exist then send error 
    const vuser = await this.findOne({email})

    if(!vuser){
        throw Error("Incorrect Email!")
    }

    // if the password doesn't match then send error 
    const match = await bcrypt.compare(password, vuser.password)

    if(!match){
        throw Error("Incorrect Password!")
    }

    return vuser;

}

module.exports = mongoose.model('Vuser',userVSchema)