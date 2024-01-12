const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    isNew: {
      type: Boolean,
      required: true,
    },
    isHot: {
      type: Boolean,
      required: true,
    },
    onSale: {
      type: Boolean,
      required: true,
    },
    popular: {
      type: Boolean,
      required: true,
    },
    imageURL: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
