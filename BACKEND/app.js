// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const routerM = require("./Routes/MaterialRoutes");
const routerP = require("./Routes/ProductRoutes");
const routerS = require("./Routes/SupplierRoutes");
const routerR = require("./Routes/ReserveRoutes");
const routerMO = require("./Routes/MaterialoutRoutes");
const routerMI = require("./Routes/MaterialinRoutes");

// Create an instance of the express application
const app = express();
const cors = require("cors");

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Define routes for different resources
app.use("/materials", routerM);
app.use("/products", routerP);
app.use("/suppliers", routerS);
app.use("/reserves", routerR);
app.use("/materialouts", routerMO);
app.use("/materialins", routerMI);

// Connect to MongoDB database using environment variables
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    // Start the server and listen on the specified port
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
