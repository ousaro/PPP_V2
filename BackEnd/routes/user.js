const express = require("express");
const router = express.Router();

const  {loginUser, signinUser} = require('../Controllers/usersController')

// login request
router.post('/login',loginUser)

// signIn request
router.post('/signin',signinUser)

module.exports = router;