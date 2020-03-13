const db = require("../connection");
class Author {
  static findAll(cb) {
    db.all("SELECT * FROM authors", cb);
  }

  static find(id, cb) {
    db.get("SELECT * FROM authors WHERE id = ?", [id], cb);
  }

  static createMany(arrAuthor, cb) {
    db.serialize(() => {
      const stmt = db.prepare(
        "INSERT INTO authors (name, address, age) VALUES (?,?,?)"
      );
      for (let i = 0; i < arrAuthor.length; i++) {
        stmt.run([arrAuthor[i].name, arrAuthor[i].address, arrAuthor[i].age]);
      }
      stmt.finalize(cb);
    });
  }

  static create(objAuthor, cb) {
    db.run(
      "INSERT INTO authors (name, address, age) VALUES (?,?,?)",
      [objAuthor.name, objAuthor.address, objAuthor.age],
      cb
    );
  }

  static update(params, cb) {
    const sets = [];
    const setsValues = [];

    for (let i = 0; i < params.update.length; i++) {
      sets.push(`${params.update[i].key} = ?`);
      setsValues.push(params.update[i].value);
    }

    setsValues.push(params.where.value);
    //ini hasilnya 'UPDATE authors SET address = ?, age = ? WHERE id = ?'

    db.run(
      `UPDATE authors SET ${sets.join(", ")} WHERE ${params.where.key} = ?`,
      setsValues,
      cb
    );
  }

  static delete(id, cb) {
    db.run("DELETE FROM authors WHERE id = ?", id, cb);
  }
}

module.exports = Author;
