
# Perkalian Matriks #
-----

**Penjelasan Perkalian Matriks**
Matriks adalah sekumpulan bilangan yang disusun secara baris dan kolom dan ditempatkan pada kurung biasa atau kurung siku. Ordo suatu matriks adalah bilangan yang menunjukkan banyaknya baris (m) dan banyaknya kolom (n).
contoh matriks : 
![alt text](https://2.bp.blogspot.com/-kJdk-SRsk_E/WY3_XB7JJ_I/AAAAAAAAAU4/fUMemoCL8nQRza2eSwKusYU0ZZ7UlTBhACLcBGAs/s320/contoh-menghitung-rumus-matriks-matematika.png)

penjelasan lengkap : 
[Perkalian Matriks](https://idschool.net/sma/perkalian-matriks-3-x-3-2-x-2-dan-m-x-n-x-n-x-m/)

**Syarat Perkalian Matriks** 
- Jumlah Kolom pada matriks pertama , harus sama dengan Jumlah Baris Matriks ke dua

### Release 0 ###
-----
Buatlah sebuah fitur atau function yang mengecek apakah jumlah Kolom pada matriks Pertama sama dengan jumlah baris pada matriks kedua. jika terdapat perbedaan keluarkan pesan : 
" Jumlah kolom pada matriks pertama tidak sama dengan jumlah  baris pada matriks ke dua  "
contoh:
```javascript

// 2 x 3
let m1 = [ 
    [2,3,3],  // --> 3
    [4,5,3]   // --> 3
] 

// 2 x 2 
let m2 = [
    [2,3], // --> 2
    [1,2] // --> 2 
]

console.log(matriksMultiply(m1,m2))
// " Jumlah kolom pada matriks pertama tidak sama dengan jumlah  baris pada matriks ke dua  "

```

Dan pastikan bahwa semua jumlah kolom pada suatu matriks sama semua 
contoh : 

```javascript

let m1 = [ 
    [2,3],  // --> 2
    [4,5]   // --> 2
] 

let m2 = [
    [2,3], // --> 2
    [1,2,2] // --> 3 // jumlah kolom berbeda dengan yg lainnya 
]

console.log(matriksMultiply(m1,m2))
// " jumlah kolom pada matriks ada yang tidak sama "

```

kedua matriks ini tidak valid untuk dikalikan karena dalam 1 matriks  yaitu variable m2 tidak memiliki jumlah kolom yang sama dengan yang lainnya  jika jumlah kolom disemua baris pada matriks tidak sama , maka keluarkan pesan : 

" jumlah kolom pada matriks ada yang tidak sama "

### Finish ###

contoh perkalian matriks : 
![alt text](https://idschool.net/wp-content/uploads/2018/03/Perkalian-Matriks-2-x-2.png)

contoh soal : 
```javascript

    let matriks1 = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    let matriks2 = [
        [6,5],
        [3,4],
        [2,1]
    ]

    console.log(matriksMultiply(matriks1,matriks2))

    /*[
        [(1*6)+(2*3)+(3*2), (1*5)+(2*4)+(3*1)], 
        [(4*6)+(5*3)+(6*2), (4*5)+(5*4)+(6*1)],
        [(7*6)+(8*3)+(9*2), (7*5)+(8*4)+(9*1)]
    ]

    [
        [18,16],
        [51,46],
        [84,76]
    ]*/
```
#### Syarat mengerjakan soal: #### 
- boleh memakai modular function
- buatlah test case lain bila diperlukan 