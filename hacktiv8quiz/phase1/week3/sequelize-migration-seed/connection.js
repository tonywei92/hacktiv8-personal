const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.db"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection success");
  })
  .catch(err => console.log(err));
