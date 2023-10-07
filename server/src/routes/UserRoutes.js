const express = require("express");
const router = express.Router();
const { signup, signin, requireSignin } = require("../controllers/users");
const { signinAdmin } = require("../controllers/admin");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/validate");

router.post("/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/profile", requireSignin, (req, res) => {
  res.json({ user: "profile" });
});
// admin routes
router.post("/admin/signin",validateSigninRequest,isRequestValidated,signinAdmin);
// router.post("/admin/signup",signupAdmin);

module.exports = router;
