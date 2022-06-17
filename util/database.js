const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const sequelize = new Sequelize({
  host: process.env.DB_HOST, // local host
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: process.env.DB,
  dialect: "postgres",
  logging: false,
  /*dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },*/
});
/**
 * conectar a la base de datos de heroku
 */

/**
 * huppdd
 */

/**
 *
 * Host ec2-52-71-23-11.compute-1.amazonaws.com
 * Database d6maqlacvh0j5k
 * User jrobttrelwvewe
 * Port 5432
 * Password 3370a70d7d9aed9e389fd093fbd8b5102674f8668efcd655d25cd4a893148b96
 */

module.exports = { sequelize };
