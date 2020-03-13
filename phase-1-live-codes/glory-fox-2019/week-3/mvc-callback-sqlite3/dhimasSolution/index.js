const input = process.argv.slice(2)
const mainCommand = input[0].split(':')
const Controller = require('./controllers')


switch (mainCommand[0]) {
  case 'recipe':
    switch (mainCommand[1]) {
      case 'add':
        Controller.createRecipe(input[1], input[2])
        break;
      case 'show':
        Controller.showRecipes()
        break;
      case 'updateName':
        Controller.updateName({
          id: input[1],
          name: input[2]
        })
        break;
      case 'updateOrigin':
        Controller.updateOrigin({
          id: input[1],
          origin: input[2]
        })
        break;
      case 'delete':
        Controller.deleteRecipe(input[1])
        break;
      default:
        break;
    }
    break;
  case 'ingredient':
    switch (mainCommand[1]) {
      case 'add':
        Controller.createIngredient({
          recipeId: input[1],
          name: input[2],
          amount: input[3]
        })
        break;
      case 'show':
        Controller.showIngredients()
        break;
      default:
        break;
    }
    break;
  default:
    break;
}