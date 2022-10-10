const { Product } = require("../models/product.model");
const { Category } = require("../models/category.model");
const { Icons } = require("../models/icons.model");
const { User } = require("../models/user.model");

// utils
const { catchAsync } = require("../util/catchAsync");
const { AppError } = require("../util/AppError");

exports.getProducts = async (req, res, next) => {
  const products = await Product.findAll({
    include: [
      {
        model: Category,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: User,
        attributes: {
          exclude: [
            "email",
            "password",
            "admin",
            "status",
            "createdAt",
            "updatedAt",
          ],
        },
      },
      {
        // where: { id: 1 },
        model: Icons,
        attributes: {
          where: { userId: 1 },
        },
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "categoryId", "userId"],
    },
  });

  res.status(202).json({
    status: "success",
    data: products,
  });
};

exports.getProductsById = async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findOne({ where: { id } });

  if (!product) {
    return res.status(500).json({
      status: "error",
      message: "product not found",
    });
  }

  res.status(202).json({
    status: "success",
    data: {
      product,
    },
  });
};

exports.createProduct = catchAsync(async (req, res, next) => {
  const { nameProduct, price, quantity, categoryId, userId } = req.body;
  console.log(req.body);

  /*if (!nameProduct || !price || !quantity || !categoryId || !userId) {
    return next(new AppError(500, "no se bien"));
  }*/

  const product = await Product.create({
    nameProduct,
    price,
    quantity,
    categoryId,
    userId,
  });

  res.status(202).json({
    status: "success",
    data: {
      product,
    },
  });
});
