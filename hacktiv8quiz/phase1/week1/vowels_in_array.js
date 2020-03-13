function randLetter() {
  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  var letter = letters[Math.floor(Math.random() * letters.length)];
  return letter;
}

function generateBoard(row, col) {
  const board = [];
  for (let i = 0; i < row; i++) {
    board.push([]);
    for (let j = 0; j < col; j++) {
      board[i].push(randLetter());
    }
  }
  return board;
}

function allVowels(arr) {
  const VOWELS = ["A", "I", "U", "E", "O"];
  let vowelsCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < VOWELS.length; j++) {
      if (arr[i] === VOWELS[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount === arr.length;
}

function findVowell2x2() {
  const board = generateBoard(4, 5);
  let vowelArea = 0;
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      const letters = [
        board[i][j],
        board[i + 1][j],
        board[i][j + 1],
        board[i + 1][j + 1]
      ];
      if (allVowels(letters)) {
        vowelArea++;
      }
    }
  }
  console.log(board);
  return vowelArea;
}

console.log(findVowell2x2());
