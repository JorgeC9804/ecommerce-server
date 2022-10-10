const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const LoadedProducts = sequelize.define("productLoaded", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { LoadedProducts };
