const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: null,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING(100),
    allowNull: null,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Product };
