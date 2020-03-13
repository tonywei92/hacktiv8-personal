function tic_tac_toe() {
  let rand = [];
  let count = [0, 0];
  let ttt = [];
  for (let i = 0; i < 9; i++) {
    let tempRand = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    if (count[tempRand] === 9) {
      rand.push(!tempRand);
    } else {
      rand.push(!!tempRand);
    }
  }
  let countitem = 0;
  for (let i = 0; i < 3; i++) {
    ttt.push([]);
    for (let j = 0; j < 3; j++) {
      if (rand[countitem]) {
        ttt[i].push("o");
      } else {
        ttt[i].push("x");
      }
      countitem++;
    }
  }
  return ttt;
}

console.table(tic_tac_toe());
