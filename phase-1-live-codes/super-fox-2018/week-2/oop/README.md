# Game Distribution Platform

> ⏰ Time Estimation: ~90 mins

## Game Time!
Buatlah simple distribution platform seperti [Steam](https://en.wikipedia.org/wiki/Steam_(software)) yang memungkinkan orang bisa membeli game tanpa harus memiliki CD/DVD game tersebut.

Kalian mempunyai tugas untuk membuat Object-Oriented Design untuk menyelesaikan masalah ini.

Fokus kita pada challenge ini adalah pada **jual**,**beli** game dan bagaimana user dapat memainkan game tersebut.

## Release 0
Buatlah fitur untuk membuat **Akun Baru**, dimana akun tersebut akan memiliki `name`, `email`, `balance` dan `games`.

Setiap akun akan bisa melakukan *Top Up* untuk menambahkan `balance` mereka.

Tentukan properti mana yang harus di-isi saat akun dibuat dan apakah ada *default value* untuk properti tertentu?

Buat juga fitur untuk membuat **Game** baru, dimana game tersebut akan memiliki properti `name` dan `price`. **Game** memiliki satu method yaitu `play()` yang akan menampilkan `'Now playing <gameName>...'`

## Release 1
*Not all online games are the same*

Semua game yang akan kalian buat akan memiliki method `play()`. Tetapi di kasus ini akan ada 1 game yang memiliki method tambahan. Nama game ini adalah `'Tekken'`. Game ini juga memiliki `name`, `price` dan `play()`. Yang membedakan adalah ketika function `play()` milik `'Tekken'` dipanggil maka akan menampilkan:
```javascript
'Now playing Tekken...'
'Make sure you have plugged in your joystick!'
```

Game ini juga akan memiliki fitur tambahan yaitu `pause()` yang akan menampilkan `'Tekken paused...'`

## Release 2
Buatlah fitur untuk **membeli** dan **menjual** game, jadi user bisa membeli game yang sudah kita buat dari fitur sebelumnya.

Aturan untuk beli game:
- Tentukan dulu apa **hubungan** yang dimiliki antara **User** dan **Game**. Apakah menggunakan metode *Aggregation* atau *Composition*?
- Tidak bisa membeli game jika uang tidak cukup
- Tampilkan `"Successfully bought <gameName> !"` ketika transaksi sukses

Aturan untuk jual game:
- Harga jual adalah setengah dari harga awal game (misalkan harga saat beli adalah `300,000`, maka akan terjual dengan harga `150,000`)
- Tampilkan `"<gameName> sold for <sellPrice>"` jika berhasil dijual
- Tampilkan `"You can't sell a free game"` jika game yang akan dijual adalah free game (`price === 0`)
- Tampilkan `"You don't have that game"` jika game yang akan dijual tidak ada di dalam list game milik user tersebut

## Release 3
*Play the game!*

Buatlah method `playGame(gameName)` agar **User** dapat memainkan game **miliknya** dengan aturan:
- Jika user memiliki game yang disebutkan lewat parameter function ini maka panggil function `play()` yang dimiliki game tersebut
- Jika tidak maka tampilkan `"You don't have that game"`

Masih ingat dengan game yang bisa di-pause? Buatlah method agar user bisa pause game yang sedang dimainkan, dengan aturan:
- Game hanya bisa di-pause jika sekarang sedang dimainkan. Jika game belum dimulai maka tidak bisa di-pause (tampilkan: `"You haven't started the game yet"`)
- Jika game sudah dimainkan, maka function ini akan menampilkan `"<gameName> paused..."`

## Finished?
- Lihat lagi alur *code* kamu, apakah sudah sesuai dengan yang diminta dan sudah efisien?
- Apakah *code* kamu sudah **DRY**?
