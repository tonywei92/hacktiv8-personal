# Nearest dan farthest #
#### estimasi waktu: 40 Menit

sebuah fungsi boardDistance menerima satu parameter berupa string.
Dalam string tersebut akan tersedia:
- hanya satu karakter `M`, 
- beberapa karakter `T`, dan 
- sisanya karakter `-`.

String tersebut akan di proses menjadi sebuah board yang ukurannya **simetris** misalnya 4x4, 5x5, 10x10, etc. Panjang string tersebut akan pas membentuk board yang simetris.

### Release 0
Buatlah sebuah board simetris dari data yang disediakan.

### Example
input: 
```javascript
  boardDistance('------------------------TTMTT-----------------------------------------------------------------------');
```

output: 
```javascript
  [ 
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', 'T', 'T', 'M', 'T', 'T', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ] 
  ]
```

### Release 1
Dari board tersebut, bisa dihitung jarak antara karakter `M` dengan karakter `T`. Kita akan mengubah karakter `T` terdekat menjadi `N`, kita juga akan mengubah karakter `T` terjauh menjadi `F`.

Jika terdapat `T` terdekat/ terjauh lebih dari satu:
- ambil titik terdekat yang pertama
- ambil titik terjauh yang terakhir 

### Example
input: 
```javascript
  boardDistance('------------------------TTMTT-----------------------------------------------------------------------');
```

output: 
```javascript
  [ 
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', 'T', 'N', 'M', 'T', 'F', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ] 
  ]
```

Perhatikan, `T` terdekat telah berubah menjadi `N` dan `T` terjauh berubah menjadi `F`

<center>>>Selamat Mengerjakan<<</center>
