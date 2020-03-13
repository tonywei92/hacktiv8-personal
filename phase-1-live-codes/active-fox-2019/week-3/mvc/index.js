const argv = process.argv.slice(2)
const Controller = require("./Controller")
switch (argv[0]) {
  case "register":
    Controller.registerStudent({
      SchoolId: argv[1],
      name: argv[2],
      level: argv[3],
      totalCourse: argv[4]
    })
    break;
  case "take course":
    Controller.takeCourse(argv[1])
    break
  case "graduates":
    Controller.graduateStudents(argv[1])
    break
  case "list":
    Controller.listSchools()
    break
  default:
    break;
}