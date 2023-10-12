const Product = require("../models/Product");
const slugify = require("slugify");

exports.createProduct = (req, res) => {
  let productImages = [];
  if (req.files.length > 0) {
    productImages = req.files.map((file) => {
      return { img: file.filename };
    });
  }
  const { name, price, quantity, description, reviews, category } = req.body;
  const new_product = new Product({
    name,
    slug: slugify(name),
    price,
    quantity,
    description,
    reviews,
    category,
    createdBy: req.user._id,
    productImages,
  });

  new_product
    .save()
    .then(() => {
      res.status(200).json({ new_product });
    })
    .catch((err) => res.json({ err }));
};
