/*
=====================
PAIR LETTER SWAPPER
=====================

[INSTRUCTIONS]
Terdapat fungsi pairLetterSwapper yang menerima 1 paramater berupa string, fungsi ini berguna untuk mencari pasangan kata yang urut
pada parameter yang diberikan dan mengganti kata yang urut dengan kata urut setelahnya

[EXAMPLES]
input: 'abcd'
keterangan : 
- pada parameter 'abcd' terdapat pasangan urut ab, bc , dan cd 
- ab akan berubah menjadi bc
- bc akan berubah menjadi cd
- cd akan berubah menjadi de
output: 'bccdde' 

input: 'dede'
keterangan : 
- pada parameter 'dede' terdapat pasangan urut de, dan de 
- de akan berubah menjadi ef
- de akan berubah menjadi ef
output: 'efef'

[RULES]
-dilarang menggunakan regex, dan charcodeat
-dilarang menggunakan split, slice, splice
-dilarang menggunakan fungsi ES 6
*/
function pairLetterSwapper(str) {
  var lib = "abcdefghijklmnopqrtuvwxyz"
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var libIndex = 0;
    for (var j = 0; j < lib.length; j++) {
      if (lib[j] === str[i]) {
        libIndex = j;
      }
    }
    if (str[i + 1] === lib[libIndex + 1]) {
      result += lib[libIndex + 1] + lib[libIndex + 2]
    }
  }
  return result;

}

console.log(pairLetterSwapper('abcd'))
//bccdde
console.log(pairLetterSwapper('dede'))
//efef
console.log(pairLetterSwapper('zaefgxy'))
//fgghyz