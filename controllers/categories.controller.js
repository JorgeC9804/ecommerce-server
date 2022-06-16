const { Category } = require("../models/category.model");

const catchAsycn = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

exports.getCategories = catchAsycn(async (req, res, next) => {
  const category = await Category.findAll();

  res.status(200).json({
    status: "success",
    data: {
      category,
    },
  });
});

exports.getCategoryById = async (req, res, next) => {
  const { id } = req.params;

  const category = await Category.findOne({ where: { id } });

  if (!category) {
    return res.status(502).json({
      status: "error",
      message: "id do not exist",
    });
  }
};

exports.createCategory = async (req, res, next) => {
  const { nameCategory } = req.body;

  if (!nameCategory) {
    return res.status(404).json({
      status: "error",
      message: "provably name categoty. Must provide a valid name category",
    });
  }

  const category = await Category.create({
    nameCategory,
  });

  return res.status(202).json({
    status: "success",
    data: {
      category,
    },
  });
};

exports.deleteCategory = async (req, res, next) => {};
