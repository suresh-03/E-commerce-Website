const express = require("express");
const { requireSignin, adminMiddleware } = require("../middlewares/middleware");
const { createProduct } = require("../controllers/product");
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    const id = shortid.generate();
    cb(null, id + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productImages"),
  createProduct
);

module.exports = router;
