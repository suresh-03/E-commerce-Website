const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/users");
const { signinAdmin } = require("../controllers/admin");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/validate");
const { requireSignin } = require("../middlewares/middleware");

router.post("/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/profile", requireSignin, (req, res) => {
  res.json({ user: "profile" });
});
// admin profile
router.post("/admin/profile", requireSignin, (req, res) => {
  res.json({ admin: "profile" });
});
// admin routes
router.post(
  "/admin/signin",
  validateSigninRequest,
  isRequestValidated,
  signinAdmin
);
// router.post("/admin/signup",signupAdmin);

module.exports = router;
