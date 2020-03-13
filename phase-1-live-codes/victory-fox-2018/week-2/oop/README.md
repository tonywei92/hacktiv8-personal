# **Asian Games**

> ⏰ Time Estimation: ~120 mins

### Summary

Membuat simulasi acara asian games 2018 yang diikuti oleh 5 negara yang akan
bertanding pada 3 cabang olahraga. Aplikasi ini dapat menampilkan klasemen
perolehan medal dari setiap negara.

### Release 0

5 negara siap untuk bertanding pada gelaran asian games 2018 yang diadakan di
jakarta dan palembang tahun ini. Ke lima negara tersebut adalah:

- Indonesia
- Singapore
- Malaysia
- Korea
- Japan

Setiap negara yang berpartisipasi memiliki jumlah medali

- **0** medali emas
- **0** medali perak
- **0** medali perunggu

Buatlah class-class yang dapat memenuhi kebutuhan diatas dan relasi antara class
tersebut.

### Release 1

Asian Games tahun ini membuka 3 cabang olahraga yang dapat diikuti oleh setiap
negara, yaitu:

- Marathon
- Tennis
- Karate

Setiap negara mengirimkan pemain untuk setiap cabang olahraga dengan statistik
sebagai berikut:

1. Indonesia
   - Marathon -> 3 orang
   - Tennis -> 1 orang
   - Karate -> 2 orang
2. Singapore
   - Marathon -> 1 orang
   - Tennis -> 0 orang
   - Karate -> 4 orang
3. Malaysia
   - Marathon -> 1 orang
   - Tennis -> 1 orang
   - Karate -> 2 orang
4. Korea
   - Marathon -> 4 orang
   - Tennis -> 4 orang
   - Karate -> 1 orang
5. Japan
   - Marathon -> 0 orang
   - Tennis -> 1 orang
   - Karate -> 3 orang

Buatlah sebuah properties `participants` pada setiap negara yang berisi jumlah
peserta yang mengikuti cabang cabang olahraga yang tersedia

#### Example

```javascript
console.log(indonesia.participants)
// Marathon 3 orang, Tennis 1 orang, Karate 2 orang

console.log(singapore.participants)
// Marathon 1 orang, Karate 4 orang
```

### Release 2

Buatlah class `Games` dimana dalam class tersebut memiliki sebuah fungsi
`register` yang akan menerima satu parameter untuk mendaftarkan negara negara
yang akan mengikuti gelaran asian games.

```javascript
  games.register([ negara negara yang akan mengikuti asian games])
```

### Release 3

Dalam class `Games` yang sudah kita buat tadi buatlah sebuah fungsi `compete`
yang akan menerima satu parameter cabang olahraga mana yang akan
dipertandingkan.

#### contoh

```javascript
games.compete('marathon')
```

Yang harus dilakukan ketika fungsi ini dipanggil adalah

- Tampilkan keseluruhan jumlah atlit pada setiap negara yang bertanding pada
  cabang olahraga tersebut
  ```
    "Participants: 3 People from Indonesia, 1 People from Singapore, 1 People from Malaysia, 4 People from Korea "
  ```
- Dari 9 participant yang mengikuti lomba marathon tentukan siapa saja
  memenangkan medali `emas` `perak` dan `perunggu` dengan sistem random
- Tambahkan jumlah medali `emas` `perak` dan `perunggu` kepada negara yang
  berhasil mendapatkan medali
- Tampilkan pemenang dari setiap medali yang didapat
  ```
    Winner: emas : indonesia, perak: indonesia, perunggu: singapore
  ```

### Release 4

Dalam class `game` tersebut buatlah sebuah method `standings` yang akan
menampilkan urutan negara negara pemilik medali dimulai dari negara yang
memiliki banyak medali sampai negara yang memiliki sedikit medali.

```javascript
;`
	Indonesia: 9 medali ( 5 Emas, 3 Perak, 1 Perunggu )
	Korea: 8 medali ( 3 Emas, 4 Perak, 1 Perunggu )
  Jepang: 7 medali ( 1 Emas, 5 Perak, 1 Perunggu )
	Singapore: 2 medali ( 0 Emas, 2 Perak, 0 Perunggu )
  Malaysia: 1 medali ( 0 Emas, 0 Perak, 1 Perunggu )
`
```
