/*
=============
Make Anagram
=============

[INSTRUCTION]
Kita mengganggap kedua string adalah Anagram apabila huruf-huruf dari string
pertama dapat disusun ulang menjadi string kedua. Dengan kata lain, kedua string
harus memiliki huruf yang sama dengan jumlah huruf yang sama pula, contohnya
"bacdc" dan "dcbac" adalah Anagram, tetapi "bacdc" dan "dcbad" bukan Anagram.

Tugas anda adalah menghitung minimal jumlah karakter yang harus dihapus agar
kedua string menjadi Anagram!

[EXAMPLE]
bila input adalah "cde" dan "abc", maka hasilnya adalah 4, karena kita harus
menghapus 2 huruf pada "cde" yaitu "d" dan "e", dan mengapus 2 huruf pada "abc"
yaitu "a" dan "b".

*/
//'cdea', 'aabc'
function countAnagramDeletion(stringA, stringB) {
  var diffA = [];
  var diffB = [];
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var total = 0;
  for (var i = 0; i < abjad.length; i++) {
    var countA = 0;
    for (var j = 0; j < stringA.length; j++) {
      if (stringA[j] === abjad[i]) {
        countA++;
      }
    }
    diffA.push(countA);

    var countB = 0; // 1
    for (var j = 0; j < stringB.length; j++) {
      if (stringB[j] === abjad[i]) {
        countB++;
      }
    }
    diffB.push(countB);
  }

  console.log(diffA, diffB);

  for (var i = 0; i < diffA.length; i++) {
    total += Math.abs(diffA[i] - diffB[i]);
  }
  return total;
}

console.log(countAnagramDeletion('cde', 'abc')); // 4

console.log(countAnagramDeletion('ayam', 'maya')); // 0

console.log(
  countAnagramDeletion(
    'bugexikjevtubidpulaelsbcqlupwetzyzdvjphn',
    'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk'
  )
); // 40

console.log(
  countAnagramDeletion(
    'imkhnpqnhlvaxlmrsskbyyrhwfvgteubrelgubvdmrdmesfxkpykprunzpustowmvhupkqsyjxmnptkcilmzcinbzjwvxshubeln',
    'wfnfdassvfugqjfuruwrdumdmvxpbjcxorettxmpcivurcolxmeagsdundjronoehtyaskpwumqmpgzmtdmbvsykxhblxspgnpgfzydukvizbhlwmaajuytrhxeepvmcltjmroibjsdkbqjnqjwmhsfopjvehhiuctgthrxqjaclqnyjwxxfpdueorkvaspdnywupvmy'
  )
); // 102
