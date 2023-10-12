const express = require("express");
const { requireSignin, userMiddleware } = require("../middlewares/middleware");
const { addCartItem } = require("../controllers/cart");
const router = express.Router();

router.post("/user/cart/addToCart", requireSignin, userMiddleware, addCartItem);

module.exports = router;
