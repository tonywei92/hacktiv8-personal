/*
=================================
Max Subset Sum
=================================

[INSTRUCTION]
Diberikan array bilangan bulat, tentukan jumlah maksimum bila dua nilai didalamnya dijumlahkan!


[EXAMPLE]
- Bila array adalah [-2, 1, 3, -4, 5], maka nilai maksimum adalah 8 karena dua nilai yang
dapat menghasilkan nilai maksimum adalah 3 + 5

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
*/

function maxSubsetSum(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (j !== i) {
        if (arr[i] + arr[j] > max) {
          max = arr[i] + arr[j];
        }
      }
    }
  }
  return max;
}

console.log(maxSubsetSum([-2, 1, 3, -4, 5])); //8
console.log(maxSubsetSum([-1, 2, 5, 7])); //12
console.log(
  maxSubsetSum([
    943,
    3893,
    43,
    33,
    394,
    384843,
    3849464,
    5725474,
    27,
    485947,
    474262
  ])
);
// 9574938
