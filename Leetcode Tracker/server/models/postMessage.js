import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    userName : String,
    easy : String,
    medium : String,
    hard : String,
    Acceptance : String,
    Total_Submissions : String,    

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;