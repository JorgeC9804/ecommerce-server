const express = require("express");
const {
  getAllProductsUserCart,
  getProductUserCartByID,
  createProduct,
  deleteProductUserCart,
} = require("../controllers/userCart.controllers");

const route = express.Router();

route.post("/cart", getAllProductsUserCart);

route.post("/", createProduct);

route.delete("/:id", deleteProductUserCart);

module.exports = { userCartRouter: route };
