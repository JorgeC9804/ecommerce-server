// models
const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");
const { UserCart } = require("../models/userCart.model");

// GET ALL PRODUCTS IN CART
exports.getAllProductsUserCart = async (req, res, next) => {
  const { userId } = req.body;

  console.log(req.body);

  const userCart = await UserCart.findAll({
    where: { userId },
    include: [{ model: Product, include: [{ model: Category }] }],
  });

  res.status(202).json({
    status: "success",
    data: { userCart },
  });
};

// CREATE PRODCUT IN CART
exports.createProduct = async (req, res, next) => {
  const { productId, userId } = req.body;

  console.log(req.body);

  if (!productId || !userId) {
    return res.status(500).json({
      status: "error",
      mesage: "product or user not found",
    });
  }

  const userCart = await UserCart.create({
    productId,
    userId,
  });

  res.status(202).json({
    status: "success",
    data: {
      userCart,
    },
  });
};

// DELETE ONE PRODUCT IN CART
exports.deleteProductUserCart = async (req, res, next) => {};
