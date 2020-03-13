/*
============
Total Primes
============

[INSTRUCTIONS]
totalPrimes adalah sebuha function yang menerima 1 parameter berupa number.
function akan mereturn sebuah value dari hasil total prima yang didapat

[EXAMPLES]
input : 3


process: [2, 3, 5] --> 2 + 3 + 5 = 10
output: 10

input : 5
process: [2, 3, 5, 7, 11] --> 2 + 3 + 5 + 7 + 11 = 10
output: 28

[RULES]
- WAJIB menggunakan pseudocode/ algoritma
- DILARANG menggunakan REGEX
*/

/*
Your Pseudocode here

*/

function totalPrimes(num) {
  if (num === 0) return num;
  var prime = [];
  var count = 1;
  var seq = 2;
  while (count <= num) {
    var isPrime = true;
    for (var i = 2; i < seq; i++) {
      if (seq % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      prime.push(seq);
      count++;
    }
    seq++;
  }
  var total = 0;

  for (var i = 0; i < prime.length; i++) {
    total += prime[i];
  }
  return total;
}

console.log(totalPrimes(3)); // 10
console.log(totalPrimes(5)); // 28
console.log(totalPrimes(10)); // 129
console.log(totalPrimes(100)); // 24133
console.log(totalPrimes(0)); // 0
