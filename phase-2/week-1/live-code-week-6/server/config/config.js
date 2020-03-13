require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "phase2_livecode_1",
    host: "localhost",
    dialect: "postgres"
  }
}
