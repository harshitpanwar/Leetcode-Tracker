import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name : String,
    username : String,
    gender : String,
    Medium : String,
    Easy : String,
    Hard : String,
 

});

const UserData = mongoose.model('userData', userSchema);

export default UserData;