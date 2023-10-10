const express = require("express");
const cors = require("cors");
// const body_parser = require("body-parser");
const env = require("dotenv");

env.config();

const app = express();
app.use(cors());
app.use(express.json());
// app.use(body_parser);

// Database connection
const connectionDB = require("../connectionDB/connection");
connectionDB();

// importing user routes
const UserRoutes = require("./routes/UserRoutes");
const CategoryRoutes = require("./routes/CategoryRoutes");
const productRoutes = require("./routes/ProductRoutes");

// using api as default
app.use("/api", UserRoutes);
app.use("/api", CategoryRoutes);
app.use("/api", productRoutes);

app.listen(process.env.PORT_NO, () => {
  console.log(`running in port ${process.env.PORT_NO}`);
});
