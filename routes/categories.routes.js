const express = require("express");

const router = express.Router();

const {
  getCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
} = require("../controllers/categories.controller");

router.get("/", getCategories);

router.get("/:id", getCategoryById);

router.post("/", createCategory);

router.delete("/", deleteCategory);

module.exports = { categoriesRouter: router };
