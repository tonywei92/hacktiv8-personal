# CALCULATE ALGEBRA
#### Time Estimation : 30 Menit
Calculate algebra adalah fungsi untuk menghitung bilangan aljabar yang akan menerima dua parameter berupa `equation` atau persamaan matematik dan `value` yang merupakan nilai yang akan disubsitusikan kedalam persamaan.

#### Rules
- Asumsi persamaan matematikan hanya penambahan dan memiliki satu koefisien berupa `X` saja

```javascript
  console.log(calculateAlgebra("2X^2+7X+1", 3)) // 40

  CARA PENYELESAIANNYA:
  
  Persamaan = "2X^2 + 7X + 1"
  nilaiX = 3
  
  1. Masukan nilaiX kedalam persamaan sehingga persamaan menjadi:
  Persamaan = "2(3^2) + 7(3) + 1"

  2. Sederhanakan semua bilangan yang memiliki pangkat yang ditandai dengan `^`. 
  Apabila pada bilangan terdapat tanda pangkat atau `^`, 
  maka nilainya dikalikan sebanyak pangkatnya. 
  Contoh `3^2` adalah 9 didapatkan `3 * 3`.

  3. Kalikan dan jumlahkan persamaan seperti contoh sebagai berikut:
    3a. persamaan = "2(9) + 7(3) + 1"
    3b. persamaan = "18 + 21 + 1"
    3c. final result = 40 // berupa number
```