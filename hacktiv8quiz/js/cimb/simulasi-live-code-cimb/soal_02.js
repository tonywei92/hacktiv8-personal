/*
==================
Number Processing
==================

[INSTRUCTION]
Terdapat function numberProcessing yang menerima sebuah parameter berupa array,
function akan mencari nilai min , max, dan rata -rata, serta mengelompokan angka ganjil dan genap , lalu menggabungkannya menjadi string

[EXAMPLE]
input: [1, 3, 5, 1, 2, 8, 10, 0, 3]
output: "Min: 0, Max: 10, Avg: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"


[RULES]
- Wajib menggunakan Pseudocode
- Tidak boleh menggunakan Function bawaan Math apapun.
- Jika mean dalam bentuk desimal, bulatkan kebawah.

*/

function numberProcessing(numberArr) {
  var min = numberArr[0];
  var max = 0;
  var sum = 0;
  var even = [];
  var odd = [];
  for(var i = 0; i<numberArr.length; i++){
    if(numberArr[i]<min){
      min = numberArr[i];
    }
    else{
      max = numberArr[i];
    }
    sum+= numberArr[i];
    if(numberArr[i]%2===1){
      odd.push(numberArr[i]);
    }
    else{
      even.push(numberArr[i]);
    }
  }

  var avg = sum / numberArr.length;
  var remain = avg % 1;
  return `Min: ${min}, Max: ${max}, Avg: ${avg - remain}, Odds: ${odd.join('-')} Evens: ${even.join('-')}`;
  
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Avg: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
