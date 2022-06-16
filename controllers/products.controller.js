const { Product } = require("../models/product.model");
const { Category } = require("../models/category.model");

exports.getProducts = async (req, res, next) => {
  const products = await Product.findAll({
    include: [{ model: Category }],
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

exports.createProduct = async (req, res, next) => {
  const { productName, categoryId, userId } = req.body;
  console.log(req.body);

  const product = await Product.create({
    productName,
    categoryId,
    userId,
  });

  res.status(202).json({
    status: "success",
    data: {
      product,
    },
  });
};
