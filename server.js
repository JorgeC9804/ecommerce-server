const { app } = require("./app");
const dotenv = require("dotenv");

// utils
const { sequelize } = require("./util/database");

// models
const { initModels } = require("./util/initModels");

dotenv.config({ path: "./config.env" });

sequelize
  .authenticate()
  .then(() => console.log("database authenticated"))
  .catch(error => console.log(error));

// models relations
initModels();

sequelize
  .sync()
  .then(() => console.log("database sync"))
  .catch(err => console.log(err));

// hosting heroku

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});

/**
 * despues de conectar github a heroku
 * toca la parte de crear la base de datos
 *
 * no se puede utlizar una base de datos local en
 * heroku, no existe local
 *
 * queremos conectarnos a una base de datos
 * de produccion
 */
