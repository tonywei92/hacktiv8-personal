class Equipment {
  constructor(name, timer, speedValue, isUsed) {
    this.name = name,
    this.timer = timer,
    this.speedValue = speedValue,
    this.isUsed = isUsed
  }

  useEffect(timeInput, objCharacter) {
    if (timeInput === this.timer.timer) {
      objCharacter.speed += this.speedValue 
      this.isUsed = true
      console.log(`${objCharacter.name}: using ${this.name}! Speed increased up to ${this.speedValue}`)

      // disini set limit
    } else if ((this.timer.start * this.timer.limit) === timeInput) {
      objCharacter.speed -= this.speedValue
      console.log(`${objCharacter.name}: losing the effect of ${this.name}. Speed decreased down to ${this.speedValue}`)
    }
  }
}

module.exports = Equipment