# Cari Teman
> ⏰ time estimation: 55 minutes

## Release 0

Buatlah function `generateBoard` yang akan mengenerate sebuah board array 2 dimensi yang berisi panah-panah yang arahnya random. Jumlah baris dan kolom dari board berdasarkan input pada function.

```javascript
let board = generateBoard(5, 4)
console.log(board)

// output
/*

[ [ '↓', '←', '→', '↑' ],
  [ '→', '↓', '←', '→' ],
  [ '↓', '↓', '↑', '↓' ],
  [ '←', '↑', '→', '↑' ],
  [ '←', '↑', '←', '←' ] ]

*/
```

## Release 1

Dengan asumsi ada 4 huruf (A, B, C, D) yang terletak pada setiap sudut seperti ilustrasi dibawah ini

```javascript
// ilustrasi posisi-posisi karakter
/*

[ [ 'A', '←', '→', 'B' ],
  [ '→', '↓', '←', '→' ],
  [ '↓', '↓', '↑', '↓' ],
  [ '←', '↑', '→', '↑' ],
  [ 'C', '↑', '←', 'D' ] ]

*/
```

Buatlah function `whoMeetWhom` yang menerima 2 parameter: `board` dan `maxSteps`.

Function ini akan menampilkan siapa bertemu dengan siapa setelah melalui arah-arah sesuai dengan arah panah sebanyak maksimal `maxSteps`


Notes:
  - Huruf-huruf A, B, C, D tidak perlu dimasukkan ke dalam board. Contoh diatas hanya sebagai ilustrasi bahwa yang di pojok kiri atas adalah A, di pojok kanan atas adalah B, dst.
  - Function akan langsung menampilkan karakter-karakter yang tercepat bertemu dengan karakter lainnya.
  - Jika tidak ada yang bertemu, maka akan menampilkan info **No one meets each other**
  - Perhatikan dengan seksama driver code pada skeleton yang diberikan!

```javascript
whoMeetWhom(board, 6)

// output
// A meets D after 4 steps

// ilustrasi kenapa ada 4 steps:

/* 

posisi awal:
[ [ 'A', '←', '→', 'B' ],
  [ '→', '↓', '←', '→' ],
  [ '↓', '↓', '↑', '↓' ],
  [ '←', '↑', '→', '↑' ],
  [ 'C', '↑', '←', 'D' ] ]

step 1:
[ [ '↓', '←', '→', 'B' ],
  [ 'A', '↓', '←', '→' ],
  [ '↓', '↓', '↑', '↓' ],
  [ '←', '↑', '→', '↑' ],
  [ 'C', '↑', 'D', '←' ] ]
  
step 2:
[ [ '↓', '←', '→', 'B' ],
  [ '→', 'A', '←', '→' ],
  [ '↓', '↓', '↑', '↓' ],
  [ '←', '↑', '→', '↑' ],
  [ 'C', 'D', '←', '←' ] ]

step 3:
[ [ '↓', '←', '→', 'B' ],
  [ '→', '↓', '←', '→' ],
  [ '↓', 'A', '↑', '↓' ],
  [ '←', 'D', '→', '↑' ],
  [ 'C', '↑', '←', '←' ] ]

Pada step 4 A dan D bertemu

*/

```