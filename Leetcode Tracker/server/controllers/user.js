const User = require("../models/User");

exports.register = async(req, res) =>{

    try{

        const {name, email, password} = req.body;
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        } 

        user = await User.create({
            name, email, password
        });

        const options = {expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true,};

        const token = await user.generateToken();

        res.status(201).cookie("token", token, options).
        json({
            success: true,
            user: user,
            token,
        });


    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

exports.login = async(req, res) =>{
    
    try {
        
        const {email, password} = req.body;

        // here we use the select method to select the password field from the user schema model 
        // as by default it is selected as select:false we have done it manually
        // because here we need to compare these passwords
        const user = await User.findOne({email}).select("+password");

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User does not exist",
            });
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Incorrect Password",
            });
        }

        const options = {expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true,};

        const token = await user.generateToken();

        res.status(200).cookie("token", token, options).
        json({
            success: true,
            user: user,
            token,
        });

    } 
    catch (error) {
        
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

exports.logout = async(req, res) => {
    try {

        res
            .status(200)
            .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true})
            .json({
                success: true,
                message: "Logged out",
            });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.myProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};