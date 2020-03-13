/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa angka.
  Function ini akan mengembalikan array multidimensi angka x angka yang isi value
  dari array multidimensi tersebut menyerupai `board snakes and ladders`

  Contoh 1:
  input: 3
  output:
      [
        [7, 8, 9],
        [6, 5, 4],
        [1, 2, 3]
      ]

  Contoh 2:
  input: 4
  output:
      [
        [ 16, 15, 14, 13 ],
        [ 9, 10, 11, 12 ],
        [ 8, 7, 6, 5 ],
        [ 1, 2, 3, 4 ]
      ]


NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'

 - NILAI FULL(100) AKAN DIBERIKAN JIKA BERHASIL MENYELESAIKAN KASUS DIATAS

 - NILAI 80 AKAN DIBERIKAN JIKA value angka di dalam array tersebut tidak persis
   menyerupai snakes and ladders TAPI angka 1 harus tetap berada di kolom paling bawah!
   CONTOH:
     [
       [ 13, 14, 15, 16 ],
       [ 9, 10, 11, 12 ],
       [ 5, 6, 7, 8 ],
       [ 1, 2, 3, 4 ]
     ]

**/

function squareNumber(num) {
  // jumlah angka adalah persegi, berarti num x num
  var total = num * num;

  //variable hasil
  var result = [];

  //variable sementara
  var temp = [];

  //looping mundur, dari var total sampai 1
  for (var i = total; i > 0; i--) {
    // akumulasi i
    temp.push(i);

    // kondisi ini bernilai true, bila variable i habis dibagi num (sudah diakumulasi 1 baris)
    if ((i - 1) % num === 0) {
      // array perbaris dipersiapkan untuk di push
      var temp2 = [];

      // apabila baris genap, loop angka mundur
      if ((i + 1) % 2 === 0) {
        for (var j = temp.length - 1; j >= 0; j--) {
          temp2.push(temp[j]);
        }
      } else {
        // apabila baris ganjil, loop angka maju
        for (var j = 0; j < temp.length; j++) {
          temp2.push(temp[j]);
        }
      }
      // push temp2 yang sudah diakumulasi perbaris ke result
      result.push(temp2);
      // kosongkan temp apabila akumulasi perbaris sudah selesai
      temp = [];
    }
  }

  return result;
}

console.log(squareNumber(3));
// [ [ 7, 8, 9 ],
// [ 6, 5, 4 ],
// [ 1, 2, 3 ] ]

console.log(squareNumber(4));
// [ [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 3, 4 ] ]

console.table(squareNumber(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
