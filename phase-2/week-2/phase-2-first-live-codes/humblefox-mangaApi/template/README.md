# Humble Fox - Live Code 1

Pada live code kali ini, kamu diminta untuk membuat aplikasi
menggunakan client-server model.

Untuk membuat aplikasi ini mengharuskan kamu untuk mengakses 3rd party
API, bacalah dokumentasi API yang diberikan dengan detail. API
Documentation nya ada pada link [berikut](https://humblemanga.docs.apiary.io).

Fork repo ini, kemudian buatlah 2 folder dalam repo tersebut, `client`
dan `server`. Setelah selesai mengerjakan, buat pull request dengan title nama
lengkap kamu (ex: Hary Dhimas Prakoso) dan berikan comment
environment variables apa saja yang kamu gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

### Summary

- Aplikasi ini memungkinkan user untuk mendapatkan daftar manga dan menyimpan
  manga yang disukai oleh user (collections).
- User harus login terlebih dahulu untuk dapat menyimpan manga
  tersebut.
- Aplikasi ini dibuat SPA (Single Page Application) DAN **harus
  reactive/reload**. Apabila tidak reactive, -10 point.

**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kamu
  diperbolehkan untuk tidak membuat controller di server. Apabila kamu
  membuat routing nya di dalam 1 file routes/index.js juga diperbolehkan.
- File HTML telah disediakan, boleh menggunakan template ini, boleh juga
  menggunakan template sendiri asalkan layout-nya sama.
- Nama database **harus** `humble_fox_live_code_1`

## Release 1 - Authentication

### Server - Register (10)

Buatlah endpoint untuk register dengan ketentuan sebagai berikut:

- route:
  - `POST /register`
- request:
  - body:
    - `{ email: 'd@mail.com', password: 'secret' }`
- response:
  - `201`: `{ _id: ObjectId(''), email: 'dimitri@mail.com', password: 'HashedPassword' }`

Email bersifat unique, jadi tidak boleh ada email yang sama
di dalam database.

Untuk melakukan hash terhadap password, kamu diperbolehkan menggunakan
package apa saja. **TIDAK PERLU** mengimplementasikan fitur register di
_client-side_.

### Server - Login (10)

Buatlah endpoint untuk login sesuai dengan ketentuan sebagai berikut:

- route:
  - `POST /login`
- request:
  - body
    - `{ email: 'd@mail.com', password: '12345' }`
- response:
  - `200`: `{ access_token: '...' }`

Gunakan package JWT untuk generate access token.

### Client - Login (10)

Todo:

- Buatlah fitur login di client side. Apabila user tidak berhasil
  login, misalnya salah email/password, akan menampilkan pesan error (No
  `alert()`!).
- Setelah berhasil login, maka form untuk login harus hilang, lalu
  muncul link/button untuk logout.
- Semua fitur di aplikasi ini mengharuskan user untuk login terlebih
  dahulu, jadi jika belum login tidak akan muncul konten apapun di
  halaman webnya. ^^

## Release 2 - Fetch the Mangas (20)

### Client

Tampilkan manga yang kamu dapat dari 3rd party API ke client (No page refresh ya!).
Proses fetch manga harus melewati server yang kita buat !

### Server
- route:
  - `GET /manga`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `[{ objectManga }, ...]`

## Release 3 - Add to My Collections (30)

### Server

Buat endpoint untuk menyimpan Manga yang dipilih user dengan ketentuan
sebagai berikut:

- route:
  - `POST /manga/collection/:id`
- request
  - headers
    - `{ access_token }`
- response
  - `201`: `{ 
      manga: {
          "description": String,
            "title": String,
            "url": String,
            "chapters_len": Number,
            "author": String,
            "_id": "generatedID_from_your_server"
      },
      message: "success add to collection"
   }`

notes: 
- dapatkan detail manga seperti description, title, url, chapters_len, author dari third api namun melalui server yang kalian miliki.
- Lakukan validasi untuk title manga ! Title manga yang akan disimpan haruslah unik.


### Client

Todo:

- Implementasikan button `Add to My Collection` di manga yang kamu
  dapatkan dari 3rd party API.
- Setelah `Add to My Collection` berhasil, tampilkan notifikasi sukses jika sukses dan error jika error.
- Tampilkan semua manga koleksi milik user yang sedang login jika button 'My Collection' di click.

## Release 4 - Delete a manga (20)

### Server

Buat endpoint untuk menghapus manga milik user dengan ketentuan
sebagai berikut:

- route:
  - `DELETE /manga/collection/:id`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ _id: ObjectId('') }`

Note: Pastikan user tidak bisa menghapus manga milik user lain.
Silakan tulis logicnya di middleware.

### Client

Implementasikan button `Remove` di setiap koleksi manga yang
dimiliki oleh user.
