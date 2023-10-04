const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// exports.signupAdmin = async (req, res) => {
//     const user = await User.findOne({ email: req.body.email });
//     if (user) {
//       return res.status(400).json({
//         message: "admin already exists!",
//       });
//     }
  
//     const { firstname, lastname, email, password} = req.body;
  
//     const _user = new User({
//       firstname,
//       lastname,
//       email,
//       password,
//       username: Math.random().toString(),
//       role:"admin"
//     });
  
//     _user.save(
//       res.status(201).json({
//         message: "Successfully Registered!",
//       })
//     );
//   };


exports.signinAdmin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (user.authenticate(req.body.password) && user.role === "admin") {
      const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      const { _id, firstname, lastname, fullname, email, role } = user;
      return res.status(200).json({
        token,
        user: { _id, firstname, lastname, fullname, email, role },
      });
    }
  }
  res.json({
    message: "admin not found!",
  });
};
