const command = process.argv[2];
const parameters = process.argv.slice(3);
const ProductController = require("./Controllers/ProductController");
switch (command) {
  case "product:buy":
    ProductController.buy(
      parameters[0],
      parameters[1],
      parameters[2],
      parameters[3]
    );
    break;
  case "product:view":
    ProductController.viewById(parameters[0]);
}
