const User = require("../models/userModel")
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{ expiresIn: "3d"})
}


// Auth for users

// login 

const loginUser = async (req, res)=>{
    const {email , password} = req.body;

    
    try{
        const user = await User.login(email, password)

        const {userType, fullName, photo} = user;

        // create token
        const token = createToken(user._id);
        const _id = user._id

        res.status(200).json({_id,email, token, userType, fullName, photo})

    }catch(error){
        res.status(400).json({error: error.message})
    }
}



// SignIn

const signupUser = async (req, res)=>{

    const {fullName,email, password, confirmPass, photo, userType} = req.body;

    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');


    try{
        const user = await User.signup(fullName,email, password, confirmPass, photo, userType , verificationToken)

        // create token
        const token = createToken(user._id);
        const _id = user._id

        res.status(200).json({_id,email, token, userType, fullName,photo})

    }catch(error){
        res.status(400).json({error: error.message})
    }

}



module.exports = {loginUser, signupUser};