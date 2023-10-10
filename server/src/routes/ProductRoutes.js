const express = require("express");
const { requireSignin, adminMiddleware } = require("../middlewares/middleware");
const { addProduct } = require("../controllers/product");
const router = express.Router();

router.post("/product/addProduct", requireSignin, adminMiddleware, addProduct);

module.exports = router;
