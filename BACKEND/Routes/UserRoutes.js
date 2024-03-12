const express=require("express");
const router=express.Router();
//Insert Model
const User=require("../Model/UserModel")
//Insert User Controller
const UserController=require("../Controllers/UserControllers");


router.get("/",UserController.getAllUsers);
//export
module.exports=router;