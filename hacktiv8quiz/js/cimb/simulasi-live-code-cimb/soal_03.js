/*
==================================
Array Mastery: Shortest Word
==================================

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[RULES]
Dilarang menggunakan function .map/.filter/.reduce!
Dilarang menggunakan regex!n array result
Dilarang menggunakan fungsi string seperti split, substring, slice
*/

function shortestWords(words) {
  var wordsArr = words.split(' ');
  var min = wordsArr[0].length;
  for (var i = 0; i < wordsArr.length; i++) {
    if(wordsArr[i].length < min){
      min = wordsArr[i].length;
    }
  }
  var shortest = [];
  for (var i = 0; i < wordsArr.length; i++) {
    if(wordsArr[i].length === min){
      var found = false;
      for(var j = 0; j<shortest.length;j++){
        if(wordsArr[i].toLowerCase() === shortest[j].toLowerCase()){
          found = true;
        }
      }
      if(!found){
        shortest.push(wordsArr[i]);
      }
    }
  }
  return shortest;
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']

