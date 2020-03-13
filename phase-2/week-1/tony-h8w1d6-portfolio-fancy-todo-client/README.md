# Semantic Web

Buatlah sebuah halaman web statis menggunakan HTML, CSS, JavaScript. Tema web
yang kalian buat bebas, boleh menggunakan design sendiri atau meniru website
yang menurut kalian bagus dan kalian suka.

Ikuti standard-standard penulisan markup HTML dari W3C
([https://www.w3.org/standards/semanticweb/](https://www.w3.org/standards/semanticweb/)).

Setelah itu silahkan validasi halaman web yang sudah kalian buat di
[https://validator.w3.org/](https://validator.w3.org/).

Hilangkan semua error, warning masih bisa ditoleransi, tapi usahakan minimalisir
sebaik mungkin. Perhatikan common sense-nya!

## Deadline
Week 2 - Senin 09:00

# Fancy Todo

Buatlah aplikasi Todo menggunakan Client-server model dengan spesifikasi sebagai
berikut:

- API Documentation yang meliputi : URLs, HTTP method, request, response
  (success dan error case)
- Membuat routes sesuai standar REST API
- CRUD endpoints untuk Todo (`name`, `description`, `status`, `due_date`)
- Register
- Login menggunakan email & password (menggunakan JWT)
- Sign in with 3rd APIs (Google/Twitter/Facebook/GitHub)
- Membuat authorization sehingga user hanya bisa melakukan CRUD terhadap
  todo-nya sendiri
- NO `alert();`! (Client)
- Make it fancy! Tambahkan 1 fitur atau lebih yang akan menjadikan aplikasi todo
  kamu menjadi unik dan berbeda. Misal, integrasikan dengan Google Calendar.
  (Ingat, tambahkan fitur seunik mungkin)

## Extras (Wajib untuk anak ngulang)
- Authenticated user bisa membuat project, dan invite/add member ke project
  tersebut.
- User dapat membuat todo di project yang sudah dipilih
- Todo yang ada di suatu project hanya bisa di read/write (CRUD) oleh project
  members.

## Kompetensi Backend
- REST API
- API Documentation
- API CRUD Todo + Authentication
- MongoDB + Mongoose

## Kompetensi Client
- jQuery + AJAX
- SPA (Single Page Application)

## Deadline
Week 2 - Senin 09:00

## Submission
Fork dari organization, lalu open pull request dengan title **NAMA LENGKAP
KAMU** (ex: Dimitri Wahyudiputra) dan assign ke buddy kamu jika sudah selesai.
Tambahkan comment yang berisi environment variables yang dipakai (beserta
valuenya), link deploy (jika ada), fitur tambahannya apa dan kendala saat
mengerjakan.