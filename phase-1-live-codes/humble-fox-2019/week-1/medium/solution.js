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

function randomizer(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function fillTheClans() {
  clans.forEach(clan => {
    let count = 0;
    while (count < 2) {
      let nonClanPeople = people.reduce((acc, cur, idx) => {
        return cur.clan === undefined
          ? acc.concat(idx)
          : acc
        }, []);
      let indexFillClan = nonClanPeople[randomizer(nonClanPeople.length)];
      if (people[indexFillClan]) {
        people[indexFillClan].clan = clan;
      }
      count += 1;
    }
  })
}

function getPairPerson() {
  // code here
  const pairs = [];
  let numberOfPairs = 2;
  while(pairs.length < numberOfPairs) {
    let randomPerson = people[randomizer(people.length)];
    if (pairs.length === 0 || pairs[0].name !== randomPerson.name) {
      pairs.push(randomPerson);
    }
  }
  return pairs;
}

function comboBattle(player1, player2) {
  // code here
  let player1Power = 0;
  let player2Power = 0;
  let numberOfPairs = 2;
  let bonusPower = 1000;
  for (let i = 0; i < numberOfPairs; i++) {
    player1Power += player1[i].power;
    player2Power += player2[i].power;
  }
  player1Power += player1[0].clan === player1[1].clan ? bonusPower : 0;
  player2Power += player2[0].clan === player2[1].clan ? bonusPower : 0;
  if (player1Power > player2Power) {
    console.log(`Player 1 Powers is: ${player1Power} and Player 2 power is: ${player2Power}, Congrats Player 1 Win!`);
  } else if (player2Power > player1Power) {
    console.log(`Player 1 Powers is: ${player1Power} and Player 2 power is: ${player2Power}, Congrats Player 2 Win!`);
  } else {
    console.log(`Player 1 Powers is: ${player1Power} and Player 2 power is: ${player2Power}, It's a Draw!`);
  }
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