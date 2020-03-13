const people = [
  { name: 'Hinata', power: 1000 },
  { name: 'Karin', power: 500 },
  { name: 'Naruto', power: 3000 },
  { name: 'Boruto', power: 800 },
  { name: 'Itachi', power: 1900 },
  { name: 'Sasuke', power: 2400 },
  { name: 'Obito', power: 1300 },
  { name: 'Hanabi', power: 800 }
]

const clans = ['Uzumaki', 'Kazekage', 'Uchiha', 'Hyuuga']

function fillTheClans() {
  // put code here
}

function getPairPerson() {
  // put code here
}

function comboBattle(player1, player2) {
  // put code here
}

// TEST CASES
fillTheClans()
console.log('Release 0')
console.log('---------')
console.log(people)

console.log('\nRelease 1')
console.log('---------')
let firstPlayer = getPairPerson()
console.log('Player 1:')
console.log(firstPlayer)
let secondPlayer = getPairPerson()
console.log('Player 2:')
console.log(secondPlayer)

console.log('\nRelease 2')
console.log('---------')
comboBattle(firstPlayer, secondPlayer)

console.log('\nRelease 3')
console.log('---------')
console.log(play(peopleWithClan));