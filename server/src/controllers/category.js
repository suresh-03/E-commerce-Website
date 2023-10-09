const Category = require("../models/Category");
const slugify = require("slugify");

exports.createCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  const cat = new Category(categoryObj);
  cat
    .save()
    .then((category) => {
      res.status(200).json({ category });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

exports.getCategories = async (req, res) => {
  const cat = await Category.find()
    .exec()
    .then((categories) => {
      res.status(200).json({ categories });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
