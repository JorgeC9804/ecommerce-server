const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

// model
const { User } = require("../models/user.model");

// utils
const { catchAsync } = require("../util/catchAsync");
const { AppError } = require("../util/AppError");

dotenv.config({ path: "./config.env" });

// GET ALL USERS
exports.getUsers = catchAsync(async (req, res, next) => {
  /**
   * es momento de relacionar los datos
   * SELECT * FROM users
   * JOIN products ON user.id === product.userId
   *
   * tal cual vamos a incluir el modelo Product
   * inclide: [{ model }]
   *
   * se establece un arreglo para poder ingresar no solo un modelo, si no mas de uno
   */

  const users = await User.findAll({
    where: { status: "active" },
    attributes: { exclude: ["password"] },
  });

  const allUsers = User.findAll()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  res.status(200).json({
    status: "success",
    data: users,
  });
});

// GET ONE USER BUT ID
exports.getUserId = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: { id },
  });

  if (!user) {
    return next(new AppError(404, "user not found"));
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

// CREATE ONE USER
exports.createUser = catchAsync(async (req, res, next) => {
  const { name, email, username, password } = req.body;

  let admin = "user";

  if (!name || !email || !username || !password) {
    return next(new AppError(500, "propertie undefined"));
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  if ((await User.findAll()).length === 0) {
    admin = "admin";
  }

  const createUser = await User.create({
    name,
    email,
    username,
    password: hashedPassword,
    admin: admin,
  });

  createUser.password = undefined;

  res.status(201).json({
    status: "succes",
    data: { createUser },
  });
});

// LOG USER
exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email, status: "active" } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError(404, "credentials are invalid"));
  }

  const token = jwt.sign({ id: user.id }, `${process.env.JWT_SECRET}`, {
    expiresIn: "1h",
  });

  user.password = undefined;

  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});
