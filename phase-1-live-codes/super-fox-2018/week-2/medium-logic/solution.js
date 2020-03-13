function oneRowKeys (words) {
  let keyboard = [
    [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
    [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
    [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ]
  ];

  const result = [];

  words.forEach((word, wordIndex) => {
    for (let i = 0; i < keyboard.length; i++) {
      let found = 0;
      const row = keyboard[i].slice();
      for (let j = 0; j < word.length; j++) {
        const char = word[j].toLowerCase();
        if (row.indexOf(char) !== -1) {
          // Uncomment this line if you wanted to make a key that can only be used once
          // row[row.indexOf(char)] = null;
          found++;
        }
      }
      if (found === word.length) {
        result.push(word);
        break;
      }
      found = 0;
    }
  });
  return result;
}

console.log(oneRowKeys(['Roti', 'Gelas', 'Perut', 'Potong']));
// [ 'Roti', 'Perut' ]

console.log(oneRowKeys(['Kakak', 'Adik', 'Bunda']));
// [ 'Kakak' ]

console.log(oneRowKeys(['Dimitri', 'Sergei']));
// []
