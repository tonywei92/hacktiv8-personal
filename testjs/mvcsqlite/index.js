const commmand = process.argv[2];
const parameters = process.argv.slice(3);
const AuthorController = require("./Controllers/AuthorController");
switch (commmand) {
  case "author:all":
    AuthorController.all();
    break;
  case "author:add:mass":
    const arr = [];
    for (let i = 0; i < parameters.length; i++) {
      let temp = parameters[i].split(",");
      let tempObj = {};
      tempObj.name = temp[0];
      tempObj.address = temp[1];
      tempObj.age = temp[2];
      arr.push(tempObj);
    }
    AuthorController.addMany(arr);

  case "author:add":
    AuthorController.add({
      name: parameters[0],
      address: parameters[1],
      age: parameters[2]
    });
    break;
  case "author:findid":
    AuthorController.findById(parameters[0]);
    break;

  case "author:update":
    AuthorController.update(
      parameters[0],
      parameters[1],
      parameters[2],
      parameters[3]
    );
    break;
  case "author:delete":
    AuthorController.delete(parameters[0]);
    break;
  default:
    console.log("invalid input");
}
