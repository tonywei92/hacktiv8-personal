# Row Sum Odd Numbers

> ⏰ Time Estimation: ~60 mins


## Odd Triangle
```javascript
                  1
               3     5
             7    9    11
         13    15    17    19
       21    23    25    27    29
    31   33    35    37    39    41
 43    45    47   49    51    53    55
...
```


Terdapat sebuah segitiga, yang terrdiri dari kumpulan angka ganjil. segitiga tersebut memiliki index (terhitung dari atas) seperti:
baris-1: terdapat angka 1
baris-2: terdapat angka 3, 5
baris-3: terdapat angka 7, 9, 11



# Release 0
Buatlah sebuah function bernama `rowSumOddNumbers` yang menerima satu parameter berupa number. function `rowSumOddNumbers` akan menghitung jumlah angka yang ada sesuai dengan baris yang diinput.

> Tidak perlu membuat odd triangle untuk menyelesaikan problem ini

## test cases

```javascript
rowSumOddNumbers(1); // 1
// karena pada baris-1 hanya terdapat 1

rowSumOddNumbers(6); // 216
// karena pada baris-5 terdapat:
// 31, 33, 35, 37, 39, 41. sehingga total semuanya 216
```