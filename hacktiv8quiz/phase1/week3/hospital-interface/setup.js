const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hospital.db");

db.serialize(() => {
  db.run(
    `
  CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT,
    name VARCHAR(64),
    position VARCHAR(64) NOT NULL,
    username VARCHAR(64) NOT NULL,
    password VARCHAR(128) NOT NULL
    )`,
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("create table command executed");
      }
    }
  );

  db.run(
    `
  CREATE TABLE IF NOT EXISTS patients (
    id INT AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    diagnosis VARCHAR(64) NOT NULL
    )`,
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("create table command executed");
      }
    }
  );
});
