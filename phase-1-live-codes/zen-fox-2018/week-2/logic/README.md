# DATA VISUALIZATION 
> ⏰ Time Estimation: ~30 mins

Pada challenge kali ini, kamu diminta untuk menampilkan data yang telah tersedia kedalam bentuk array multidimensi. Data yang akan ditampilkan adalah jumlah stock yang tersedia berdasarkan harinya.

## RELEASE 0 
Buatlah board dengan bentuk sebagai berikut dengan ***rules sebagai berikut :***
  - Board merupakan array multidimensi dengan format tampilan **harus sama persis dengan dicontoh**
  - Nilai Sumbu Y Maksimum pada board didapatkan dari jumlah **stock terbanyak pada data ditambah dengan 2**
  - Nilai Sumbu Y Minimum selalu dimulai dari 1
  - Nilai Sumbu X Maksimum pada board didapatkan dari properti **day yang terbesar pada data ditambah dengan 2**
  - Nilai Sumbu X Minimum selalu dimulai dari 1
  - Berdasarkan contoh dibawah karena pada data `stock` terbanyak adalah 3 sehingga pada board sumbu Y Maksimum adalah 5 dan `day` terbesar adalah 3 maka sumbu X Maksimum adalah 5
```javascript
const data = [{
  stock: 2,
  day: 1
}, {
  stock: 3,
  day: 3
}, {
  stock: 1,
  day: 5
}]
generateChart(data)

/* OUTPUT
  [ 
    [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ 'x', '1', '2', '3', '4', '5', '6', '7' ] 
  ]
*/
```
## RELEASE 1 
Setelah berhasil menampilkan board, maka board tersebut harus diisi berdasarkan keterangan data yang diberikan. Berikut ***rules pengisian data :***
  - `Stock` merupakan sumbu y pada board
  - `Day` merupakan sumbu x pada board
  - Apabila contoh data yang dimasukan adalah stock berjumlah 1 dan pada day ke 5, maka pada board terdapat pada posisi y = 1 dan x = 5. Silahkan lihat contoh pada board
  - Icon atau simbol yang kamu masukan kedalam board tidak memiliki ketentuan.
```javascript
const data = [{
  stock: 2,
  day: 1
}, {
  stock: 3,
  day: 3
}, {
  stock: 1,
  day: 5
}]

generateChart(data)
/* OUTPUT
  [ 
      "Y" => ini adalah sumbu Y
    [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '3', ' ', ' ', '#', ' ', ' ', ' ', ' ' ],
    [ '2', '#', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '1', ' ', ' ', ' ', ' ', '#', ' ', ' ' ],
    [ 'x', '1', '2', '3', '4', '5', '6', '7' ] "X" => ini adalah sumbu X
  ]
*/
```

## RELEASE 2
Setelah berhasil mengisi data, kamu diminta untuk menampilkan dengan **rules sebagai berikut :**
  - `U` atau Up berarti dari data saat ini ke data setelahnya bergerak keatas satu langkah
  - `R` atau Right berarti dari data saat ini ke data setelahnya bergerak kekanan satu langkah
  - `D` atau Down berarti dari data saat ini ke data setelahnya bergerak kebawah satu langkah
  - Pergerakan yang diutamakan adalah antara `U` atau `D` sehingga apabila ada pergerakan yang diutamakan adalah menyamakan posisi `Y` terlebih dahulu bergerak keatas atau kebawah kemudian menyamakan posisi `X` dengan bergerak kesamping kanan
```javascript
const data = [{
  stock: 2,
  day: 1
}, {
  stock: 3,
  day: 3
}, {
  stock: 1,
  day: 5
}]

generateChart(data)
/* OUTPUT
  [ 
    [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '3', 'U', 'R', '#', ' ', ' ', ' ', ' ' ],
    [ '2', '#', ' ', 'D', ' ', ' ', ' ', ' ' ],
    [ '1', ' ', ' ', 'D', 'R', '#', ' ', ' ' ],
    [ 'x', '1', '2', '3', '4', '5', '6', '7' ] 
  ]
*/
```