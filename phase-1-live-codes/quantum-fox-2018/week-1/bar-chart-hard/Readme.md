# Data Visualization - Bar Chart

> ⏰ Time Estimation: ~60 mins

# Release 0

Buatlah sebuah function bernama `generateBarChart` yang menerima satu parameter berupa array of number. function `generateBarChart` akan membuat sebuah visualisasi bar chart di log sesuai dengan nilai isi array.

Nilai tertinggi di bar chart bukan selalu 9, melainkan nilai tertinggi dari array tersebut.

**NOTE 1: Asumsi untuk soal ini adalah number dalam array yang diinput hanya antara 0 - 9!**

**NOTE 2: Fokus untuk membuat bar chart nya. Sumbu Y dan sumbu X jika tidak dibuat tidak masalah, namun akan lebih bagus apabila itu dapat membantu memastikan jawabannya.**

Contoh untuk input [3, 6, 4, 7, 2] versi lengkap:

```javascript
7|                III      
6|      III       III      
5|      III       III      
4|      III  III  III      
3| III  III  III  III      
2| III  III  III  III  III 
1| III  III  III  III  III 
0|-(3)--(6)--(4)--(7)--(2)-
```

Contoh untuk input [3, 6, 4, 7, 2] versi bar chart saja:

```javascript
               III      
     III       III      
     III       III      
     III  III  III      
III  III  III  III      
III  III  III  III  III 
III  III  III  III  III
```

## test cases

```javascript

generateBarChart([3, 6, 4, 7, 2]);
/*
7|                III      
6|      III       III      
5|      III       III      
4|      III  III  III      
3| III  III  III  III      
2| III  III  III  III  III 
1| III  III  III  III  III 
0|-(3)--(6)--(4)--(7)--(2)-
*/

generateBarChart([9, 8, 7, 0, 1, 2, 3]);
/*
9| III                               
8| III  III                          
7| III  III  III                     
6| III  III  III                     
5| III  III  III                     
4| III  III  III                     
3| III  III  III                 III 
2| III  III  III            III  III 
1| III  III  III       III  III  III 
0|-(9)--(8)--(7)--(0)--(1)--(2)--(3)-
*/

generateBarChart([1, 2, 3, 4, 5, 4, 3, 2, 1]);
/*
5|                     III                     
4|                III  III  III                
3|           III  III  III  III  III           
2|      III  III  III  III  III  III  III      
1| III  III  III  III  III  III  III  III  III 
0|-(1)--(2)--(3)--(4)--(5)--(4)--(3)--(2)--(1)-
*/
```