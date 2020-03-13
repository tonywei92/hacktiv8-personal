#Snake and Ladder Sorting

diberikan sebuah array multidimensi yang berisi angka acak. 

tugas kalian adalah mengurutkan angka tersebut sesuai dengan urutan seperti board snake and ladder.
urutkan secara ascending ( dari kecil ke besar )

 ukuran array multidimensi ini tak harus persegi ( panjang dan lebar tak mesti sama  )

### Rule 
  
1. tidak boleh memakai array function apapun kecuali **push**


## Release 

Berikut adalah testcase 

**Test Case 1**

```javascript

// 4 * 3 
console.log(snakeLadderSorting([
   [6,4,5,12],
   [1,3,8,11],
   [9,2,7,13]
]));
/* [ 
     [ 9, 11, 12, 13 ], 
     [ 8, 7, 6, 5 ], 
     [ 1, 2, 3, 4 ] 
   ] 
*/
```

```javascript 
// 5 * 5 
console.log(snakeLadderSorting([
    [11,65,88,12,66],
    [18,55,33,24,78],
    [44,58,35,76,19],
    [35,67,90,19,25],
    [97,46,37,17,29],
]));
/*
[ [ 76, 78, 88, 90, 97 ],
  [ 67, 66, 65, 58, 55 ],
  [ 35, 35, 37, 44, 46 ],
  [ 33, 29, 25, 24, 19 ],
  [ 11, 12, 17, 18, 19 ] ]

*/

```
