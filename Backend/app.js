//x9qAtjBDkXaaCL1P

const express = require("express");
const mongoose = require("mongoose");
const routerCus = require("./Route/CusRoutes");

const app = express(); 
const cors = require("cors");


//middleweare DB connection
app.use(express.json()); //to send data (insert part)
app.use(cors());
app.use("/cuss",routerCus);




mongoose.connect("mongodb+srv://admin:x9qAtjBDkXaaCL1P@cluster0.g5sxeum.mongodb.net/")
.then(()=> console.log("connect to mongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));


