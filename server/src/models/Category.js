const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
