const Post = require("../models/Post");
const {getLeetcodeUserData, getGFGUserData} = require("../helpers/postsHelper");
//import axios
const axios = require('axios');

const NUMBER_OF_USERS_PER_PAGE = 10;

exports.createPost = async(req, res) =>{

    try {

        //code to check if code already exists
        // const doesExist = await Post.findOne({email: req.body.email});

        // if(doesExist){
        //     return res.status(400).json({
        //         success: false,
        //         message: "User already exists",
        //     });
        // }

        const lcusername = req.body.leetcode,
                gfgusername = req.body.gfg;
        
        if(!lcusername && !gfgusername){
            return res.status(400).json({
                success: false,
                message: "Please enter atleast one username",
            });
        }

        let lcData, gfgData;


       
        const lcUrl = `http://localhost:4000/api/v1/userData?website=Leetcode&username=${lcusername}`,
            gfgUrl = `http://localhost:4000/api/v1/userData?website=GFG&username=${gfgusername}`;

        //set jwt token in request header in axios

        try {

            if(lcusername)
            lcData = await axios.get(lcUrl, {
                headers: {
                    Cookie: `token=${req.cookies.token}`,
                }
            });
    
        } catch (error) {

            return res.status(404).json({
                success: false,
                message: "Invalid Leetcode Username",
            });
            
        }

        try {
            if(gfgusername)
            gfgData = await axios.get(gfgUrl, {
                headers: {
                    Cookie: `token=${req.cookies.token}`,
                }
            });
      
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: "Invalid GFG Username",
            })
        }
        
        
        const postData = {

            name: req.body.name,
            email: req.body.email,
            username: {
                leetcode: req.body.leetcode,
                gfg: req.body.gfg,
            },
            easy: lcData?.data?.data?.easy + gfgData?.data?.data?.easy,
            medium: lcData?.data?.data?.medium + gfgData?.data?.data?.medium,
            hard: lcData?.data?.data?.hard + gfgData?.data?.data?.hard,
            score: lcData?.data?.data?.score + gfgData?.data?.data?.score,
            branch: req.body.branch,
            section: req.body.section,
            year: req.body.year,

        };


        console.log("post data", postData);

        const post = await Post.create(postData);

        res.status(201).json({
            success: true,
            post: post,
        });


    } catch (error) {

        res.status(400).json({
            success: false,
            error: error,
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

        const {page, branch, year, section, searchQuery} = req.query;
        const regex = new RegExp(searchQuery, 'i');
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

        if(searchQuery){
            conditions.name = { $regex: regex };
        }

        const posts = await Post
                            .find(conditions)
                            .sort({score: -1})
                            .limit(NUMBER_OF_USERS_PER_PAGE)
                            .skip((page-1)*NUMBER_OF_USERS_PER_PAGE);

        //getting the total number of documents which follow our conditions
        const count = await Post.countDocuments(conditions);

        res.status(200).json({
            success: true,
            posts,
            count
            
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

            const problemsArray = userData?.data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
            const sovledProblems = problemsArray[0]?.count,
                    easy = problemsArray[1]?.count,
                    medium = problemsArray[2]?.count,
                    hard = problemsArray[3]?.count,
                    score = easy*1 + medium*3 + hard*5;

            return res.status(200).json({
                status: 200,
                data: {
                    sovledProblems,
                    easy,
                    medium,
                    hard,
                    score,
                }
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

            let problemsObject = userData?.data;

            problemsObject.totalProblems = problemsObject.school + problemsObject.basic + problemsObject.easy + problemsObject.medium + problemsObject.hard;
            problemsObject.score = problemsObject.school*0.5 + problemsObject.easy*1 + problemsObject.medium*3 + problemsObject.hard*5;
            return res.status(200).json({
                status: 200,
                data: problemsObject,
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