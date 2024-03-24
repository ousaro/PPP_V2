const express = require("express");
const router = express.Router();

const  {loginUserV, signupUserV, loginUserA, signupUserA} = require('../Controllers/usersController')

// Auth for volounteer users
// login request
router.post('/volounteer/login',loginUserV)

// signIn request
router.post('/volounteer/signup',signupUserV)




// Auth for association users
// login request
router.post('/association/login',loginUserA)

// signIn request
router.post('/association/signup',signupUserA)



module.exports = router;