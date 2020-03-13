<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 3

# Instructor's Lecture List

![MVC/SQLITE3/CALLBACK](https://img.shields.io/badge/Tech%20Stack-MVC%2FSQLITE3%2FCALLBACK-green.svg)

> ⏰ Time limit: **90 min**

Anda ditugaskan untuk membuat app sederhana untuk me-_manage_ pembagian lecture instruktur dengan _command-line_.

Sederhananya app ini mengizinkan kita untuk membagi lecture dengan tidak melebihi jumlah maksimal slot instruktur.

App ini akan dibangun menggunakan arsitektur `MVC`, `sqlite3` dan menggunakan `callback`.

### Release 0

Sebelum memulai lakukan `npm init` dan `npm install` untuk module yang dibutuhkan, lalu jalankan **setup** dan **seed** untuk memulai pengoperasian _SQL_.

Ada dua tabel yang akan digunakan, yaitu `instructors` dan `lectures`, berikut penjelasan masing-masing tabel:

#### Tabel `instructors`

| Field    | Description                         |
| -------- | ----------------------------------- |
| id       | ID instructor                       |
| name     | Nama instructor                     |
| maxslots | Maksimal lecture yang dapat diambil |

#### Tabel `lectures`

| Field      | Description                        |
| ---------- | ---------------------------------- |
| id         | ID lecture                         |
| title      | Judul lecture                      |
| done       | Nilai 1 bila lecture telah selesai |
| created_at | String date lecture dibuat         |

Buatlah interface pada `index.js` yg menerima _argument_ dari _command line_, beserta helpnya, berikut daftar _commands_-nya:
(Pastikan command line harus sama dengan yang ada di readme)

```
// menampilkan semua instructors
$ node index.js instructor:all

// menampilkan instructor (singular)
$ node index.js instructor:view <instructorId>

// menghapus instructor
$ node index.js instructor:delete <instructorId>

// menambah lecture
$ node index.js lecture:add <instructorId> <lectureTitle>

// menandai lecture telah diselesaikan
$ node index.js lecture:done <lectureId>


```

1. Buatlah fungsi untuk `Read` semua instructor:

```bash
$ node index.js instructor:all
[1] Tony, max: 5
[2] Semmi, max: 10
[3] Isro, max: 8
[4] Nadia, max: 18
```

2. Buatlah fungsi untuk `Update` lecture mengubah nilai done menjadi 1:

```
$ node index.js lecture:done 6
update lecture berhasil
```

### Release 1

Buatlah fungsi untuk `Create` lecture:

```bash
$ node index.js lecture:add 1 "JS Callback"
berhasil menambahkan lecture
```

Buatlah validasi jika jumlah lecture sudah melebihi kapasitas maxslots:

```
$ node index.js lecture:add 1 "Menangani Redudancy Data"
ERROR
-----
kapasitas slot instruktur penuh
```

Tampilkan pesan error bila id instructor tidak ditemukan:

```
$ node index.js lecture:add 9999 "File System Module"
Instructor tidak ditemukan
```

### Release 2

1. Buatlah perintah untuk menampilkan 1 instructor (singular) dan lecture-lecture yang sudah diambil:

```
$ node index.js instructor:view 1
Instructor: Tony
id: 1, title: JS Callback, created at: Wed Oct 16 2019
id: 2, title: JS Functions, created at: Wed Oct 16 2019
id: 3, title: MVC Concepts, created at: Wed Oct 16 2019
id: 4, title: File System Module, created at: Wed Oct 16 2019
id: 5, title: Windows Registry Expertise, created at: Wed Oct 16 2019
```

2. Buatlah perintah untuk menghapus instructor,
   Note: fungsi instructor:delete juga menghapus relasi pada tabel `lectures`

```bash
$ node index.js instructor:delete 1
berhasil menghapus instructor dan lecture terkait
```

```bash
node index.js instructor:delete 12321
ERROR
-----
instructor tidak ditemukan
```

### Release 3

1. Improvisasi perintah `instructor:view` dengan menampilkan sisa kapasitas slot instructor, dan tambahkan "check" apabila lecture telah selesai seperti contoh dibawah ini:

```bash
$ node index.js instructor:view 2
Instructor: Semmi, slots: 2/10
[√] id: 6, title: File System Module, created at: Wed Oct 16 2019
[ ] id: 7, title: Linux system basic, created at: Wed Oct 16 2019
```

~ goodluck ~
