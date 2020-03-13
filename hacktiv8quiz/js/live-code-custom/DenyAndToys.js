/*
===============
Deny dan Mainan
===============

[INSTRUCTION]
Deny dan Jenny sangat bahagia setelah kelahiran anak pertama. Anak mereka sangat
menyukai mainan, jadi Deny ingin membeli beberapa. Ada banyak pilihan mainan
yang dapat dibeli. Deny hanya memiliki sekian uang untuk dibelanjakan, dia ingin
membeli mainan sebanyak-banyaknya.

Bila diberikan array harga dan uang untuk dibelanjakan, berapakah maksimal
jumlah mainan yang dapat dibeli oleh Deny?
Contohnya bila harga = [1,2,3,4], dan uang k=7, maka Deny dapat membeli [1,2,3]
dengan uang 6 atau [3,4] dengan uang 7. Deny akan memilih group pertama karena
ia mainannya berjumlah lebih banyak.

[EXAMPLE]
Bila input harga array adalah [1, 12, 5, 111, 200, 1000, 10] dan uang k = 50
maka hasilnya adalah 4, karena mainan yang dapat dibeli terbanyak adalah mainan
dengan harga 1,12,5,10.

[RULE]
1. Wajib menulis pseudo code, bila tidak menulis pseudo code maka dianggap tidak
mengerjakan.
1. dilarang menggunakan indexOf(), find(), filter() dan sort()
2. dilarang menggunakan regex
3.
*/

/*
 Algoritma disini

 */

function maximumToys(prices, k) {
  //code disini
}

console.log(maximumToys([3, 7, 2, 9, 4], 15)); // 3
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)); // 4
console.log(maximumToys([1, 2, 3, 4], 7)); // 3
console.log(
  maximumToys(
    [
      52952808,
      39586066,
      70403274,
      84627963,
      46636834,
      13906132,
      18138605,
      22451014,
      71348257,
      91939176,
      17451226,
      31356009,
      15266983,
      33392541,
      37992362,
      55743111,
      55380991,
      48022854,
      54843595,
      440
    ],
    100000
  )
); // 1
