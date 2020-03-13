const db = require("../connection");
class Lecture {
  static findAll(paramObj, cb) {
    db.all(
      `SELECT * FROM lectures WHERE ${paramObj.where.key} = ?`,
      [paramObj.where.value],
      cb
    );
  }

  static findById(id, cb) {
    db.get(`SELECT * FROM lectures WHERE id = ?`, [id], cb);
  }

  static create(instructorId, title, cb) {
    db.run(
      `INSERT INTO lectures (instructor_id, title, done, created_at) VALUES (?,?,?,?)`,
      [instructorId, title, 0, new Date().toDateString()],
      cb
    );
  }

  static update(objParam, cb) {
    db.run(
      `UPDATE lectures SET ${objParam.update.key} = ? WHERE ${objParam.where.key} = ?`,
      [objParam.update.value, objParam.where.value],
      cb
    );
  }

  static count(objParams, cb) {
    const q = `SELECT COUNT(lectures.id) AS total FROM lectures WHERE ${objParams.where.key} = ? AND done = ?`;
    db.get(q, [objParams.where.value, 0], (err, row) => {
      if (err) {
        cb(err);
      } else {
        cb(null, row.total);
      }
    });
  }

  static destroy(objParam, cb) {
    db.run(
      `DELETE FROM lectures WHERE ${objParam.where.key} = ?`,
      [objParam.where.value],
      cb
    );
  }
}

module.exports = Lecture;
