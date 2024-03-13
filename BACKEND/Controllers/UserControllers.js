const User=require("../Model/UserModel");
//data display
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

//data insert
const addUsers=async(req,res,next)=>{

    const{name,DOB,address,phoneNumber,email,username,password}=req.body;

    let users;

    try{
        users=new User({name,DOB,address,phoneNumber,email,username,password});
        await users.save();
    }catch(err){
        console.log(err);
    }
    //not insert users
    if(!users){
        return res.status(404).json({message:"unable to add users"});
    }
    return res.status(200).json({users})
};
//Get by Id
const getById=async(req,res,next)=>{
    const id=req.params.id;

    let user;

    try{
        user=await User.findById(id);
    }catch(err){
        console.log(err);
    }
    //not available users
    if(!user){
        return res.status(404).json({message:"User Not Found"});
    }
    return res.status(200).json({user});

}
//update User Details

const updateUser=async(req,res,next)=>{
    const id=req.params.id;
    const{name,DOB,address,phoneNumber,email,username,password}=req.body;

    let users;

    try{
        users=await User.findByIdAndUpdate(id,
         {name:name,DOB:DOB,address:address,phoneNumber:phoneNumber,email:email,username:username,password:password});
         users=await users.save();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"Unable to update user details"});
    }
    return res.status(200).json({users});
};

//Delete User Details
const deleteUser=async(req,res,next)=>{
    const id=req.params.id;

    let user;
    try{
        user =await User.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"Unable to delete user details"});
    }
    return res.status(200).json({user});
};
exports.getAllUsers=getAllUsers;
exports.addUsers=addUsers;
exports.getById=getById;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;
