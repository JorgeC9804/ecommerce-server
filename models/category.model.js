const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const Category = sequelize.define("category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  nameCategory: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = { Category };
