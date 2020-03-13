const command = process.argv[2];
const arguments = process.argv.slice(3);
const InstructorController = require("./controllers/InstructorController");
const LecturesController = require("./controllers/LectureController");
switch (command) {
  case "instructor:all":
    InstructorController.all();
    break;
  case "instructor:view":
    InstructorController.view(arguments[0]);
    break;
  case "instructor:delete":
    InstructorController.del(arguments[0]);
    break;
  case "lecture:add":
    LecturesController.add(arguments[0], arguments[1]);
    break;
  case "lecture:done":
    LecturesController.done(arguments[0]);
    break;
}
