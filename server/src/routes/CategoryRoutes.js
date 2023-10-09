const { createCategory, getCategories } = require("../controllers/category");
const express = require("express");
const { requireSignin, adminMiddleware } = require("../middlewares/middleware");
const router = express.Router();

router.post("/category/create", requireSignin, adminMiddleware, createCategory);
router.get("/category/getCategory", getCategories);

module.exports = router;
