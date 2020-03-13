# Bold Fox - Live Code 1

Pada live code kali ini, kamu diminta untuk membuat aplikasi
menggunakan client-server model.

Untuk membuat aplikasi ini mengharuskan kamu untuk mengakses 3rd party
API, bacalah dokumentasi API yang diberikan dengan detail. API
Documentation-nya ada pada link [berikut](https://favqs.com/api).

Fork repo ini, kemudian buatlah 2 folder dalam repo tersebut, `client`
dan `server`. Setelah selesai mengerjakan, buat pull request dengan title nama
lengkap kamu (ex: Dimitri Wahyudiputra) dan berikan comment
environment variables apa saja yang kamu gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

### Summary

- Aplikasi ini memungkinkan user untuk mendapatkan quote-quote
  dan menyimpan quote yang disukai oleh user (list quote).
- User harus login terlebih dahulu untuk dapat menyimpan quote
  tersebut.
- Aplikasi ini dibuat SPA (Single Page Application) DAN **harus
  reactive**. Apabila tidak reactive, -10 point.

**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kamu
  diperbolehkan untuk tidak membuat controller di server. Apabila kamu
  membuat routing nya di dalam 1 file router/index.js juga diperbolehkan.
- File HTML telah disediakan, gunakanlah template ini!
- Nama database **harus** `bold_fox_live_code_1`

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

Password harus minimal 5 karakter dan harus gabungan huruf dan angka

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
  - `{ access_token: '...' }`

Gunakan package JWT untuk generate access token.

### Client - Login (7.5)

Todo:

- Buatlah fitur login di client side. Apabila user berhasil login, akan
  menampilkan pesan berhasil login. Apabila user tidak berhasil login,
  misalnya salah email/password, akan menampilkan pesan error (No
  `alert()`!).
- Setelah berhasil login, maka form untuk login harus hilang, lalu
  muncul link/ button untuk logout.
- Semua fitur di aplikasi ini mengharuskan user untuk login terlebih
  dahulu, jadi jika belum login tidak akan muncul konten apapun di
  halaman webnya. ^^

## Release 2 - Get Quotes (20)

### Server

Buatlah endpoint untuk mendapatkan 4 quotes random dengan ketentuan
sebagai berikut:

- route:
  - `GET /quotes`
- request:
  - headers
    - `{ access_token }`
- response
  - `200`: `[{quote, author}, {quote, author}, {quote, author}, {quote, author}]`

Note: Gunakan 3rd party API yang sudah di-mention diawal untuk mendapatkan quote 
beserta author-nya. Diperbolehkan menggunakan package apapun untuk melakukan 
request ke 3rd party API.

**UNTUK MENDAPATKAN TOKEN API KEY DARI 3rd party API** kalian harus membuat akun
pada link yang sudah diberikan diatas. Kemudian kembali ke link yang telah diberikan,
pilihlah menu **My API Keys** untuk men-generate api key

### Client

- Tampilkan semua quote yang kamu dapatkan dari server di halaman web kamu.
Lihatlah contoh di template yang diberikan untuk referensi menampilkan quotes.

- Buat juga button untuk melakukan random get quotes kembali, dimana button ini
akan memanggil kembali route `GET /quotes`


## Release 3 - Add to My List (25)

### Server

Buat endpoint untuk menyimpan quote yang dipilih user dengan ketentuan
sebagai berikut:

- route:
  - `POST /quotes`
- request
  - body
    - `{ quote, author }`
  - headers
    - `{ access_token }`
- response
  - `201`: `{ _id: ObjectId(''), quote, author }`

Note: `quote` sifatnya unique, jadi user tidak bisa menyimpan lebih
dari 1 quote yang isinya sama (tidak ada data duplikat).

### Client

Todo:

- Implementasikan button/icon `heart_eyes` di setiap quote yang kamu
  dapatkan dari 3rd party API.
- Tampilkan semua quotes milik user yang sedang login.

## Release 4 - Delete a favorite (30)

### Server

Buat endpoint untuk menghapus quote favorit milik user dengan ketentuan
sebagai berikut:

- route:
  - `DELETE /quotes/:id`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ _id: ObjectId('') }`

Note: Pastikan user tidak bisa quote milik user lain.
Silakan tulis logicnya di middleware.

### Client

Implementasikan button/icon `dizzy_eyes` di setiap gambar favorit yang
dimiliki oleh user.
