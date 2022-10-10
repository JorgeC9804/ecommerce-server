//Models
const { User } = require("../models/user.model");
const { Product } = require("../models/product.model");
const { Category } = require("../models/category.model");
const { UserCart } = require("../models/userCart.model");
const { Icons } = require("../models/icons.model");
const { LoadedProducts } = require("../models/productLoaded.model");

const initModels = () => {
  // one user <------> one cart
  User.hasOne(UserCart);
  UserCart.belongsTo(User);

  // one Product <------> one cart
  Product.hasOne(UserCart);
  UserCart.belongsTo(Product);

  // one Category <------> much Products
  Category.hasMany(Product);
  Product.belongsTo(Category);

  // one Product <-------> much Icons
  Product.hasMany(Icons);
  Icons.belongsTo(Product);

  // one ProductUpload <------> one User
  // ProductLoaded.hasOne(User);
  // User.belongsTo(ProductLoaded);

  // one ProductUpload <------> one Product
  // ProductLoaded.hasOne(Product);
  // Product.belongsTo(ProductLoaded);

  // one User <------> one product
  User.hasOne(Product);
  Product.belongsTo(User);
};

module.exports = { initModels };
