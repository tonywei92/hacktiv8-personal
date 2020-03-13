/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. Apabila pada array jumlah "Gryffindor" lebih banyak
daripada "Slytherin" maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" maka function
akan mereturn "Slytherin Juara Futsal Hogwarts 2018". Jika jumlah kedua tim sama,
maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"

Let's start our own wizardy, shall we?

[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!

*/

function whosTheWinner(goals) {
  // your code here 
}

// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
