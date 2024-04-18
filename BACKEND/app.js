//pass=bnt9hDq93LfdKMml

const express=require("express");
const mongoose=require("mongoose");
const router=require("./Routes/UserRoutes");
const adminrouter=require("./Routes/admin/UserRoutes");
const cors=require("cors");
const app=express();


//Middleware
app.use(cors());
app.use(express.json());
app.use("/users",router);
app.use("/users",adminrouter);



mongoose.connect("mongodb+srv://it22272690:bnt9hDq93LfdKMml@cluster0.ivjcibu.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));
