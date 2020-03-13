# Data Visualization - Bar Chart

> ⏰ Time Estimation: ~45 mins

Buatlah sebuah function bernama `generateBarChart` yang menerima satu parameter berupa array of number. function `generateBarChart` akan membuat sebuah visualisasi bar chart di log sesuai dengan nilai isi array.

Nilai tertinggi di bar chart bukan selalu 9, melainkan nilai tertinggi dari array tersebut.

**Asumsi untuk soal ini adalah number dalam array yang diinput hanya antara 0 - 9!**

Contoh untuk input [3, 6, 4, 7, 2]:

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
