// utils
const { catchAsync } = require("../util/catchAsync");
const { AppError } = require("../util/AppError");

// models
const { LoadedProducts } = require("../models/productLoaded.model");
const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");

/**
 * 1 - Enviar todos los productos subidos del usuario, solo necesito
 *     el userId para que me muestre solo los productos de ese usuario
 * 2 - Crear filas donde guarden la informacion de quien
 *     subio inicialmente el producto
 *     # userId | productId
 *     # de esta forma tendremos un modelo en donde se haga referencia
 *       al usuario que subio el producto, como al producto subido por
 *       por ese usuario
 *
 */

exports.getAllLoadedProducts = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  if (!userId) {
    return next(
      new AppError(
        404,
        "The request could not be understood by the server due to malformed syntax"
      )
    );
  }

  const getAllProducts = await ProductLoaded.findAll({
    where: { userId }, // id | userId | productID
  });

  if (!getAllProducts) {
    return next(new AppError(400, "bad request"));
  }

  res.status(200).json({
    status: "success",
    data: getAllProducts,
  });
});

exports.loadedProducts = catchAsync(async (req, res, next) => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    return next(
      new AppError(
        400,
        "The request could not be understood by the server due to malformed syntax"
      )
    );
  }

  const loadedProducts = await LoadedProducts.create({
    userId,
    productId,
  });

  if (!loadedProducts) {
    return next(new AppError(400, "bad request"));
  }

  res.status(200).json({
    status: "success",
    data: loadedProducts,
  });
});
