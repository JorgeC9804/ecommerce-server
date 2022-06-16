//Models
const { User } = require("../models/user.model");
const { Product } = require("../models/product.model");
const { Category } = require("../models/category.model");
const { UserCart } = require("../models/userCart.model");

const initModels = () => {
  // one user <------> one cart
  User.hasOne(UserCart);
  UserCart.belongsTo(User);

  // one Category <------> much Products
  Category.hasMany(Product);
  Product.belongsTo(Category);

  // one Product <------> one cart
  Product.hasOne(UserCart);
  UserCart.belongsTo(Product);
};

module.exports = { initModels };
