const express = require("express");
const {createPost, updatePost, getAllPosts, deletePost, userData} = require("../controllers/posts");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.get("/getPosts", getAllPosts);
router.route("/createPost").post(isAuthenticated, createPost);
router.route("/updatePost").post(isAuthenticated, updatePost);
router.route("/deletePost").post(isAuthenticated, deletePost); 
router.route("/userData").get(isAuthenticated, userData);

module.exports = router;