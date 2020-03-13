const Student = require("./models/Student")
const School = require("./models/School")
const { generateUname } = require("./helpers/generateUname")
const { getCourseLevel } = require("./helpers/getCourseLevel")
const { dispError, dispSuccess, dispNotFound, dispList } = require('./view')
class Controller {

  static registerStudent(studentObj) {
    studentObj.username = generateUname(studentObj.name)
    studentObj.stage = getCourseLevel(+studentObj.level)
    const newStudent = new Student(studentObj)
    newStudent.save((err) => {
      if (err) {
        dispError(err)
      } else {
        School.findOne({
          field: "id",
          value: studentObj.SchoolId
        }, (err, school) => {
          if (err) {
            dispError(err)
          } else {
            if (school) {
              let totalRevenue = school.revenue + (500000 * studentObj.totalCourse)
              school.update({
                field: "revenue",
                value: totalRevenue
              }, function(err) {
                if (err) {
                  dispError(err)
                } else {
                  dispSuccess("Success add student with username " + studentObj.username)
                }
              })
            } else {
              dispNotFound("school not found")
            }
          }
        })
      }
    })
  }

  static takeCourse(username) {
    Student.findOne({ field: "username", value: username}, function(err, student) {
      if (err) {
        dispError(err)
      } else {
        if (student) {
          if (student.totalCourse > 0) {
            student.totalCourse -= 1
            student.level += 1
            student.stage = getCourseLevel(student.level)
            student.save(function(err) {
              if (err) {
                dispError(err)
              } else {
                dispSuccess("success update student with username " + student.username)
              }
            })
          } else {
            dispError("You are not allowed to take more course")
          }
        } else {
          dispNotFound("student not found")
        }
      }
    })
  }

  static graduateStudents(schoolId) {
    Student.remove({
      field: "SchoolId",
      value: schoolId
    }, function(err, delData) {
      if (err) {
        dispError(err)
      } else {
        School.findOne({ field: "id", value: schoolId}, (err, school) => {
          if (err) {
            dispError(err)
          } else {
            if (school) {
              dispSuccess(`Total graduates Student in ${school.name}: ${delData.changes}`)
            } else {
              dispNotFound("school not found")
            }
          }
        })
      }
    })
  }

  static listSchools() {
    School.findAll((err, schools) => {
      if (err) {
        dispError(err)
      } else {
        dispList(schools)
      }
    })
  }
}

module.exports = Controller