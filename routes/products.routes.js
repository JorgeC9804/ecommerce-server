const express = require("express");
const { validateSession } = require("../middleware/auth.middleware");
const router = express.Router();

const {
  getProducts,
  getProductsById,
  createProduct,
} = require("../controllers/products.controller");

router.get("/", getProducts);

router.get("/:id", getProductsById);

router.post("/", createProduct);

module.exports = { productsRouter: router };
