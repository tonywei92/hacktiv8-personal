class Character {
  constructor(name, speed){
    this.name = name
    this.mileage = 0
    this.speed = speed
    this._equipment = null
  }

  get equipment(){
    return this._equipment
  }

  set equipment(value){
    console.log(`${this.name}: ${value.name} equipped!`)
    this._equipment= value
  }
}

class Timer {
  constructor(limit, start){
    this.limit = limit
    this.start   = start
  }
}

class Equipment {
  constructor(name, speedValue, timeLimit, startUseTime){
    this.name = name
    this.timer = new Timer(timeLimit, startUseTime)
    this.speedValue = speedValue
    this.isUsed = false
  }

  useEffect(time, target){
    if(this.timer.start === time && !this.isUsed){
      target.speed += this.speedValue
      this.isUsed = true
      console.log(`-- ${target.name}: using ${this.name}! Speed increased up to ${this.speedValue} --`)

    } else if(time === (this.timer.start + this.timer.limit)){
      target.speed -= this.speedValue
      console.log(`-- ${target.name}:  losing the effect of ${this.name}. Speed decreased down to ${this.speedValue} --`)
    }
  }
}

class Rocket extends Equipment {
  constructor(startUseTime){
    super('Rocket', 50, 2, startUseTime)
  }
}

class JumpPeer extends Equipment {
  constructor(startUseTime){
    super('JumpPeer', 5, 1, startUseTime)
  }
}

class Wing extends Equipment {
  constructor(){
    super('Wing', 2, 'infinite', 0)
    this.total = 2
  }

  useEffect(time, target){
    if(this.timer.limit === 'infinite' && this.timer.start === time){
      target.speed += this.speedValue
      this.isUsed = true
      console.log(`-- ${target.name} using ${this.name}! Speed increased up to ${this.speedValue} --`)
    }
  }
}

class Arcade {
  constructor(distance){
    this.players = []
    this.distance = distance
  }

  register(player){
    this.players.push(player)
    console.log(`${player.name} has registered to the arcade`)
  }

  race(){
    // distance = speed * time

    let finished = false
    let time = 0

    console.log("Race Start!")
    console.log("============================")
    
    while(!finished){
      console.log("TIME: ", time)
      
      this.players.forEach((player) =>{
        if(player.equipment) player.equipment.useEffect(time, player)

        if(player.speed * time  >= this.distance) {
          player.mileage = this.distance
        }
        else {
          player.mileage = player.speed * time
        }

      })

      this.players.sort((a,b) => b.mileage - a.mileage)

      this.players.forEach((player, index) =>{
        console.log(`Position ${index+1}. ${player.name}, speed: ${player.speed} km/h, mileage: ${player.mileage} km`)
        if(player.mileage >= this.distance) {
          finished = true
        } 
      })
      console.log("\n")
      time++
    }
  }
}



const bugs = new Character('Bugs Bunny', 90)
const tazmania = new Character('Tazmania', 85)
const duck = new Character('Daffy Duck', 110)

console.log(bugs)
/**
  Character { name: 'Bugs Bunny', mileage: 0, speed: 90, _equipment: null }
*/
console.log('\n')


bugs.equipment = new Wing() // Bugs Bunny: Wing equipped!
tazmania.equipment = new Rocket(1) // Tazmania: Rocket equipped!
duck.equipment = new JumpPeer(2) // Daffy Duck: JumpPeer equipped!
console.log('\n')

console.log(tazmania)
/*
Character {
  name: 'Tazmania',
  mileage: 0,
  speed: 85,
  _equipment:
   Rocket {
     name: 'Rocket',
     timer: Timer { limit: 2, start: 1 },
     speedValue: 50,
     isUsed: false } }
*/
console.log('\n')

const wbArcade = new Arscade(380)
console.log(wbArcade) 
/**
  Arcade { players: [], distance: 380 }
 */
console.log('\n')


wbArcade.register(bugs) //Bugs Bunny has registered to the arcade
wbArcade.register(tazmania) //Tazmania has registered to the arcade
wbArcade.register(duck) //Daffy Duck has registered to the arcade
console.log('\n')
wbArcade.race()
/*
Race Start!
============================
TIME:  0
-- Bugs Bunny using Wing! Speed increased up to 2 --
Position 1. Bugs Bunny, speed: 92 km/h, mileage: 0 km
Position 2. Tazmania, speed: 85 km/h, mileage: 0 km
Position 3. Daffy Duck, speed: 110 km/h, mileage: 0 km


TIME:  1
-- Tazmania: using Rocket! Speed increased up to 50 --
Position 1. Tazmania, speed: 135 km/h, mileage: 135 km
Position 2. Daffy Duck, speed: 110 km/h, mileage: 110 km
Position 3. Bugs Bunny, speed: 92 km/h, mileage: 92 km


TIME:  2
-- Daffy Duck: using JumpPeer! Speed increased up to 5 --
Position 1. Tazmania, speed: 135 km/h, mileage: 270 km
Position 2. Daffy Duck, speed: 115 km/h, mileage: 230 km
Position 3. Bugs Bunny, speed: 92 km/h, mileage: 184 km


TIME:  3
-- Tazmania:  losing the effect of Rocket. Speed decreased down to 50 --
-- Daffy Duck:  losing the effect of JumpPeer. Speed decreased down to 5 --
Position 1. Daffy Duck, speed: 110 km/h, mileage: 330 km
Position 2. Bugs Bunny, speed: 92 km/h, mileage: 276 km
Position 3. Tazmania, speed: 85 km/h, mileage: 255 km


TIME:  4
Position 1. Daffy Duck, speed: 110 km/h, mileage: 380 km
Position 2. Bugs Bunny, speed: 92 km/h, mileage: 368 km
Position 3. Tazmania, speed: 85 km/h, mileage: 340 km
*/