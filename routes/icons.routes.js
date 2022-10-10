const express = require("express");

// controllers
const {
  activateSavingTastes,
  getTasteUserID,
  updateStatus,
} = require("../controllers/icons.controller");

const router = express.Router();

router.get("/:id", getTasteUserID);

router.post("/", activateSavingTastes);

router.patch("/", updateStatus);

module.exports = { iconsRouter: router };
