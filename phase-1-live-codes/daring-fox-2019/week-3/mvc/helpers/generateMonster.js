const randomNumber = require("./randomNumber")
module.exports = (input) => {
  const {
    species, 
    TrainerId,
    type
  } = input
  const level = randomNumber(1, 5)
  return {
    species,
    TrainerId,
    level,
    hp: randomNumber(1000, (level + 1) * 1000),
    attack: randomNumber(100, (level + 1)  * 100),
    speed: randomNumber(100, (level + 1)  * 100),
    type
  }
}