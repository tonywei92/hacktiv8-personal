const Instructor = require("../models/Instructor");
const Lecture = require("../models/Lecture");
const GeneralView = require("../views/GeneralView");
const InstructorView = require("../views/InstructorView");
const LectureView = require("../views/LectureView");
class InstructorController {
  static all() {
    Instructor.all(function(err, rows) {
      if (err) {
        GeneralView.showError(err);
      } else {
        InstructorView.showMany(rows);
      }
    });
  }

  static view(id) {
    Instructor.findById(id, function(err, instructor) {
      if (err) {
        GeneralView.showError(err);
      } else {
        if (instructor) {
          Lecture.findAll(
            {
              where: {
                key: "instructor_id",
                value: id
              }
            },
            (err, lectures) => {
              if (err) {
                GeneralView.showError(lectures);
              } else {
                LectureView.showMany(instructor, lectures);
              }
            }
          );
        } else {
          GeneralView.showError("Instructor tidak ditemukan");
        }
      }
    });
  }

  static del(id) {
    Instructor.findById(id, (err, row) => {
      if (err) {
        GeneralView.showError(err);
      } else {
        if (row) {
          Instructor.destroy(
            {
              where: {
                key: "id",
                value: id
              }
            },
            err => {
              if (err) {
                GeneralView.showError(err);
              } else {
                Lecture.destroy(
                  { where: { key: "instructor_id", value: id } },
                  err => {
                    if (err) {
                      GeneralView.showError(err);
                    } else {
                      GeneralView.showMessage(
                        "berhasil menghapus instructor dan lecture terkait"
                      );
                    }
                  }
                );
              }
            }
          );
        } else {
          GeneralView.showError("instructor tidak ditemukan");
        }
      }
    });
  }
}

module.exports = InstructorController;
