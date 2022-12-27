const express = require("express");
const {createPost, updatePost, getAllPosts, deletePost} = require("../controllers/posts");

const router = express.Router();

router.get("/getPosts", getAllPosts);
router.post('/creatPost', createPost);
router.put("/updatePost", updatePost);
router.delete("/deletePost", deletePost);

module.exports = router;    