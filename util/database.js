const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: "postgres",
  password: "1998",
  port: 5432,
  database: "ecommerce",
  dialect: "postgres",
  logging: false,
});

/**
 * huppdd
 */

module.exports = { sequelize };
