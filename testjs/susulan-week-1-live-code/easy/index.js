function generateCard() {
  // put your code here
  const banyakKartu = 5;
  let output = [];
  let cardAt = ["P", "T", "A"];
  for (let i = 0; i < banyakKartu; i++) {
    let temp = 0;
    temp += Math.floor(Math.random() * 10);
    if (temp === 0) {
      temp = 1;
    }
    temp += cardAt[Math.floor(Math.random() * 3)];
    output.push(temp);
  }
  return output;
}

function battleCard(player1, player2) {
  // put your code here
  let card = player1.length;
  let card1 = [];
  let card2 = [];
  for (let i = 0; i < card; i++) {
    if (Number(player1[i][0]) > Number(player2[i][0])) {
      card1.push(player1[i]);
    } else card2.push(player2[i]);
  }
  if (card1.length > card2.length) {
    console.log(`Player one wins the game`);
  } else console.log(`Player two wins the game`);
}

let player1 = generateCard();
let player2 = generateCard();
console.log(player1, player2);

battleCard(player1, player2);
