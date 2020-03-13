const Equipment = require("./Equipment")
const Timer = require("./Timer")

class Wing extends Equipment {
  constructor(totalWing = 2){
    super("Wing", new Timer("infinite"), 2, false)
    this.totalWing = totalWing
  }

  useEffect(timeInput, objCharacter) {
    if (timeInput === this.timer.timer) {
      objCharacter.speed += this.speedValue 
      this.isUsed = true
    }
  }
}

module.exports = Wing