<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 3

# Movie Ticket Manager

![MVC/SQLITE3/CALLBACK](https://img.shields.io/badge/Tech%20Stack-MVC%2FSQLITE3%2FCALLBACK-green.svg)

> ⏰ Time limit: **90 min**

Anda ditugaskan untuk membuat app sederhana untuk me-_manage_ penjualan tiket dengan _command-line_.

Sederhananya app ini mengizinkan kita untuk menjual tiket film dengan adanya limitasi batas max seats (jumlah kursi).

App ini akan dibangun menggunakan arsitektur `MVC`, `sqlite3` dan menggunakan `callback`.

### Release 0

Sebelum memulai lakukan `npm init` dan `npm install` untuk module yang dibutuhkan, lalu jalankan **setup** dan **seed** untuk memulai pengoperasian _SQL_.

Ada dua tabel yang akan digunakan, yaitu `movies` dan `tickets`, berikut penjelasan masing-masing tabel:

#### Tabel `movies`

| Field    | Description               |
| -------- | ------------------------- |
| id       | ID Film                   |
| code     | Kode film                 |
| name     | Judul film                |
| price    | Harga satuan tiket film   |
| maxSeats | Jumlah maksimal kursi     |
| status   | Status film (OPEN/CLOSED) |

#### Tabel `tickets`

| Field        | Description                          |
| ------------ | ------------------------------------ |
| id           | ID tiket film (auto increment)       |
| movieId      | Foreign key menunjuk ke tabel movies |
| ticketCode   | Kode tiket (Unik)                    |
| customerName | Nama Konsumen                        |
| phoneNumber  | Nomor hp customer                    |

Buatlah interface pada `index.js` yg menerima _argument_ dari _command line_, beserta helpnya, berikut daftar _commands_-nya:
(Pastikan command line harus sama dengan yang ada di readme)

```
// menampilkan semua film
$ node index.js movie:all

// menutup film (menandakan film telah berakhir)
$ node index.js movie:close <movieId>

// membeli tiket film
$ node index.js movie:buy <movieId> <name> <phone> <money> <qty>

// menampilkan satu film dengan tiket-tiketnya
$ node index.js movie:view <movieId>

// menghapus film
$ node index.js movie:delete <movieId>
```

1. Buatlah fungsi untuk `Read` semua movie:

```bash
$ node index.js movie:all
Movie List
==========
[CLOSED] Terminator 2
[OPEN] Pulp Fiction
[OPEN] Kill Bill
[OPEN] Django
[OPEN] The Chronicle of Javascript Callback
```

2. Buatlah fungsi untuk `Update` movie, fungsi `movie:close` digunakan untuk merubah status film dari `OPEN` menjadi `CLOSED`

```bash
$ node index.js movie:close 1

SUCCESS
=======
berhasil menutup film dengan id 1

$ node index.js movie:close 100
ERROR
=======
Film tidak ditemukan
```

### Release 1

Buatlah fungsi untuk `Create` movieTicket:

```bash
$ node index.js movie:buy 1 Andre 080090099 1000000 3
SUCCESS
=======
berhasil membuat ticket
```

Perintah diatas akan membuat record movieTicket sebanyak 3 record sesuai dengan inputan parameter `qty`-nya. berikut contoh hasil di database-nya:
![](tblMovieTickets.png)

Note: ticketCode diambil dari `movies.code` dan 5 angka random

Buatlah validasi jika uang yang dibayar tidak mencukupi total harga dari tiket yang dibeli.

```
node index.js movie:buy 1 Joni 0909090909 1000 3
ERROR
=====
Maaf uang anda tidak cukup untuk membeli tiket ini. harga tiket satuan film Terminator 2 adalah Rp.20000
```

Bila status film sudah menjadi status `CLOSED`, maka tiket sudah tidak dapat dibeli

```
$ node index.js movie:buy 1 Richman 080989999 100000000 2
ERROR
=====
Maaf film ini sudah tidak ditayangkan (sudah closed)
```

Tampilkan pesan error bila id movie tidak ditemukan

```
node index.js movie:buy 999 Richman 080989999 100000000 10
ERROR
=====
Film dengan id 999 tidak tersedia
```

### Release 2

1. Buatlah perintah untuk menampilkan 1 movie dan ticket yang sudah terbeli untuk movie tersebut:

```
$ node index.js movie:view 2

id: 2, Pulp Fiction
Ticket list:
1. PF55239 - Richman, contact: 080989999
2. PF35892 - Richman, contact: 080989999
3. PF70482 - Doni, contact: 080991232
4. PF30835 - Doni, contact: 080991232
```

```
$ node index.js movie:view 100
ERROR
=====
film tidak ditemukan
```

2. Buatlah perintah untuk menghapus movie,
   Note: fungsi movie:delete juga menghapus relasi pada tabel `movieTickets`

```bash
node index.js movie:delete 1
SUCCESS
=======
Film berhasil di hapus
```

```bash
node index.js movie:delete 100
ERROR
=====
film tidak ditemukan
```

### Release 3

1. Improvisasilah perintah `movie:all` dengan menampilkan (booked/maxSeats) seperti contoh dibawah ini:

```bash
node index.js movie:all
Movie List
==========
[OPEN] Pulp Fiction (3/8)
[OPEN] Kill Bill (1/5)
[OPEN] Django (1/4)
[OPEN] The Chronicle of Javascript Callback (30/30)
```

~ goodluck ~
