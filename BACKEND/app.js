//pass=bnt9hDq93LfdKMml
const express=require("express");
const mongoose=require("mongoose");
const router=require("./Routes/UserRoutes");

const app=express();

//Middleware
app.use("/users",router);

mongoose.connect("mongodb+srv://it22272690:bnt9hDq93LfdKMml@cluster0.ivjcibu.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));