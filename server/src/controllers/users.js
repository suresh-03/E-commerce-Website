const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      message: "user already exists!",
    });
  }

  const { firstname, lastname, email, password } = req.body;

  const _user = new User({
    firstname,
    lastname,
    email,
    password,
    username: Math.random().toString(),
  });

  _user.save(
    res.status(201).json({
      message: "Successfully Registered!",
    })
  );
};

exports.signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (user.authenticate(req.body.password) && user.role === "user") {
      const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      const { _id, firstname, lastname, fullname, email, role } = user;
      return res.status(200).json({
        token,
        user: { _id, firstname, lastname, fullname, email, role },
      });
    } else {
      return res.status(400).json({ message: "Incorrect Password!" });
    }
  }
  return res.json({
    message: "user not found! you have to register!",
  });
};
