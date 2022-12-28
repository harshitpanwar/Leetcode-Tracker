const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter a name"],
    },

    email: {
        type: String,
        required: [true, "Please enter an email"],
        select: true,
    },

    username: {
        

        leetcode: {
            type:String,
            default: ""
        },
        gfg: {
            type:String,
            default: ""
        }

    },

    branch: {
        type: String,
        required: [true, "Please enter branch of the candidate"],
    },

    section: {
        type: String,
        required: [true, "Please enter the section of the candidate"],
    },

    year: {
        type: Number,
        required: [true, "Please enter the year of the candidate"],
    },

    easy: {
        type: Number,
        default: 0,
    },

    medium: {
        type: Number,
        default: 0,
    },

    hard: {
        type: Number,
        default: 0,
    },
    
    score: {
        type: Number,
        default: 0,
    },

});

module.exports = mongoose.model("Post", postSchema);