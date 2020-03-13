const Student = require("../models/Student");

class StudentController {
  static semua() {
    Student.all(function(err, students) {
      if (err) {
        console.log(err);
      } else {
        console.log(students);
      }
    });
  }

  static cariDenganNama(nama) {
    Student.findAll(
      {
        where: {
          key: "name",
          value: nama
        }
      },
      (err, students) => {
        if (err) {
          console.log(err);
        } else {
          console.log(students);
        }
      }
    );
  }

  static cariDenganId(id) {
    Student.findById(id, function(err, student) {
      if (err) {
        console.log(err);
      } else {
        console.log(student);
      }
    });
  }

  static updateNama(umur, newName) {
    Student.update({
      where: {
        key: "umur",
        value: umur
      },
      update: {
        key: "name",
        value: newName
      }
    });
  }

  static bikin(nama, umur) {
    Student.create(
      {
        name: nama,
        umur: umur
      },
      function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("berhasil");
        }
      }
    );
  }
}

module.exports = StudentController;
