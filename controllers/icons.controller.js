// model
const { Icons } = require("../models/icons.model");
const { Product } = require("../models/product.model");

// utils
const { catchAsync } = require("../util/catchAsync");
const { AppError } = require("../util/AppError");

exports.activateSavingTastes = catchAsync(async (req, res, next) => {
  const { later, love, userId, productId } = req.body;

  if ((!userId, !productId)) {
    return next(new AppError(400, "without data"));
  }

  const response = await Icons.create({
    later,
    love,
    userId,
    productId,
  });

  console.log("response");

  res.status(202).json({
    status: "success nel prro",
    response,
  });
});

exports.getTasteUserID = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const userId = id;

  /**
   * quiero me muestres todo
   */
  const response = await Icons.findAll({
    where: { userId },
    include: [{ model: Product }],
  });

  res.status(200).json({
    status: "success",
    data: { response },
  });
});

exports.updateStatus = catchAsync(async (req, res, next) => {
  const { productId, response } = req.body;
  let result = null,
    changeStatus = null;

  const icon = await Icons.findOne({
    where: { productId },
  });

  switch (response) {
    case "LATER":
      changeStatus = icon.later === "desactive" ? "active" : "desactive";
      result = await icon.update({ later: changeStatus });
      break;
    case "LOVE":
      changeStatus = icon.love === "desactive" ? "active" : "desactive";
      result = await icon.update({ love: changeStatus });
      break;
    default:
      console.log("error");
  }

  res.status(200).json({
    status: "success",
    data: { result },
  });
});
