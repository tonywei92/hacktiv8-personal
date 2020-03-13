class Character {
  constructor(name, speed, mileage = 0, equipment = null) {
    this.name = name,
    this.mileage = mileage,
    this.speed = speed,
    this._equipment = equipment
  }

  set equipment(param) {
    this._equipment = param
  }

  get equipment() {
    return this._equipment
  }

}

module.exports = Character