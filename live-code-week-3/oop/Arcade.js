class Arcade {
  constructor(distance) {
    this.players = [],
    this.distance = distance
  }

  register (objPlayer) {
    this.players.push(objPlayer)
    console.log(`${objPlayer.name} has registered to the arcade`)
  }

  race() {
    console.log("Race Start!")
    let time = 0
    let finish = false

    console.log(`TIME: ${time}`)

    while(!finish) {
      for (let i = 0; i < this.players.length; i++) {
        // init equipment
        this.players[i].equipment.useEffect(time, this.players[i])

        // add mileage
        this.players[i].mileage = this.players[i].speed * time

        // check if someone finish
        if (this.players[i].mileage >= this.distance) {
          finish = true
          break
        }
      }
      time += 1
    }
  }
}

module.exports = Arcade