const Category = require("../models/Category");
const slugify = require("slugify");

function relatedCategory(categories, parentId = null) {
  const categoryList = [];
  let category;

  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      children: relatedCategory(categories, cate._id),
    });
  }
  return categoryList;
}

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
  await Category.find({})
    .exec()
    .then((categories) => {
      const categoryList = relatedCategory(categories);
      return res.status(200).json({ categoryList });
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
};
