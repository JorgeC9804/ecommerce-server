const express = require("express");

const router = express.Router();

const { getLinks, createLink } = require("../controllers/links.controllers");

router.get("/", getLinks);

router.post("/", createLink);

module.exports = { linkRouter: router };
