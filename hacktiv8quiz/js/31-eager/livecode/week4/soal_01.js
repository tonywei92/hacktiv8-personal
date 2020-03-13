/*
===============
Deny dan Mainan
===============

[INSTRUCTION]
Deny dan Jenny sangat bahagia setelah kelahiran anak pertama. Anak mereka sangat
menyukai mainan, jadi Deny ingin membeli beberapa. Ada banyak pilihan mainan
yang dapat dibeli.
Function maximum toys menerima 2 parameter array dan number, array merupakan daftar harga mainan dan number merupakan uang yang dimiliki Deny.

[EXAMPLE]
Bila input harga array adalah [1, 12, 5, 111, 200, 1000, 10] dan uang k = 50
maka hasilnya adalah 4, karena jumlah mainan yang dapat dibeli terbanyak adalah mainan
dengan harga 1,12,5,10.

[RULE]
1. Wajib menulis pseudo code, bila tidak menulis pseudo code maka dianggap tidak
mengerjakan.
2. dilarang menggunakan indexOf(), find(), filter() dan sort()
3. dilarang menggunakan regex
*/

/*
 Pseudo code disini

 */

function maximumToys(prices, k) {
  for (var i = 0; i < prices.length - 1; i++) {
    for (j = 0; j < prices.length - i - 1; j++) {
      if (prices[j] > prices[j + 1]) {
        var temp = prices[j];
        prices[j] = prices[j + 1];
        prices[j + 1] = temp;
      }
    }
  }
  var money = k;
  var count = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] <= money) {
      count++;
      money -= prices[i];
    }
  }
  return count;
}

console.log(maximumToys([15, 3, 7, 2, 9, 4], 15)); // 3
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)); // 4
console.log(maximumToys([1, 2, 3, 4], 7)); // 3
console.log(
  maximumToys(
    [
      52952808,
      39586066,
      70403274,
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
