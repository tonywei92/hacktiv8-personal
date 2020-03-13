# POLYNOMINAL #
###### estimasi waktu: 20 Menit

Diberikan sebuah fungsi polynominal yang akan menerima sebuah input berupa string yang berbentuk `aljabar` contoh `2x + 2xy + 3x + 4y` dan akan mengembalikan nilai berupa bilangan yang sudah disederhanakan berdasarkan koefisiennya menjadi `5x + 2xy + 4y`

**Rules:**
  - tidak ada operator lain selain `+`
  - tidak perlu diurutkan hasilnya jadi apabila pada test case adalah `4+12a+3b` sedangkan jawaban kamu `12a+3b+4` ini sudah benar
  - apabila bilangan tidak punya koefisien contoh `5` maka tampilkan `5`, jika bilangan tidak pny angka tp punya koefisien sepert `ab` maka tampilkan `ab`
```javascript
  console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
  console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
  console.log(polynominal('a+2a+3a+4a+5a')) // 15a
  console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
  console.log(polynominal('1')) // 1
  console.log(polynominal('a'))  // a
```

***CONTOH CARA MENDAPATKAN JAWABAN***
```
Apabila input yang diberikan adalah "3a+3ab+2a+1+2ab+b"
  - Kumpulkan dulu semua angka yang memiliki koefisien yang sama 
    => (3a + 2a) + (3ab + 2ab) + (b) + (1)
  - Dijumlahkan antara angka yg punya koefisien yang sama
    => (5a) + (5ab) + (b) + (1)
  - Sehingga hasil akhir menjadi = "5a+5ab+b+1"
```