//require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
//require("./db/conn");
const cors = require("cors");
const router = require("./Routes/EmployeeRoutes");
//const PORT = process.env.PORT || 6010


app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("./public/files"));

app.use(router);


mongoose.connect("mongodb+srv://it22257840:garbage23@cluster0.of6amql.mongodb.net/jwelrymanagement?retryWrites=true&w=majority")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));

