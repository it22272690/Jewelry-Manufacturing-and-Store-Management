//importing pacckages and tilities
const express=require("express");
const Router=express.Router();

const ReadyMItem=require("../controllers/readyMProducts_controller");


Router.post("/addRMitem",ReadyMItem.addReadyMproduct);
Router.get("/",ReadyMItem.getAllReadyMitems);
Router.get("/searchitem/:id",ReadyMItem.getReadyMadeProductById);

module.exports=Router;
