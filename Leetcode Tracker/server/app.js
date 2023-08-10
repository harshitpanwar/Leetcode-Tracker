const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');

//dotenv setup

if(process.env.NODE_ENV!=='production'){
    require("dotenv").config({path: "./config/config.env"});
}
https://github.com/harshitpanwar/Leetcode-Tracker.git/server
app.use(cors({  

    origin: ['*'],
    credentials: true
}));
//using Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


//importing our routes
const post = require("./routes/posts");
const user = require("./routes/user");


//using routes

app.use("/api/v1", post);
app.use("/api/v1", user);


module.exports = app;