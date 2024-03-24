const jwt = require("jsonwebtoken")
const Auser =require('../models/userAModel')


const arequireAuth = async (req, res, next)=> {

    // verify authentication
    const { authorization } = req.headers

    if(!authorization){
        res.status(401).json({error: "Authorization token required"})
    }

    const token = authorization.split(' ')[1];

    try{
        // verify is the token valid
        const {_id} = jwt.verify(token, process.env.SECRET)

        // this for attaching a user proprity to req so after this widdleware (next) it can be use from req of other controllers
        req.user = await Auser.findOne({_id}).select("_id") 

        next()

    }catch(error){
        console.log(error)
        res.status(401).json({error: "Request is not authorized"})
    }
    

}

module.exports = arequireAuth;