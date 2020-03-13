const bugs = new Character('Bugs Bunny', 90)
const tazmania = new Character('Tazmania', 85)
const duck = new Character('Daffy Duck', 110)

console.log(bugs)
/**
  Character { name: 'Bugs Bunny', mileage: 0, speed: 90, _equipment: null }
*/
console.log('\n')


bugs.equipment = new Wing(0) // Bugs Bunny: Wing equipped!
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

const wbArcade = new Arcade(380)
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
