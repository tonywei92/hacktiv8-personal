const db = require("../connection");
class InstructorController {
  static all(cb) {
    db.all(`SELECT * FROM instructors`, cb);
  }

  static findById(id, cb) {
    db.get(
      `SELECT * FROM instructors WHERE id = ?
        `,
      [id],
      cb
    );
  }

  static destroy(objParam, cb) {
    db.run(
      `DELETE FROM instructors WHERE ${objParam.where.key} = ?`,
      [objParam.where.value],
      cb
    );
  }
}

module.exports = InstructorController;
