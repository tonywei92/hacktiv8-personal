# Mountain View

> ⏰ Time Estimation: ~45 mins


## Release 0

Buatlah sebuah fungsi yang akan menerima tiga parameter
* heights => Merupakan Array dari tinggi dari gunung yang akan kita buat.
* landscapeHeight => Merupakan tinggi dari landscape yang akan menampung gunung gunung yang kita buat. 
* landscapeWidth => Merupakan lebar dari landscape yang akan menampung gunung gunung yang kita buat. 

Buatlah sebuah validasi untuk fungsi yang akan kalian buat dengan ketentuan:
* Tinggi dan lebar dari landscape yang akan dibuat haruslah sama.
* Pastikan Tinggi dan Lebar landscape cukup untuk menampung gunung yang akan kita buat.
  ( Misal tinggi gunung 3 maka tinggi minimumnya adalah 3 dan lebar minimumnya adalah 5)

```javascript
 function mountainView(heights, landscapeHeight, landscapeWidth) {
   // Coding disini
 } 
 console.log(mountainView([3], 6, 5)) // Lebar Landscape tidak cukup untuk gunung dengan tinggi 3

  console.log(mountainView([3, 4], 10, 10)) // Lebar Landscape tidak cukup untuk gunung dengan tinggi 3, 4

  console.log(mountainView([3], 5, 4)) // Tinggi Landscape dan Lebar Landscape tidak sama 
```

## Release 1

Buatlah array multidimensional berdasarkan `landscapeWidth` dan `landscapeHeight` yang dikirimkan sebagai parameter ketika fungsinya dipanggil. Isi semua data dengan `' '` terlebih dahulu.

```javascript
 function mountainView(heights, landscapeHeight, landscapeWidth) {
   // Coding disini
 } 
 console.log(mountainView([3], 5, 5)) 
 /*
 [ [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ] ]
 */
```

## Release 2

Pada release ini handle lah untuk membuat satu gunung yang akan kita masukkan didalam `landscape` yang sudah kita buat sebelumnya.
```javascript
 function mountainView(heights, landscapeHeight, landscapeWidth) {
   // Coding disini
 } 
 console.log(mountainView([3], 5, 5)) 
 /*
[ [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', '🏔', ' ', ' ' ],
  [ ' ', '🏔', ' ', '🏔', ' ' ],
  [ '🏔', ' ', ' ', ' ', '🏔' ] ]
 */
```


## Release 3

Pada release ini handle lah untuk membuat lebih dari satu gunung ke dalam `landscape` yang sudah kita buat sebelumnya.

```javascript
 function mountainView(heights, landscapeHeight, landscapeWidth) {
   // Coding disini
 } 
 console.log(mountainView([3, 4], 12, 12)) 
 /*
[ [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '🏔', ' ', ' ', ' ' ],
  [ ' ', ' ', '🏔', ' ', ' ', ' ', ' ', '🏔', ' ', '🏔', ' ', ' ' ],
  [ ' ', '🏔', ' ', '🏔', ' ', ' ', '🏔', ' ', ' ', ' ', '🏔', ' ' ],
  [ '🏔', ' ', ' ', ' ', '🏔', '🏔', ' ', ' ', ' ', ' ', ' ', '🏔' ] ]
 */
```