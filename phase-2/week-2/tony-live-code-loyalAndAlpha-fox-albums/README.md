## Live Code 1 - Phase 2

Kali ini kamu diminta untuk membuat aplikasi menggunakan client-server model.
Aplikasi yang akan kamu buat adalah aplikasi untuk menyimpan `favorite albums` milik user.

Untuk membuat aplikasi ini mengharuskan kamu untuk mengakses 3rd party
API, bacalah dokumentasi API yang diberikan dengan detail.

Fork repo ini, kemudian buatlah 2 folder dalam repo tersebut, `client`
dan `server`. Setelah selesai mengerjakan, buat pull request dengan title nama
lengkap kamu (ex: Irsyah Mardiah) dan berikan comment
environment variables apa saja yang kamu gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

## Summary

Beberapa fitur utama dari aplikasi yang kita namakan saja FavAlbum ini adalah sebagai berikut:

* Pengguna dapat melakukan pencarian nama artist dan mengeluarkan list album yang telah dikeluarkan oleh artist tersebut
* User harus login terlebih dahulu untuk dapat menyimpan album
  tersebut.
* Aplikasi ini dibuat SPA (Single Page Application) DAN **harus reactive**. Apabila tidak reactive, -10 point.
* Routes **HARUS SESUAI** dan menggunakan PORT 3000 pada server, apabila tidak sesuai -10 point
* Pengguna dapat menyimpan data album (ke favorites) dari artis yang telah di-search
* Pengguna dapat menghapus data album (favorites) yang telah disimpan

**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kamu
  diperbolehkan untuk tidak membuat controller di server. Apabila kamu
  membuat routing nya di dalam 1 file routes/index.js juga diperbolehkan.
- File HTML telah disediakan, boleh menggunakan template ini, boleh juga
  menggunakan template sendiri asalkan layout-nya sama.
- Nama database **harus** `batch_fox_live_code_1` (e.g. alpha_fox_live_code_1)

## Releases

### Release 0: Read 3rd Party API's Documentation!

API Documentation nya ada pada link [berikut](https://www.theaudiodb.com/api_guide.php).

Sebelum memulai _coding_, sebaiknya coba dulu API yang kira-kira perlu kamu akses dengan menggunakan tool seperti [Postman](https://getpostman.com) untuk mendapatkan gambaran API apa saja dan bagaimana cara penggunaannya.

### Release 1: Registration (10)
Buatlah endpoint untuk register dengan ketentuan sebagai berikut:

- route:
  - `POST /register`
- request:
  - body:
    - `{ email: 'jasonMraz@mail.com', password: 'secret' }`
- response:
  - `201`: `{ _id: ObjectId(''), email: 'jasonMraz@mail.com', password: 'HashedPassword' }`

Email bersifat unique, jadi tidak boleh ada email yang sama
di dalam database.

### Release 2: Login (15)

#### Server
Buatlah endpoint untuk login sesuai dengan ketentuan sebagai berikut:

- route:
  - `POST /login`
- request:
  - body
    - `{ email: 'jasonMraz@mail.com', password: 'secret' }`
- response:
  - `200`: `{ access_token: '...' }`

Gunakan package JWT untuk generate access token.

#### Client

- Buatlah fitur login di client-side. Apabila user tidak berhasil login, misalnya salah email/password akan menampilkan pesan error (No `alert()`!)
- Setelah berhasil login, maka form untuk login harus hilang, lalu
  muncul link/ button untuk logout.
- Semua fitur di aplikasi ini mengharuskan user untuk login terlebih
  dahulu, jadi jika belum login tidak akan muncul konten apapun di
  halaman webnya. ^^

### Release 3: Filter or search (20)

#### Server

Buatlah sebuah endpoint search yang fungsinya adalah untuk mencari nama
Artist dimana hasilnya adalah list album yang dimiliki oleh Artist tersebut. (data ini diambil dari 3rd Party API)

- route:
  - `GET /search/:artistName`
- request
  - headers
    - `{access_token}`
- response
  - `200`: `[{
      albumTitle,
      singer,
      yearReleased,
      description,
      coverAlbum
    }]`

#### Client
Tampilkan list album dari artis yang kamu input melalui server kamu (No page refresh!!)

### Release 4: List favorites (5)

Buatlah sebuah endpoint baru yang fungsinya untuk me-list album yang masuk dalam daftar favorites user yang sedang login

- route:
  - `GET /favorites`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `[{
      albumTitle,
      singer,
      yearReleased,
      description,
      coverAlbum
    }]`

### Release 5: Favorites (25)

#### Server

Buatlah sebuah endpoint baru yang fungsinya untuk menambahkan album ke list favorites dengan ketentuan:

- route:
  - `POST /favorites`
- request
  - body
    - `{
          albumTitle,
          singer,
          yearReleased,
          description,
          coverAlbum,
          userId
        }`
  - headers
    - `{ access_token }`
- response
  - `201`: `{ _id: ObjectId(''), albumTitle: '...', singer: '...', yearReleased: '...', description: '...', coverAlbum: '...' }`

**NOTE**
- Handle error untuk header tidak valid seperti Invalid access token (status: 400)
- Album tidak boleh duplikat (berdasarkan albumTitle)!
- Tampilan di client harus langsung ter-update ketika data berhasil ditambah dan tidak boleh refresh/reload.

#### Client
- Implementasikan button `Add to My Favorites` pada album yang kamu
  dapatkan dari server
- Setelah `Add to My Favorites` berhasil, tampilkan notifikasi sukses jika sukses dan error jika error.
- Tampilkan semua album koleksi favorit milik user yang sedang login.


### Release 6: Remove Favorites (25)
#### Server

Buat endpoint untuk menghapus album favorites milik user dengan ketentuan
sebagai berikut:

- route:
  - `DELETE /favorites/:id`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ _id: ObjectId('') }`

**Note:**
- Pastikan user tidak bisa menghapus album favorites milik user lain. Silakan tulis logicnya di middleware.
- Tampilan di client harus langsung ter-update ketika data berhasil dihapus dan tidak boleh refresh/reload.

#### Client

Implementasikan button `Remove` di setiap koleksi album favorites yang
dimiliki oleh user.
