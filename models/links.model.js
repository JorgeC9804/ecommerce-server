const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const Links = sequelize.define("links", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  link: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  linkname: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
});

/**
 * cada vez que se agregue un link, este va a
 * almacenarse en su respectiva columna, dejando vacio
 * las columnas restantes. Esto genera un error
 * que yo dise;e para no dejar espacios vacios, a esta
 * propiedad la llamamos allowNull. Puedp provocar
 * dos opciones,
 * 1. decirle a allowNull que permita los espacios
 * vacios
 * 2. mandar un string vacio con allowNull: false
 *
 * get each of the links, this captures the entire
 * database with some empty elements
 */

module.exports = { Links };
