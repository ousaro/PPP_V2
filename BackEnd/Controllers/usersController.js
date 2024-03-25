const Vuser = require('../models/userVModel')
const Auser = require('../models/userAModel')
const jwt = require('jsonwebtoken');


const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{ expiresIn: "3d"})
}

// Auth for volounteer users 

// LogIn 

const loginUserV = async (req, res)=>{
    const {email , password} = req.body;

    
    try{
        const vuser = await Vuser.vlogin(email, password)

        const {userType , firstName, lastName, date, gender} = vuser;

        // create token
        const token = createToken(vuser._id);

        res.status(200).json({email, token, userType, firstName, lastName, date, gender})

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// SignIn

const signupUserV = async (req, res)=>{

    const {firstName,lastName,email,date,password,confirmPass, gender} = req.body;

   

    try{
        const vuser = await Vuser.vsignup(firstName,lastName,email,date,password,confirmPass, gender)

        const {userType} = vuser;

        // create token
        const token = createToken(vuser._id);

        res.status(200).json({email, token, userType, firstName,lastName,date, gender})

    }catch(error){
        res.status(400).json({error: error.message})
    }

}




// Auth for Associaition users 

// LogIn 

const loginUserA = async (req, res)=>{
    const {email , password} = req.body;

    try{
        const auser = await Auser.alogin(email, password)

        const {userType, name, address , city, description} = auser;

        const {_id} = auser;

        // create token
        const token = createToken(auser._id);

        res.status(200).json({email, token, userType, _id, name ,address ,city , description})

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// SignIn

const signupUserA = async (req, res)=>{

    const {name,address,email,city, password, confirmPass, description} = req.body;

    try{
        const auser = await Auser.asignup(name,address,email,city, password, confirmPass, description)

        const {userType} = auser;
        const {_id} = auser;

        // create token
        const token = createToken(auser._id);

        res.status(200).json({email, token, userType, _id, name ,address ,city , description})

    }catch(error){
        res.status(400).json({error: error.message})
    }

}


module.exports = {loginUserV, signupUserV, loginUserA, signupUserA};