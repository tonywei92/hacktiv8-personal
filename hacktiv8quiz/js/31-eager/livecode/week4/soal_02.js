/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string , 
function ini akan membalik elemen array, string yang berada di dalam elemen array juga akan dibalik jika panjang string GENAP

[EXAMPLE]
input: ['hari', 'senin', 'makan', 'sushi', 'enak']
proses: membalik isi array, dan membalik elemen array yang panjang katanya genap
output: [ 'kane', 'sushi', 'makan', 'senin', 'irah' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
*/

function doubleReverse(arr) {
  //your code here
}

console.log(doubleReverse(['hari', 'senin', 'makan', 'sushi', 'enak']));
// [ 'kane', 'sushi', 'makan', 'senin', 'irah' ]
console.log(doubleReverse(['winter', 'is', 'coming']));
// [ 'gnimoc', 'si', 'retniw' ]
console.log(doubleReverse(['valar', 'morghulis', 'valar', 'dohaeris']));
//[ 'sireahod', 'valar', 'morghulis', 'valar' ]
console.log(doubleReverse([]))
// invalid input parameter