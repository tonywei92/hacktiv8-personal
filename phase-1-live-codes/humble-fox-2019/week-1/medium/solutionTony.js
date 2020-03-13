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
    let clansIdx = 0;
    for (let i = 0; i < people.length; i += 2) {
        people[i].clan = clans[clansIdx]
        people[i + 1].clan = clans[clansIdx]
        clansIdx++;
    }
}

function getPairPerson() {
    let player1;
    let player2;
    let choosenIdx = -1;
    let randomize = Math.floor(Math.random() * people.length);
    player1 = people[randomize];
    choosenIdx = randomize;

    randomize = Math.floor(Math.random() * people.length);
    while (choosenIdx === randomize) {
        randomize = Math.floor(Math.random() * people.length);
    }
    player2 = people[randomize];
    return [player1, player2]
}

function comboBattle(player1, player2) {
    let player1Power = player1[0].power + player1[1].power;
    let player2Power = player2[0].power + player2[1].power;

    if (player1[0].clan === player1[1].clan) {
        player1Power += 1000;
    }

    if (player2[0].clan === player2[1].clan) {
        player2Power += 1000;
    }
    if (player1Power > player2Power) {
        console.log(`Player 1 Powers is: ${player1Power} and Player 2 power is: ${player2Power}, Player 1 Win!`);
        return 1;
    }
    else if (player1Power < player2Power) {
        console.log(`Player 1 Powers is: ${player1Power} and Player 2 power is: ${player2Power}, Player 2 Win!`);
        return 2;
    }
    else {
        console.log(`Player 1 Powers is: ${player1Power} and Player 2 power is: ${player2Power}, It's a Draw!`);
        return 0;
    }

}


function play(people) {
    let player1 = 0;
    let player2 = 0;
    const players = [];
    for (let i = 0; i < people.length; i++) {
        players.push(getPairPerson());
    }
    for (let i = 0; i < players.length - 1; i += 2) {
        const p1 = players[i];
        const p2 = players[i + 1];
        const winner = comboBattle(p1, p2);
        if (winner === 1) {
            player1++;
        }
        else if (winner === 2) {
            player2++;
        }
    }
    console.log({ player1Score: player1, playser2Score: player2 })

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
console.log(play(people));