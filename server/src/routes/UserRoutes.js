const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { signup, signin } = require("../controllers/users");

router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;
