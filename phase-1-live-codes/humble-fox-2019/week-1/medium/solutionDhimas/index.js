function fillTheClans(people ,clans) {
  let uniqIndex = []
  let limit = people.length / 2
  for(let i = 0; i < limit; i++) {
    let counter = 0
    while(counter < 2) {
      let randomize = Math.floor(Math.random() * people.length)
      if(uniqIndex.indexOf(randomize) === -1) {
        uniqIndex.push(randomize)
        counter++
      }
    }
  }
  
  for(let i = 0; i < uniqIndex.length; i+=2) {
    people[uniqIndex[i]].clan = clans[limit-1]
    people[uniqIndex[i+1]].clan = clans[limit-1]
    limit--
  }
  return people
}

function getPairPerson(people) {
  let choosen = false
  let randomizer1, randomizer2
  while(!choosen) {
    randomizer1 = Math.floor(Math.random() * people.length)
    randomizer2 = Math.floor(Math.random() * people.length)
    if(randomizer1 !== randomizer2) {
      choosen = true
    }
  }
  return [people[randomizer1], people[randomizer2]]
}

function comboBattle(player1, player2) {
  let player1Power = player1[0].power + player1[1].power
  let player2Power = player2[0].power + player2[1].power
  if(player1[0].clan === player1[1].clan) player1Power += 1000
  if(player2[0].clan === player2[1].clan) player2Power += 1000
  let result = ''
  let winner = ''
  if(player1Power > player2Power) {
    result = 'Player 1 win'
    winner = 'player1'
  } else if (player1Power < player2Power) {
    result = 'Player 2 win'
    winner = 'player2'
  } else {
    result = 'draw'
  }
  console.log(`Player 1 power is: ${player1Power}, Player 2 power is: ${player2Power}. ${result}`)
  return winner
} 

function play(peopleWithClan) {
  let people1Arr = []
  let people2Arr = []
  let people1Score = 0
  let people2Score = 0
  for(let i = 0; i < peopleWithClan.length; i++) {
    people1Arr.push({
      ...peopleWithClan[i]
    })
    people2Arr.push({
      ...peopleWithClan[i]
    })
  }
  let count = 0
  while(count < peopleWithClan.length / 2) {
    let player1 = getPairPerson(people1Arr)
    let player2 = getPairPerson(people2Arr)
    let winner = comboBattle(player1, player2)
    if(winner === 'player1') {
      people1Score++
    } else if(winner === 'player2') {
      people2Score++
    }
    count++
    console.log('This round player 1 used: ' + player1[0].name + ' and ' + player1[1].name)
    console.log('This round player 2 used: ' + player2[0].name + ' and ' + player2[1].name)
    console.log('---------------------------------------------------------')
    people1Arr = people1Arr.filter(el => el.name !== player1[0].name && el.name !== player1[1].name)
    people2Arr = people2Arr.filter(el => el.name !== player2[0].name && el.name !== player2[1].name)
  }
  return {
    'player1Score' : people1Score,
    'player2Score': people2Score
  }
}

// TEST CASES
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

let peopleWithClan = fillTheClans(people, clans)
console.log('Release 0')
console.log('---------')
console.log(peopleWithClan)

console.log('\nRelease 1')
console.log('---------')
let firstPlayer = getPairPerson(peopleWithClan)
console.log('Player 1:')
console.log(firstPlayer)
let secondPlayer = getPairPerson(peopleWithClan)
console.log('Player 2:')
console.log(secondPlayer)

console.log('\nRelease 2')
console.log('---------')
comboBattle(firstPlayer, secondPlayer)

console.log('\nRelease 3')
console.log('---------')
console.log(play(peopleWithClan));

