/*
  Trainer
    - firstName
    - lastName
    - username
    - gold

  Monster
    - species
    - TrainerId
    - level
    - hp
    - attack
    - speed
    - type
    - experience

  FEATURE
    - catch => node index.js username species type
    - trade => node index.js trade pokemon1 pokemon2
    - train => node index.js train username pokemonId
    - showInfo
*/
const [
  command,
  ...args
] = process.argv.slice(2)
const Controller = require("./Controller")

class Route {
  constructor(args) {
    this.args = [...args]
  }

  catch() {
    const [
      username,
      species,
      type
    ] = this.args

    Controller.catch({
      username, species, type
    })
  }

  trade() {
    const [
      monster1,
      monster2
    ] = this.args
    Controller.trade({
      monster1, monster2
    })
  }

  train() {
    const [
      username,
      monsterId
    ] = this.args
    Controller.train({
      username,
      monsterId
    })
  }

  getTotalTypePokemonEachUser() {
    Controller.getTotalTypePokemonEachUser()
  }

  getTrainersWhoHave5MonstersWithAverageLevel6() {
    Controller.getTrainersWhoHave5MonstersWithAverageLevel6()
  }

  getRankTop2to4MonstersWithNameLikeTle() {
    Controller.getRankTop2to4MonstersWithNameLikeTle()
  }
}

const route = new Route(args)
switch (command) {
  case "getTrainersWhoHave5MonstersWithAverageLevel6":
    route.getTrainersWhoHave5MonstersWithAverageLevel6()
    break
  case "getTotalTypeMonsterEachTrainer":
    route.getTotalTypePokemonEachUser()
    break
  case "getRankTop2to4MonstersWithNameLikeTle":
    route.getRankTop2to4MonstersWithNameLikeTle()
    break
  case "catch":
    route.catch()
    break
  case "trade":
    route.trade()
    break
  case "train":
    route.train()
    break
  default:
    break
}
