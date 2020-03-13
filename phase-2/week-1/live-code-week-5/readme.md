# Phase 2 - Live Code 1

#### WAKTU : 150 Menit / 2,5 Jam

## Toko Comic Agung

Pada live code kali ini, kamu diminta untuk membuat aplikasi
menggunakan client-server model.

Fork repo ini, didalam repo ini terdapat 2 folder, `client`
dan `server`. Setelah selesai mengerjakan, buat pull request dengan title nama
lengkap kamu (ex: Hary Dhimas Prakoso) dan berikan comment
environment variables apa saja yang kamu gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

### Summary

- Aplikasi ini memungkinkan user untuk mendapatkan daftar komik dan mengupdate konten komik.
- User harus login terlebih dahulu untuk dapat mengupdate komik.
- Aplikasi ini dibuat SPA (Single Page Application) DAN **harus
  reactive/reload**. Apabila tidak reactive, -10 point.
- Wajib menggunakan sequelize dan postgre sebagai db

**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kamu
  diperbolehkan untuk tidak membuat controller di server. Apabila kamu
  membuat routing nya di dalam 1 file routes/index.js juga diperbolehkan.
- File HTML telah disediakan, boleh menggunakan template ini, boleh juga
  menggunakan template sendiri asalkan layout-nya sama.
- Nama database **harus** `p2_livecode_1`

## RELEASE 0 - Creating Migration, Table and Seeding

Jalankan migrasi dan seeder yang telah disediakan

## Release 1 - Authentication

### Server - Login

Buatlah endpoint untuk login sesuai dengan ketentuan sebagai berikut:

- route:
  - `POST /login`
- request:
  - body
    - `{ email: 'd@mail.com', password: '12345' }`
- response:
  - `200`: `{ access_token: '...' }`

Gunakan package JWT untuk generate access token.

### Client - Login

Todo:

- Buatlah fitur login di client side. Apabila user tidak berhasil
  login, misalnya salah email/password, akan menampilkan pesan error (No
  `alert()`!).
- Setelah berhasil login, maka form untuk login harus hilang, lalu
  muncul link/button untuk logout.
- Semua fitur di aplikasi ini mengharuskan user untuk login terlebih
  dahulu, jadi jika belum login tidak akan muncul konten apapun di
  halaman webnya. ^^

## Release 2 - Fetch the Comic

### Client

Tampilkan comic yang kamu dapat dari server ke client (No page refresh ya!).

### Server

- route:
  - `GET /comics`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `[{ objectcomic }, ...]`

## Release 3 - Update Comic

### Server

Buat endpoint untuk melakukan update pada comic yang dipilih user dengan ketentuan
sebagai berikut:

- route:
  - `PUT /comics/:id`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ comic: { "title": string, "author": string, "imageURL": string }, message: "success update comic" }`

notes:

- pastikan hanya user yang login yang bisa update comic

### Client

Todo:

- Implementasikan button `Edit comic` di daftar comic yang berhasil di fetch.
- Ketika button di click maka form untuk update muncul dibawah list comic.
- Ketika Comic yang akan di edit telah dipilih maka input form langsung berisi informasi dari comic yang akan di edit.
- Begitu juga jika kita click button `Edit comic` dari comic yang lain makan input formnya akan berubah sesuai dengan data dari comic yang terakhir di edit
- Pastikan semua form terisi dengan benar.
- Jika sudah disubmit maka form update akan hilang

## Release 4 - Register

### Server - Register

Buatlah endpoint untuk register dengan ketentuan sebagai berikut:

- route:
  - `POST /register`
- request:
  - body:
    - `{ name: 'Sukirno', email: 'd@mail.com', password: 'secret' }`
- response:
  - `201`: `{ access_token: '...' }`

Jika telah selesai melakukan Register maka endpoint akan mengembalikan access_token

### Client - Register

Buatlah tampilan Register yang berisi 3 kolom yang sesuai dengan kolom didalam database.

- Halaman Register ini dapat diakses dari halaman LOGIN dengan menambahkan button `Register` di halaman LOGIN
- Begitu juga sebaliknya di Halaman REGISTER juga ada Button `Login` untuk kembali ke halaman LOGIN

## Release 5 - Connect with 3rd Party API

kamu diminta untuk menggunakan API dari `https://randomuser.me/` untuk mendapatkan user secara random. dan di aplikasikan di halaman REGISTER

- Buatlah Button `Random User` dihalaman REGISTER.
- Fungsi button tersebut untuk mengisi form didalam halaman register dengan memanfaatkan API dari `https://randomuser.me/`
- Manfaatkanlah data yang didapat dari randomuser sesuai dengan field yang dibutuhkan.

_semua field yang kamu butuhkan untuk register ada didalam randomuser.me_
