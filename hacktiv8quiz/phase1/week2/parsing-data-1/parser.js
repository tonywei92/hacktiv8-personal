"use strict";
const fs = require("fs");
const path = require("path");
class Person {
  constructor(id, first_name, last_name, email, phone, created_at) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.created_at = Date.parse(created_at);
  }

  toString() {
    return `${this.id},${this.first_name},${this.last_name},${this.email},${
      this.phone
    },${new Date(this.created_at)}`;
  }
}

class PersonParser {
  constructor(file) {
    this._file = file;
    this._people = [];
    this._headers = [];
    this.parse();
  }

  parse() {
    const file = fs.readFileSync(path.join(__dirname, this._file), "utf8");
    const rows = file.split("\n");
    this._headers.push(
      rows[0][0],
      rows[0][1],
      rows[0][2],
      rows[0][3],
      rows[0][4],
      rows[0][5]
    );

    for (let i = 1; i < rows.length; i++) {
      const data = rows[i].split(",");
      this._people.push(
        new Person(data[0], data[1], data[2], data[3], data[4], data[5])
      );
    }
  }

  addPerson(id, first_name, last_name, email, phone, created_at) {
    this._people.push(
      new Person(id, first_name, last_name, email, phone, created_at)
    );
    return this;
  }

  save() {
    fs.writeFileSync(
      path.join(__dirname, this._file),
      `${this._headers.join(",")}\n${this._people.join("\n")}`
    );
  }

  get people() {
    return this._people;
  }

  get file() {
    return this._file;
  }
}

let parser = new PersonParser("people.csv");
parser
  .addPerson(
    1000,
    "Tony",
    "Song",
    "tonywei92@gmail.com",
    "08080808",
    new Date()
  )
  .save();

console.log(
  `There are ${parser.people.length} people in the file '${parser.file}'.`
);
