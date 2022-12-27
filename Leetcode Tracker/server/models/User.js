const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter a name"],
    },

    email: {
        type: String,
        required: [true, "Please enter an email"],
    },

    password: {
        type: String,
        required: [true, "Please enter a Password"],
        minLength: [6, "Password should be atleast 6 characters"],
        select: false,
    },

});