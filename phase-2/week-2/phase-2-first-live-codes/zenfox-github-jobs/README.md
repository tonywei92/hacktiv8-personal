# Zen Fox - Live Code 1

Pada live code kali ini, kalian diminta untuk membuat aplikasi
menggunakan client-server model.

Untuk membuat aplikasi ini mengharuskan kalian untuk mengakses 3rd party
API, bacalah dokumentasi API yang diberikan dengan detail. API
Documentation nya ada pada link [berikut](https://jobs.github.com/api).

Fork repo `???`, kemudian buatlah 2 folder dalam repo tersebut, `client`
dan `server`. Setelah selesai, buat pull request dengan title nama
lengkap kalian (ex: Dimitri Wahyudiputra) dan berikan comment
environment variables apa saja yang kalian gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kalian
diperbolehkan untuk tidak membuat controller di server. Apabila kalian
membuat routing nya di dalam 1 file router/index.js juga diperbolehkan.
- File HTML telah disediakan, boleh menggunakan template ini, boleh juga
menggunakan template sendiri asalkan layout-nya sama.
- Nama database **harus** `zen_fox_live_code_1`

### Summary
* Aplikasi ini memungkinkan user untuk mendapatkan job list dan
  menyimpan (bookmark) job yang dianggap menarik oleh user.
* User harus login terlebih dahulu untuk dapat menyimpan job list
  tersebut.
* Aplikasi ini dibuat SPA (Single Page Application) DAN **harus
  reactive**.  Apabila tidak reactive, -10 point.


## Release 1 - Authentication

### Server - Register (10)

Buatlah endpoint untuk register dengan ketentuan sebagai berikut:

- route:
  - `POST /register`
- request:
  - body:
    - `{ email: 'dimitri@mail.com', password: 'secret' }`
- response:
  - `201`: `{ _id: ObjectId(''), email: 'dimitri@mail.com', password:
    'HashedPassword' }`

Email bersifat unique, jadi tidak boleh ada email yang sama
di dalam database.

Untuk melakukan hash terhadap password, kamu diperbolehkan menggunakan
package apa saja. **TIDAK PERLU** mengimplementasikan fitur ini di
*client-side*.

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

## Release 2 - Get Job List (10)

### Client

Tampilkan job list di halaman web kamu. Gunakan GitHub Jobs API
**tanpa** parameter apapun untuk mendapatkan initial state.

Lihatlah contoh di template untuk mengetahui data apa saja
yang harus ditampilkan.

Diperbolehkan untuk menggunakan package apapun untuk melakukan request
ke GitHub Jobs API.

## Release 3 - Filter Job List (20)

### Client

Todo:

- Buat fitur untuk mem-filter semua job yang ada di GitHub dengan
  parameter `description` atau `location`. Ex: `description`:
`'javascript'`, `location`: `'sf'`.
- Untuk filteringnya, **dilarang** filter dari state yang ada di Vue.js.
  Harus melakukan request ke GitHub Jobs API lagi.

## Release 4 - Bookmark a Job (20)

### Server

Buat endpoint untuk menyimpan job yang dipilih user dengan ketentuan
sebagai berikut:

- route:
  - `POST /bookmarks`
- request
  - body
    - `{ job_id, type, url, company, location, title }`
  - headers
    - `{ access_token }`
- response
  - `201`: `{ _id: ObjectId(''), job_id, type, url, company, location,
    title }`

Note: `job_id` sifatnya unique, jadi user tidak bisa menyimpan lebih
dari 1 job dengan `job_id` yang sama (tidak ada data duplikat).

### Client

Todo:

- Implementasikan button `Bookmark` di setiap job yang kamu dapatkan
  dari GitHub Jobs API.
- Tampilkan bookmark list milik user yang sedang login

## Release 5 - Delete a bookmark (25)

### Server

Buat endpoint untuk menghapus bookmark milik user dengan ketentuan
sebagai berikut:

- route:
  - `DELETE /bookmarks/:id`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ _id: ObjectId('') }`

Note: Pastikan user tidak bisa menghapus bookmark milik user lain.
Silakan tulis logicnya di middleware.

### Client

Implementasikan button `Delete Bookmark` di setiap bookmark yang
dimiliki oleh user.
