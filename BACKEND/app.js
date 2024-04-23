//password SksYpipUUkLVaaZ4

require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const routerM = require("./Routes/MaterialRoutes"); //single dot for the path

//new
const routerP = require("./Routes/ProductRoutes"); //single dot for the path
const routerS = require("./Routes/SupplierRoutes");
const routerR = require("./Routes/ReserveRoutes");
const routerMO = require("./Routes/MaterialoutRoutes");
const routerMI = require("./Routes/MaterialinRoutes");

const app = express();
const cors = require('cors');

//Middleware
/*app.use("/",(req,res,next)=>{
    res.send("Thimalka, It's working!");
})*/
//above code worked!

app.use(express.json());
app.use(cors());
app.use("/materials",routerM);
//above is the one which is checked by postman; it worked!

//new
app.use("/products",routerP);
app.use("/suppliers",routerS);
app.use("/reserves",routerR);
app.use("/materialouts",routerMO);
app.use("/materialins",routerMI);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

