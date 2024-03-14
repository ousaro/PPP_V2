require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const postsRoutes= require("./routes/posts");


// express app
const app = express();

// MiddleWare
app.use(express.json()); // allow using body in post request

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


// routes
app.use('/api/posts',postsRoutes);

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

