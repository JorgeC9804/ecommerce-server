const express = require("express");

// controllers
const {
  getUsers,
  getUserId,
  createUser,
  loginUser,
} = require("../controllers/users.controller");

// auth
const { validateSession } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", validateSession, getUserId);

router.post("/", createUser);

router.post("/login", loginUser);

module.exports = { userRouter: router };

/**
 * Recuerda que este router solo pertenece al a este archivo
 * y guardamos la informacion adquirida aqui en una
 * propiedad llamada userRourter
 */
