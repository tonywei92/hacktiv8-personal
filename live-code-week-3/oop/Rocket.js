const Equipment = require("./Equipment")
const Timer = require("./Timer")

class Rocket extends Equipment {
  constructor(){
    super("Rocket", new Timer(2), 50, false)
  }
}

module.exports = Rocket