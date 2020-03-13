const Lecture = require("../models/Lecture");
const Instructor = require("../models/Instructor");
const GeneralView = require("../views/GeneralView");
class LectureController {
  static add(instructorId, title) {
    Instructor.findById(instructorId, (err, instructor) => {
      if (err) {
        console.log(err);
      } else {
        if (instructor) {
          Lecture.count(
            {
              where: {
                key: "instructor_id",
                value: instructorId
              }
            },
            (err, total) => {
              if (err) {
                GeneralView.showError(err);
              } else {
                Instructor.findById(instructorId, function(err, instructor) {
                  if (err) {
                    GeneralView.showError(err);
                  } else {
                    if (instructor.maxslots >= total + 1) {
                      Lecture.create(instructorId, title, err => {
                        if (err) {
                          GeneralView.showError(err);
                        } else {
                          GeneralView.showMessage(
                            "berhasil menambahkan lecture"
                          );
                        }
                      });
                    } else {
                      GeneralView.showError("kapasitas slot instruktur penuh");
                    }
                  }
                });
              }
            }
          );
        } else {
          console.log("Instructor tidak ditemukan");
        }
      }
    });
  }

  static done(id) {
    Lecture.findById(id, (err, row) => {
      if (err) {
        GeneralView.showError(err);
      } else {
        if (row) {
          Lecture.update(
            {
              where: {
                key: "id",
                value: id
              },
              update: {
                key: "done",
                value: 1
              }
            },
            err => {
              if (err) {
                GeneralView.showError(err);
              } else {
                GeneralView.showMessage("update lecture berhasil");
              }
            }
          );
        } else {
          GeneralView.showMessage("lecture tidak ditemukan");
        }
      }
    });
  }
}

module.exports = LectureController;
