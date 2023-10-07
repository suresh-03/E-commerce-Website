const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY);
  next();
};
