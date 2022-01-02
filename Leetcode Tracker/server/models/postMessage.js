import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    name : String,
    username : String,
    gender : String,
    Medium : String,
    Easy : String,
    Hard : String,
 

 

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;