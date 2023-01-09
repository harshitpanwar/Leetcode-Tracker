const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");


//dotenv setup

if(process.env.NODE_ENV!=='production'){
    require("dotenv").config({path: "./config/config.env"});
}


//using Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());




// app.use(function(req, res, next) {
//   "Access-Control-Allow-Methods", "*";
//     next();
//   });


//importing our routes
const post = require("./routes/posts");
const user = require("./routes/user");


//using routes

app.use("/api/v1", post);
app.use("/api/v1", user);


module.exports = app;