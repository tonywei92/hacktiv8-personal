/*
===============
Shortest Word
===============

[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex

[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/

function shortestWords(words) {
  var shortestWordLength = words.length;
  var wordsArr = words.split(" ");
  var shortestWords = [];
  for (var i = 0; i < wordsArr.length; i++) {
    if (shortestWordLength > wordsArr[i].length) {
      shortestWordLength = wordsArr[i].length;
    }
  }

  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length === shortestWordLength) {
      var unique = true;
      for (var j = 0; j < shortestWords.length; j++) {
        if(shortestWords[j].toLowerCase() === wordsArr[i].toLowerCase()){
          unique = false;
        }
      }
      if(unique) shortestWords.push(wordsArr[i].toLowerCase());
    }
  }

  return shortestWords;

}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']
console.log(shortestWords('Apapun hasilnya, kita sudah berusaha, serahkan saja')); // ['kita', 'saja']