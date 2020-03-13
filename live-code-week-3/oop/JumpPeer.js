const Equipment = require("./Equipment")
const Timer = require("./Timer")

class JumpPeer extends Equipment {
  constructor(){
    super("JumpPeer", new Timer(1), 5, false)
  }
}

module.exports = JumpPeer