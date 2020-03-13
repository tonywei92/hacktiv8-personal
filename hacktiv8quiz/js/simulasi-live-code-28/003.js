/* 
===================
Two Array Operation
===================

[INSTRUCTION]
Buatlah sebuah function yang dapat mengoperasikan bilangan - bilangan yang ada.
didalam 2 buah array sesuai dengan masing - masing indexnya.

diberikan 2 buah array yang akan dioperasikan 
- jika bilangan tersebut berada pada index yang genap, maka tambahkan (+)
bilangan pada index array yang ke satu dengan index array yang ke dua 
- jika bilangan tersebut berada pada index yang ganjil, maka kurangkan (-)
bilangan pada index array yang ke satu dengan index array yang ke dua 
- jika panjang ke dua array tidak sama,
maka masukkan saja bilangan - bilangan tersebut ke dalam hasilnya 

[EXAMPLE]
twoArrayOperation([1,2,3],[1,2,3])
array1 : [1, 2, 3]
          +  -  +
array2 : [1, 2, 3]
result : [2, 0, 6]

twoArrayOperation([12,34,11,23,12],[11,78,45,20,42])
array1 : [12, 34, 11, 23, 12]
            +   -   +   -   +
array2 : [11, 78, 45, 20, 34]
result : [23,-44, 56, 3, 46]

twoArrayOperation([-4, 5, 57, 33, -90, 0],[4, 2, 54, 24])
array1 : [-4, 5, 57, 33, -90, 0]
          +   -   +   -    +
array2 : [4,  2, 54, 24,  34]
result : [0,  3, 111, 9, -56, 0]
*/

function twoArrayOperation(arr1, arr2) {
  var arr1Len = arr1.length;
  var arr2Len = arr2.length;
  var max;
  var result = [];
  if (arr1Len > arr2Len) {
    max = arr1Len;
  }
  else {
    max = arr2Len;
  }

  for (var i = 0; i < max; i++) {

    if (arr2[i] === undefined) {
      result.push(arr1[i]);
    }
    else if (arr1[i] === undefined) {
      result.push(arr2[i]);
    }
    else {
      if (i % 2 === 0) {
        result.push(arr1[i] + arr2[i]);
      }
      else {
        result.push(arr1[i] - arr2[i]);
      }
    }
  }
  return result;

}

console.log(twoArrayOperation([-4, 5, 57, 33, -90, 0], [4, 2, 54, 24, 34])) // [ 0, 3, 111, 9, -56, 0]
console.log(twoArrayOperation([12, 34, 11, 23, 12], [11, 78, 45, 20, 42])) // [ 23, -44, 56, 3, 54 ]
console.log(twoArrayOperation([1, 2, 3], [1, 2, 3])) // [ 2, 0, 6 ]