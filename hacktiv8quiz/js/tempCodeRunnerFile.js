/*
=====================
Max Subset Sum
=====================

[INSTRUCTION]
Diberikan sebuah function yang menerima parameter array bilangan bulat. Dimana
function ini berfungsi untuk mengembalikan jumlah maksimum dari dua buah nilai
yang dijumlahkan didalam array tersebut


[EXAMPLE]
- Bila array adalah [-2, 1, 3, -4, 5], maka nilai maksimum adalah 8 karena dua nilai yang
dapat menghasilkan nilai maksimum adalah 3 + 5

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
3. dilarang menggunakan map, filter, reduce, apply
*/

function maxSubsetSum(arr) {
  // your code here

  var arr1 = [];
  for (var i = 0; i < arr.length; i++) {
    var maksimum = [];
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        var sum = 0;
        sum += arr[i] + arr[j];
        maksimum.push(sum);
      }
      var tmp = maksimum[0];
      if (tmp < sum) {
        tmp = sum;
      }
    }

    arr1.push(tmp);
  }

  // console.log(arr1)
  var banding = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (banding < arr1[i]) {
      banding = arr1[i];
    }
  }
  // var nilaiTiapArray = []
  // for(var i=0; i<arr1.length; i++){
  //   for(var j=0; j<arr1[i].length; j++){
  //     var smntr = arr1[i][0]
  //     if(smntr < arr1[i][j]){
  //       smntr = arr1[i][j]
  //     }
  //   }
  //   nilaiTiapArray.push(smntr)
  // }
  // console.log(nilaiTiapArray)
  // console.log(banding)
  return banding;
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
