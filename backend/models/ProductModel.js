import mongoose from "mongoose";

const schema = new mongoose.Schema({
  ProductId: {
    type: Number,
    require: true,
  },
  Quantity: {
    type: String,
    require: true,
  },
  BrandId: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  CategoryId: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Description: {
    type: String,
    require: true,
  },
  Price: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
});

export const ProductModel = mongoose.model("products", schema);
