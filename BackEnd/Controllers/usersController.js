const Vuser = require('../models/userVModel')
const jwt = require('jsonwebtoken');


const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{ expiresIn: "3d"})
}



// LogIn 

const loginUser = async (req, res)=>{
    const {email , password} = req.body;

    try{
        const vuser = await Vuser.login(email, password)

        // create token
        const token = createToken(vuser._id);

        res.status(200).json({email, token})

    }catch(error){
        res.status(400).json({error: error.message})
    }
}



// SignIn

const signinUser = async (req, res)=>{

    const {email , password} = req.body;

    try{
        const vuser = await Vuser.signup(email, password)

        // create token
        const token = createToken(vuser._id);

        res.status(200).json({email, token})

    }catch(error){
        res.status(400).json({error: error.message})
    }

}



module.exports = {loginUser, signinUser};