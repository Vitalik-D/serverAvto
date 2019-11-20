const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductScheme = new Schema(
  {
    title: String,
    description: String,
    category: String,
    subCategory: Array,
    img: Array
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", ProductScheme);
module.exports = Product;
