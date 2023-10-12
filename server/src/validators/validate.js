const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
  check("firstname").notEmpty().withMessage("enter the firstname"),
  check("lastname").notEmpty().withMessage("enter the lastname"),
  check("email").notEmpty().withMessage("email should not be empty"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password should be atleast 8 characters"),
];

exports.validateSigninRequest = [
  check("email").notEmpty().withMessage("email should not be empty"),
  //   check("password")
  //     .isLength({ min: 8 })
  //     .withMessage("password should be atleast 8 characters"),
];

exports.isRequestValidated = (req, res, next) => {
  if (validationResult(req).array().length > 0) {
    const error = validationResult(req).array()[0].msg;
    return res.status(400).json({ error });
  }
  next();
};
