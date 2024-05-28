require('dotenv').config();


const express = require("express");
const router = express.Router();
const passport = require('passport')

const  {loginUserV, signupUserV, loginUserA, signupUserA, loginUser, signupUser} = require('../Controllers/usersController')


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