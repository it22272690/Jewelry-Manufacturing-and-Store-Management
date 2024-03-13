//pass=bnt9hDq93LfdKMml
const express=require("express");
const mongoose=require("mongoose");
const router=require("./Routes/UserRoutes");
const router1=require("./Routes/OwnerRoutes");

const app=express();

//Middleware
app.use(express.json());
app.use("/users",router);
app.use("/owner",router1);

mongoose.connect("mongodb+srv://it22272690:bnt9hDq93LfdKMml@cluster0.ivjcibu.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));