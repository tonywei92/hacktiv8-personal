# Find The Missing Letter

#### Time Estimation (30 Minutes)

Pada permainan kali ini, kalian diminta untuk mencari **huruf yang hilang** dari suatu rangkaian huruf.

## Release 0

Terdapat rangkaian huruf yang berurutan dan menjadi sebuah input seperti contoh dibawah:

```javascript
const input = 'ABDF'
```

Urutan dari rangkaian huruf diatas adalah

```
A -> B -> D -> F
```


- Dari rangkaian huruf diatas, bandingkan setiap huruf dengan huruf disampingnya. 
- Antara `A` dan `B` tidak ada huruf yang hilang. 
- Selanjutnya, antara `B` dan `D` terdapat huruf yang hilang, yaitu `C`.
- Selanjutnya, antara `D` dan `F` terdapat huruf yang hilang, yaitu `E`. 
- Pengecekan dilakukan hingga akhir rangkaian huruf.
- Maka, huruf yang hilang dari rangkaian huruf diatas adalah `C` dan `E`.

Buatlah sebuah fungsi yang dapat mencari huruf-huruf yang hilang dari rangkaian huruf yang dikirimkan.


**Notes**
- Huruf dalam rangkaian tersebut adalah huruf kapital.
- Hanya ada 1 huruf yang hilang diantara 2 huruf yang dibandingkan.


## Release 1

Bagaimana jika rangkaian huruf tidak berurutan seperti `ABDF` di contoh pertama?

Misal, rangkaian huruf seperti dibawah ini.

```javascript
const input = 'GIAXZ'
```

Urutan dari rangkaian huruf diatas adalah,

```
 G -> I -> A -> X -> Z
```

Mari kita coba bahas setiap urutan nya

- Antara `G` dan `I` terdapat huruf yang hilang yaitu `H`
- Antara `I` ke `A` memiliki huruf yang hilang lebih dari satu, maka dianggap tidak ada huruf yang hilang.
- Antara `A` ke `X` memiliki huruf yang hilang lebih dari satu, maka dianggap tidak ada huruf yang hilang.
- Lakukan pengecekan hingga akhir rangkaian huruf.
- Maka, huruf yang hilang dari rangkaian huruf diatas adalah `H` dan `Y`.

Sesuaikanlah fungsi yang sudah dibuat di release sebelumnya agar bisa menghandle requirement yang diminta pada release 1.
