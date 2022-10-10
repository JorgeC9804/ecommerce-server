const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const Icons = sequelize.define("icons", {
  // add object
  // el id es unico, ya que es el id que representa la fila
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  later: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: "desactive",
  },
  love: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: "desactive",
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

module.exports = { Icons };
