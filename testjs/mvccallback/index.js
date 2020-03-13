const command = process.argv[2];
const arguments = process.argv.slice(3);
const StudentController = require("./controllers/StudentController");
switch (command) {
  case "student:all":
    StudentController.semua();
    break;
  case "student:findbyname":
    StudentController.cariDenganNama(arguments[0]);
    break;
  case "student:findbyid":
    StudentController.cariDenganId(arguments[0]);
    break;
  case "student:add":
    StudentController.bikin(arguments[0], arguments[1]);
}
