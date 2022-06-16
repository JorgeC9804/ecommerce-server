const { app } = require("./app");

// utils
const { sequelize } = require("./util/database");

// models
const { initModels } = require("./util/initModels");

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

app.listen(3000, () => {
  console.log("Listen port 3000");
});
