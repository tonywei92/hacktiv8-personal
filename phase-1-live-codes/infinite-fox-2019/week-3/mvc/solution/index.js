const command = process.argv[2];
const parameters = process.argv.slice(3);
const MovieController = require("./Controllers/MovieController");
switch (command) {
  case "movie:buy":
    MovieController.buy(
      parameters[0],
      parameters[1],
      parameters[2],
      parameters[3],
      parameters[4]
    );
    break;
  case "movie:all":
    MovieController.all();
    break;
  case "movie:view":
    MovieController.view(parameters[0]);
    break;
  case "movie:close":
    MovieController.close(parameters[0]);
    break;
  case "movie:delete":
    MovieController.delete(parameters[0]);
    break;
}
