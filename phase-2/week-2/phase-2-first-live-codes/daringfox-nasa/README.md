# Daring Fox - Live Code 1

Pada live code kali ini, kamu diminta untuk membuat aplikasi
menggunakan client-server model.

Untuk membuat aplikasi ini mengharuskan kamu untuk mengakses 3rd party
API, bacalah dokumentasi API yang diberikan dengan detail. API
Documentation nya ada pada link [berikut](https://api.nasa.gov/api.html#apod).

Fork repo ini, kemudian buatlah 2 folder dalam repo tersebut, `client`
dan `server`. Setelah selesai mengerjakan, buat pull request dengan title nama
lengkap kamu (ex: Dimitri Wahyudiputra) dan berikan comment
environment variables apa saja yang kamu gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

### Summary

- Aplikasi ini memungkinkan user untuk mendapatkan random picture/video dan menyimpan
  picture/video yang disukai oleh user (favorites).
- User harus login terlebih dahulu untuk dapat menyimpan picture/video
  tersebut.
- Aplikasi ini dibuat SPA (Single Page Application) DAN **harus
  reactive**. Apabila tidak reactive, -10 point.
- Routes **HARUS SESUAI** dan PORT 3000, apabila tidak sesuai -10 point


**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kamu
  diperbolehkan untuk tidak membuat controller di server. Apabila kamu
  membuat routing nya di dalam 1 file routes/index.js juga diperbolehkan.
- File HTML telah disediakan, boleh menggunakan template ini, boleh juga
  menggunakan template sendiri asalkan layout-nya sama.
- Nama database **harus** `daring_fox_live_code_1`

## Release 1 - Authentication

### Server - Register (10)

Buatlah endpoint untuk register dengan ketentuan sebagai berikut:

- route:
  - `POST /register`
- request:
  - body:
    - `{ email: 'dimitri@mail.com', password: 'secret' }`
- response:
  - `201`: `{ _id: ObjectId(''), email: 'dimitri@mail.com', password: 'HashedPassword' }`

Email bersifat unique, jadi tidak boleh ada email yang sama
di dalam database.

Untuk melakukan hash terhadap password, kamu diperbolehkan menggunakan
package apa saja. **TIDAK PERLU** mengimplementasikan fitur ini di
_client-side_.

### Server - Login (7.5)

Buatlah endpoint untuk login sesuai dengan ketentuan sebagai berikut:

- route:
  - `POST /login`
- request:
  - body
    - `{ email: 'dimitri@mail.com', password: 'secret' }`
- response:
  - `201`: `{ access_token: '...' }`

Gunakan package JWT untuk generate access token.

### Client - Login (7.5)

Todo:

- Buatlah fitur login di client side. Apabila user tidak berhasil
  login, misalnya salah email/password, akan menampilkan pesan error (No
  `alert()`!).
- Setelah berhasil login, maka form untuk login harus hilang, lalu
  muncul link/ button untuk logout.
- Semua fitur di aplikasi ini mengharuskan user untuk login terlebih
  dahulu, jadi jika belum login tidak akan muncul konten apapun di
  halaman webnya. ^^

## Release 2 - Fetch the picture/video (20)

### Server
Buat endpoint untuk mengambil data picture/video dari 3rd party API secara random. Data yang diambil tanggalnya random dari tanggal 1 - 8 Mei 2019

- route:
  - `GET /astronomyPic`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ copyright,
      date,
      explanation,
      media_type,
      title,
      url
    }`


### Client

Tampilkan picture/video yang kamu dapat dari 3rd party API melalui server kamu dan
implementasikan button untuk `Generate` picture/video baru (No page refresh ya!).

## Release 3 - Add to My Favorites (25)

### Server

Buat endpoint untuk menyimpan picture/video yang dipilih user dengan ketentuan
sebagai berikut:

- route:
  - `POST /favorites`
- request
  - body
    - `{ title, date, media_type, url }`
  - headers
    - `{ access_token }`
- response
  - `201`: `{ _id: ObjectId(''), apod }`

Note: date sifatnya unique, jadi user tidak bisa menyimpan picture/video dengan tanggal yang sama (tidak ada data duplikat).

### Client

Todo:

- Implementasikan button `Add to My Favorites` di picture/video yang kamu
  dapatkan dari 3rd party API.
- Setelah `Add to My Favorites` berhasil, `Generate` picture/video baru.
- Tampilkan semua picture/video favorit milik user yang sedang login.

## Release 4 - Delete a favorite (30)

### Server

Buat endpoint untuk menghapus picture/video favorit milik user dengan ketentuan
sebagai berikut:

- route:
  - `DELETE /favorites/:id`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ _id: ObjectId('') }`

Note: Pastikan user tidak bisa menghapus picture/video favorit milik user lain.
Silakan tulis logicnya di middleware.

### Client

Implementasikan button `Remove` di setiap picture/video favorit yang
dimiliki oleh user.
