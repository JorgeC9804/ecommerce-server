const express = require("express");

const router = express.Router();

const {
  getLinks,
  getLinkByID,
  createLink,
  deleteLink,
} = require("../controllers/links.controllers");

router.get("/", getLinks);

router.get("/:id", getLinkByID);

router.post("/", createLink);

router.delete("/", deleteLink);

module.exports = { linkRouter: router };
