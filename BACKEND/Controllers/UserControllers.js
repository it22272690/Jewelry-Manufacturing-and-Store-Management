const User=require("../Model/UserModel");

const getAllUsers=async(req, res, next)=>{
    let Users;
    //Get all users
    try{
        users=await User.find();
    }catch(err){
        console.log(err);
    }
    //not found
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    //Display allusers
    return res.status(200).json({users});
};

exports.getAllUsers=getAllUsers;