const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');

//dotenv setup

if(process.env.NODE_ENV!=='production'){
    require("dotenv").config({path: "./config/config.env"});
}

app.use(cors({  

    origin: 'http://127.0.0.1:5173',
    credentials: true
}));
//using Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
//   });
  

//importing our routes
const post = require("./routes/posts");
const user = require("./routes/user");


//using routes

app.use("/api/v1", post);
app.use("/api/v1", user);


module.exports = app;