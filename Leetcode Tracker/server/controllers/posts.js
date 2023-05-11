const Post = require("../models/Post");
const {getLeetcodeUserData, getGFGUserData} = require("../helpers/postsHelper");

const NUMBER_OF_USERS_PER_PAGE = 5;

exports.createPost = async(req, res) =>{

    try {
        
        const postData = {

            name: req.body.name,
            email: req.body.email,
            username: {
                leetcode: req.body.leetcode,
                gfg: req.body.gfg,
            },
            easy: req.body.easy,
            medium: req.body.medium,
            hard: req.body.hard,
            score: req.body.score,
            branch: req.body.branch,
            section: req.body.section,
            year: req.body.year,

        };

        const doesExist = await Post.findOne({email: req.body.email});

        if(doesExist){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        console.log("post data", postData);

        const post = await Post.create(postData);

        res.status(201).json({
            success: true,
            post: post,
        });


    } catch (error) {

        res.status(400).json({
            success: false,
            error: error.message,
        })
        
    }

};

exports.updatePost = async(req, res) =>{
    try {

        const post = await Post.findOne({email: req.body.email});

        if(!post){
            return res.status(404).json({
                success: false,
                message: "No such User Post found",
            });
        }

        const {newEmail, name, leetcode, gfg, easy, medium, hard, score, branch, section, year} = req.body;

        if(newEmail)
            post.email = newEmail;

        if(name)
            post.name = name;

        if(leetcode)
            post.username.leetcode = leetcode;

        if(gfg)
            post.username.gfg = gfg;

        if(easy)
            post.easy = easy;

        if(medium)
            post.medium = medium;

        if(hard)
            post.hard = hard;

        if(score)
            post.score = score;

        if(branch)
            post.branch = branch;
        
        if(year)
            post.year = year;
        
        if(section)
            post.section = section;

        await post.save();

        //resoponse PUT message that doesn't show cors error
        res.status(200).json({
            withCredentials: true,
            include: true,
            success: true,
            message: "User Data updated successfully",
            post,
        });


        
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error.message,
        });
    }
};

exports.getAllPosts = async(req, res) =>{

    try {

        const {page, branch, year, section} = req.query;

        //find all the posts of the given branch, year or section
        //preparing conditions for the query
        const conditions = {};

        if(branch){
            conditions.branch = branch;
        }

        if(year){
            conditions.year = year;
        }

        if(section){
            conditions.section = section;
        }

        const posts = await Post
                            .find(conditions)
                            .sort({score: -1})
                            .limit(NUMBER_OF_USERS_PER_PAGE)
                            .skip((page-1)*NUMBER_OF_USERS_PER_PAGE);

        res.status(200).json({
            success: true,
            posts,
        });

        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }

};

exports.deletePost = async(req, res) =>{

    try {
        
        const post = await Post.findOne({email: req.body.email});

        if(!post){` `
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        await post.remove();

        res.status(200).json({
            success: true,
            message: "Post removal successfull",
        });

    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message,
        });
    }

}

exports.userData = async(req, res) =>{

    try{

        const {website, username} = req.query;

        if(!website || !username){
            return res.status(400).json({
                success: false,
                message: "Invalid request",
            });
        }

        let userData = null;
        if(website==='Leetcode'){

            userData = await getLeetcodeUserData(username);

            //if username is wrong
            if(userData.status===404){
                return res.status(404).json({
                    status: 404,
                    message: userData.message,
                });
            }

            return res.status(200).json({
                status: 200,
                userData:userData.data.data,
            });

        }
        else if(website==='GFG'){

            userData = await getGFGUserData(username);

            if(userData.status===404){
                return res.status(404).json({
                    status: 404,
                    message: userData.message,
                });
            }

            return res.status(200).json({
                status: 200,
                data: userData.data,
            });

        }       
        else{
            return res.status(400).json({
                status: 400,
                message: "Wrong website name",
            });
        }

    }
    catch(error){
        return res.status(400).json({
            status: 400,
            message: error.message,
        });
    }


}