const Product = require("../models/Product");
const slugify = require("slugify");

exports.createProduct = (req, res) => {
  res.json({ file: req.files });
};
