const express = require("express");
const {
  getUsers,
  postUsers,
  getIdUsers,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getIdUsers);

router.post("/", postUsers);

module.exports = { userRouter: router };

/**
 * Recuerda que este router solo pertenece al a este archivo
 * y guardamos la informacion adquirida aqui en una
 * propiedad llamada userRourter
 */
