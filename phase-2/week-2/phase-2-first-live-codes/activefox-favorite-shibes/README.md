# Active Fox - Live Code 1

Pada live code kali ini, kamu diminta untuk membuat aplikasi
menggunakan client-server model.

Untuk membuat aplikasi ini mengharuskan kamu untuk mengakses 3rd party
API, bacalah dokumentasi API yang diberikan dengan detail. API
Documentation nya ada pada link [berikut](https://shibe.online/).

Fork repo ini, kemudian buatlah 2 folder dalam repo tersebut, `client`
dan `server`. Setelah selesai mengerjakan, buat pull request dengan title nama
lengkap kamu (ex: Dimitri Wahyudiputra) dan berikan comment
environment variables apa saja yang kamu gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

### Summary

- Aplikasi ini memungkinkan user untuk mendapatkan gambar-gambar anjing (shibe)
  dan menyimpan gambar shibe yang disukai oleh user (favorites).
- User harus login terlebih dahulu untuk dapat menyimpan gambar shibe
  tersebut.
- Aplikasi ini dibuat SPA (Single Page Application) DAN **harus
  reactive**. Apabila tidak reactive, -10 point.

**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kamu
  diperbolehkan untuk tidak membuat controller di server. Apabila kamu
  membuat routing nya di dalam 1 file router/index.js juga diperbolehkan.
- File HTML telah disediakan, boleh menggunakan template ini, boleh juga
  menggunakan template sendiri asalkan layout-nya sama.
- Nama database **harus** `active_fox_live_code_1`

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
  - `{ access_token: '...' }`

Gunakan package JWT untuk generate access token.

### Client - Login (7.5)

Todo:

- Buatlah fitur login di client side. Apabila user berhasil login, akan
  menampilkan pesan berhasil login, apabila user tidak berhasil login,
  misalnya salah email/password, akan menampilkan pesan error (No
  `alert()`!).
- Setelah berhasil login, maka form untuk login harus hilang, lalu
  muncul link/ button untuk logout.
- Semua fitur di aplikasi ini mengharuskan user untuk login terlebih
  dahulu, jadi jika belum login tidak akan muncul konten apapun di
  halaman webnya. ^^

## Release 2 - Get Shibes (20)

### Server

Buatlah endpoint untuk mendapatkan 4 (empat) URL random yang mengarah ke gambar
shibe dengan ketentuan sebagai berikut:

- route:
  - `GET /shibes`
- request:
  - headers
    - `{ access_token }`
- response
  - `200`: `['IMAGE_URL', 'IMAGE_URL', 'IMAGE_URL', 'IMAGE_URL']`

Note: Gunakan 3rd party API yang sudah di-mention diawal untuk mendapatkan image
url. Diperbolehkan menggunakan package apapun untuk melakukan request ke 3rd
party API.

### Client

Tampilkan semua gambar shibe yang kamu dapatkan dari server di halaman web kamu.
Lihatlah contoh di template yang diberikan oleh instruktur untuk referensi
menampilkan gambarnya.

## Release 3 - Add to My Favorites (25)

### Server

Buat endpoint untuk menyimpan gambar anjing yang dipilih user dengan ketentuan
sebagai berikut:

- route:
  - `POST /favorites`
- request
  - body
    - `{ imageURL }`
  - headers
    - `{ access_token }`
- response
  - `201`: `{ _id: ObjectId(''), imageURL }`

Note: `imageURL` sifatnya unique, jadi user tidak bisa menyimpan lebih
dari 1 gambar dengan `imageURL` yang sama (tidak ada data duplikat).

### Client

Todo:

- Implementasikan button `Add to My Favorites` di setiap gambar yang kamu
  dapatkan dari 3rd party API.
- Tampilkan semua gambar favorit milik user yang sedang login.

## Release 4 - Delete a favorite (30)

### Server

Buat endpoint untuk menghapus gambar favorit milik user dengan ketentuan
sebagai berikut:

- route:
  - `DELETE /favorites/:id`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ _id: ObjectId('') }`

Note: Pastikan user tidak bisa menghapus gambar favorit milik user lain.
Silakan tulis logicnya di middleware.

### Client

Implementasikan button `Remove From My Favorites` di setiap gambar favorit yang
dimiliki oleh user.
