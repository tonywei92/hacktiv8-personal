# Ternak Javascript

###Release 0

Buatlah sebuah fungsi untuk menghasilkan board yang berisikan list hewan yang didapatkan dari input parameter string

**ASUMSI HANYA TERDAPAT 4 JENIS HEWAN**
  - 'C' = 'Sapi' atau 'Cow'
  - 'D' = 'Domba' atau 'Sheep'
  - 'H' = 'Kuda' atau 'Horse'
  - 'P' = 'Babi' atau 'Pig'
```javascript
let input = 'CHCPSCSHHPSHCPPH'
console.log(generateBoard(input)))
/* OUTPUT
[ 
  [ 'Cow', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Cow', 'Sheep', 'Horse' ],
  [ 'Horse', 'Pig', 'Sheep', 'Horse' ],
  [ 'Cow', 'Pig', 'Pig', 'Horse' ] 
]
*/
```


###Release 1
Setelah mendapatkan board kamu diminta untuk memasukan semua hewan tersebut kedalam kumpulan kandang dengan ketentuan sebagai berikut:
  - Kandang yang akan kamu buat berbentuk **Multi Dimensional Array**
  - Jumlah maksimum hewan berjenis 'babi' didalam kandang ialah 3, lebih dari itu harus diletakan pada kandang yang baru atau array baru
  - Jumlah maksimum hewan berjenis 'kuda' didalam kandang ialah 2, lebih dari itu harus diletakan pada kandang yang baru atau array baru
  - Jumlah maksimum hewan berjenis 'sapi' didalam kandang ialah 2, lebih dari itu harus diletakan pada kandang yang baru atau array baru
  - Jumlah maksimum hewan berjenis 'domba' didalam kandang ialah 1, lebih dari itu harus diletakan pada kandang yang baru atau array baru

```javascript
let input = 'CHCPSCSHHPSHCPPH'
let board = generateBoard(input))
let cages = getCagesAnimals(board)

/* OUTPUT

[ 
  [ 'Cow', 'Horse', 'Cow', 'Pig', 'Sheep', 'Horse', 'Pig', 'Pig' ],
  [ 'Cow', 'Sheep', 'Horse', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Horse' ] 
]
*/
```
