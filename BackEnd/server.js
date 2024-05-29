require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const postsRoutes= require("./routes/posts");
const userRoutes= require("./routes/user")
const passport = require('passport')
const session = require('express-session');

// express app
const app = express();

// MiddleWare
app.use(express.json()); // allow using body in post request


// Configure session middleware
app.use(session({
    secret: process.env.COOKIE_SECRET, // Replace with your secret
    resave: false,
    saveUninitialized: true
  }));



// Initialize Passport and restore authentication state, if any, from the session.
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


// routes
app.use('/api/posts',postsRoutes);
app.use('/api/users',userRoutes);


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for requests
        app.listen(process.env.PORT,()=>{
            console.log("Connect to the database & Listening to the port", process.env.PORT);
    })
    })
    .catch((error)=>{
        console.log(error);
    })

