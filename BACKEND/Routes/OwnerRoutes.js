const express=require("express");
const router=express.Router();
//Insert Model
const Owner=require("../Model/OwnerModel")
//Insert Owner Controller
const OwnerController=require("../Controllers/OwnerControllers");


router.get("/",OwnerController.getOwner);
router.post("/",OwnerController.addOwner);
router.get("/:id",OwnerController.getById);
router.put("/:id",OwnerController.updateOwner);
router.delete("/:id",OwnerController.deleteOwner);
//export
module.exports=router;