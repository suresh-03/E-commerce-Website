const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImages: [{ img: { type: String } }],
    offers: {
      type: Number,
    },
    reviews: [
      {
        UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        type: String,
      },
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
