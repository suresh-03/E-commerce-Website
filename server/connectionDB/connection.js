const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
      console.log(`Database Connected at mongodb:${mongoose.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
