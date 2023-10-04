const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/users");
const { signinAdmin } = require("../controllers/admin");


router.post("/signin", signin);
router.post("/signup", signup);
// admin routes
router.post("/admin/signin",signinAdmin);
// router.post("/admin/signup",signupAdmin);

module.exports = router;
