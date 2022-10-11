const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const Password = sequelize.define("password", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = { Password };
