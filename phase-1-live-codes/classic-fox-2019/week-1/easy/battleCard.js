function generateCard() {
  // put your code here
  const attr = 'APT'
  let cards = []
  for (let i = 0; i < 5; i++) {
    cards.push(Math.ceil(Math.random()*9)+ attr[Math.floor(Math.random()*attr.length)])
  }
  console.log(cards)
  return cards
}

function battleCard(player1, player2) {
  // put your code here
  let counter = {
    player1: 0,
    player2: 0
  }
  for (let i = 0; i < player1.length; i++) {
    card1 = calculatePower(player1[i][0], player1[i][1], player2[i][1])
    card2 = calculatePower(player2[i][0], player2[i][1], player1[i][1])
    if(card1 > card2){
      counter.player1++
    }
    else if(card2 > card1) {
      counter.player2++
    }
  }
  if(counter.player1 > counter.player2){
    console.log('player one wins the battle')
  }
  else{
    console.log('player two wins the battle')
  }
}

function calculatePower(pow, attr1, attr2){
  if(attr1 === 'P' && attr2 === 'T' || attr1 === 'T' && attr2 === 'A' || attr1 === 'A' && attr2 === 'P' ){
    return Math.ceil(pow*1.25)
  }
  return Number(pow)
}

let player1 = generateCard() //['5T', '7A', '3T', '5P', '2A']
let player2 = generateCard() // ['3T', '3A', '3A', '8P', '8P']

battleCard(player1, player2) // player two wins the battle