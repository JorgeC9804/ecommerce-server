const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { promisify } = require("util");

dotenv.config({ path: "./config.env" });

// utils
const { catchAsync } = require("../util/catchAsync");
const { AppError } = require("../util/AppError");

// models
const { User } = require("../models/user.model");

exports.validateSession = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log(token);
  }

  if (!token) {
    return next(new AppError(401, "credetial not valid"));
  }

  const decodedToken = await promisify(jwt.verify)(
    token,
    `${process.env.JWT_SECRET}`
  );

  const user = await User.findOne({
    where: { id: decodedToken.id, status: "active" },
    attributes: { exclude: ["password"] },
    // columnas que queremos que incluya o que excluya
    // ['id', 'etc']
  });

  if (!user) {
    // si el usuario no existe buscado mediante el id del token
    return next(new AppError(401, "This user is no longer available"));
  }

  next();
});
