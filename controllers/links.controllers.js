// models
const { Links } = require("../models/links.model");

// utils
const { catchAsync } = require("../util/catchAsync");
const { AppError } = require("../util/AppError");

exports.getLinks = async (req, res, next) => {
  const links = await Links.findAll();

  res.status(200).json({
    status: "success",
    data: links,
  });
};

exports.createLink = catchAsync(async (req, res, next) => {
  const { link, category, linkname, password } = req.body;

  console.log(req.body);

  if (!link || !category || !linkname) {
    return next(
      AppError(500, "Must provide a valid nodejs, reactjs and outstandinglink")
    );
  }

  const createLink = await Links.create({
    link,
    category,
    linkname,
    password,
  });

  res.status(202).json({
    status: "success",
    data: createLink,
  });
});
