const command = process.argv[2];
const parameters = process.argv.slice(3);

// controllers
const { IngredientController, RecipeController } = require('./controllers')
switch (command) {
    case "recipe:view":
        RecipeController.view(parameters[0]);
        break;
    case "recipe:all":
        RecipeController.all();
        break;
    case "recipe:name":
        RecipeController.getByName(parameters[0]);
        break;
    case "recipe:origin":
        RecipeController.getByOrigin(parameters[0]);
        break;
    case "recipe:add":
        RecipeController.add(parameters[0], parameters[1])
        break;
    case "recipe:remove":
        RecipeController.delete(parameters[0]);
        break;
    case "recipe:updateName":
        RecipeController.updateName(parameters[0], parameters[1]);
        break;
    case "recipe:updateOrigin":
        RecipeController.updateOrigin(parameters[0], parameters[1]);
        break;
    case "ingredient:add":
        IngredientController.add(parameters[0], parameters[1], parameters[2]);
        break;
    case "ingredient:remove":
        IngredientController.remove(parameters[0], parameters[1], parameters[2]);
        break;
    case "ingredient:updateAmount":
        IngredientController.updateAmount(parameters[0], parameters[1])
        break;
    case "help":
        console.log(`
node index.js recipe:add name origin
node index.js recipe:delete recipe_id
node index.js recipe:view recipe_id
node index.js recipe:updateName recipe_id new_name
node index.js recipe:updateOrigin recipe_id new_origin
node index.js recipe:all
node index.js recipe:origin origin
node index.js recipe:name name
node index.js ingredient:add recipe_id name amount
node index.js ingredient:remove remove ingredient_id
node index.js ingredient:updateName ingredient_id name
node index.js ingredient:updateAmount ingredient_id amount
node index.js help // show this help
        `)
}
