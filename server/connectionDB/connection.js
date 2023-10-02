const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB(){
    await mongoose.connect(process.env.MONGO_DB).then(() => {
        console.log("database connected");
    }).catch((e) => {
        console.log(e.name);
    })
}

module.exports = connectDB;