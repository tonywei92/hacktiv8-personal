const Sequelize = require("sequelize");
const config = require("./config/config.json");
const sequelize = new Sequelize(config.development);

sequelize
  .authenticate()
  .then(() => console.log("connected"))
  .catch(err => console.log(err));

module.exports = sequelize;
