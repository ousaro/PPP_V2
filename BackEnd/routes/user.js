require('dotenv').config();


const express = require("express");
const router = express.Router();
const passport = require('passport')
const passportSetup = require('../APIs/googleAuth') // this is essential to make the google auth work

const  {loginUser, signupUser} = require('../Controllers/usersController')


router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: process.env.CLIENT_URL }),
    (req, res) => {
        if (req.isAuthenticated()) {
            // Successful authentication, redirect to UserType with user info
            res.redirect(`${process.env.CLIENT_URL}/UserType?user=${encodeURIComponent(JSON.stringify(req.user))}`);
        } else {
            // Failure case, redirect to home page
            res.redirect(process.env.CLIENT_URL);
        }
    }
);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


// Auth for  user
// login
router.post('/login',loginUser)
// signUp request
router.post('/UserType',signupUser) 
// email verification for association account
//router.post('/verification')


module.exports = router;