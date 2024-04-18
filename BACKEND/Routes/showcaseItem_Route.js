//importing pacckages and tilities
const express=require("express");
const Router=express.Router();

const showCItem=require("../controllers/showcaseProducts_controller");


Router.post("/addtoShow",showCItem.addproductToShowcase);
Router.get("/fetchAll",showCItem.getAllShowcase);
Router.get("/fetch/:pid",showCItem.gettShowItembyID);
Router.delete("/delete/:pid",showCItem.deleteShowcaseItem);
Router.put("/update/:pid",showCItem.updateshowcase);


module.exports=Router;
