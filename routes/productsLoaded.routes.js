const express = require("express");

// controllers
const {
  getAllLoadedProducts,
  loadedProducts,
} = require("../controllers/productLoaded.controller");

const router = express.Router();

router.get("/:userId/:productId", getAllLoadedProducts);

router.post("/", loadedProducts);

module.exports = { productsLoadedRouter: router };
