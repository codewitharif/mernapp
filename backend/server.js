const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./db/dbConnection");
const User = require("./db/user");

const app = express();

//middleware for parsing json
app.use(express.json());

//enable cors
app.use(cors());

//registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    console.log("registration successful...");
    res.status(201).json({ message: "registration successful..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "registration failed..." });
    console.log("registration failed...");
  }
});

//login

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "invalid username or password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "invalid username or password" });
    }
    res.status(200).json({ message: "login successfull" });
  } catch (error) {
    res.status(500).json({ error: "login failed" });
  }
});

connectDB();

app.listen(3000, () => {
  console.log("server is running on pot 3000");
});
