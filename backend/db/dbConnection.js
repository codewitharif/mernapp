const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    console.log("connected to mongodb");
  } catch (error) {
    console.log("connnection error wiTh mongodb");
  }
};
module.exports = connectDB;
