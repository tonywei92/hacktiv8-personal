# Arithmetic

> ⏰ Time Estimation: ~60 mins

***DRIVER CODE JANGAN DIRUBAH*** <br>
Arithmetic adalah ilmu hitung angka yang memiliki beberapa operasi seperti +,-,x,:

Buatlah function `countArithmetic()` yang akan menerima ***input*** sebuah string, dimana input tersebut terdiri dari serangkaian angka dan operasi matematika +,-,x,: <br>
Function ini akan menghasilkan result angkanya. Perhatikan bahwa operasi x dan : lebih diutamakan daripada operasi +,-.

Contoh ***input*** '30–18:6x2+19' : <br>
step 1 : 30–18:6x2+19 <br>
step 2 : maka, hitung dulu 18:6x2 nya, sehingga **ILUSTRASI** hitungannya menjadi : 30 - (18:6x2) + 19 <br>
step 3 : 30 - 6 + 19 <br>

result : 43  

### Contoh:

```javascript
console.log(countArithmetic('21+15:3-5x4+32'))  
//38

console.log(countArithmetic('2+100:5x4-48'))  
//34

console.log(countArithmetic('16x10:40+27'))  
//31

```
