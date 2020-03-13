# LIVE-CODE-WEEK 4
**estimasi waktu: ⏰ 150 menit**

Sebuah negara hukum mengharuskan adanya penegakan hukum yang adil. Untuk itu dibutuhkan adanya sistem pengadilan yang dapat menyelesaikan dan memutuskan perkara-perkara hukum baik terkait perdata maupun pidana.

Kali ini kita akan membuat aplikasi untuk menerima laporan atau keluhan masyarakat dengan menggunakan teknoloqi sequelize dan express

Wajib menggunakan nama database: daring_fix_live_code dan Port: 3000

**Tampilan tidak perlu sesuai, yang penting feature dan tampilan di optimalkan**


### Release 0
Buatlah table `Court`:
- name: string
- location: string
- noReport: string

Buatlah table `Report`:
- title: string
- description: string
- status: string
- prosecutor: string
- defendant: string
- issueDate: string

### Release 1
Satu `Court` bisa memiliki banyak `Report`, buatlah hubungan antara keduanya dan tambahkan migrasi baru untuk melengkapi hubungan keduanya.

### Release 2
**Terjadi kesalahan model table!**
Buatlah migrasi baru untuk melakukan:
- mengubah tipe data issueDate dari string menjadi date

### Release 3
Lakukan seeding untuk table `Court` dengan menggunakan data `initialCourt.json`
Gunakan fs untuk membantu melakukan seeding tersebut.

### Release 4
Buatlah Routes dengan detail sebagai berikut:

| method | routes | detail |
| -------| -------| -------|
| GET | / | Halaman home |
| GET | /courts | List `Court` yang tersedia |
| GET | /courts/:courtId | Halaman detail `Court` beserta `Report` yang terdapat pada `Court` tersebut |
| GET | /reports/:reportId | Halaman detail `Report` |
| POST | /reports/:courtId | Membuat `Report` baru |
| POST | /reports/edit/:reportId | Memodifikasi `Report` yang sudah dibuat  |
| GET | /reports/setStatus/:reportId | Mengubah status `Report` menjadi diterima atau ditolak |


### Release 5
Buatlah form pada routing GET `/courts/:courtsId` dengan format sesuai contoh applikasi yang disediakan (Tag html yang digunakan harus sama dengan contoh). Buatlah halaman `POST /courts/:reportId` untuk membuat report baru. Ketika `Report` baru dibuat maka defaultValue dari `status` adalah pending.

### Release 6
Ketika membuat `Report` baru, column noReport akan otomatis terisi dengan format:
`<3digitCourtID>-<ThnBlnTgl>-<3idNewReport>`
co:
001-20190417-002

Gunakan hooks untuk menyelesaikan release ini. Pikirkan method `hooks` apa yang tepat untuk menyelesaikan release ini.

penjelasan:
jika digitCourt atau idReport tidak memiliki 3 angka, maka akan menambahkan 0 didepannya. (7 menjadi 007)


### Release 7
Pada routing GET `/courts` tampilkan juga jumlah laporan dan pada routing GET `/courts/:courtId` tampilkan juga total masing-masing report dengan status `pending`, `reject`, dan `accept`. Pikirkan apakah untuk menyelesaikan release ini menggunakan `helpers`, `class method`, dan `instance method`.

### Relase 8
Buatlah validasi-validasi berikut pada model `Report`
- `title` minimal harus 5 karakter dengan message `Minimum title input is 5 Character`
- input `defendant` dan `prosecutor` tidak boleh sama. Message yang ditampilkan: `Prosecutor input cannot be same with defendant`
- `issueDate` tidak boleh sebelum hari ini. Message yang ditampilkan: `Date input must be today or before 2019-04-25`



### Release 9
Buatlah halaman detail report pada routing `GET /reports/:reportId` yang akan menampilkan detail report. **Semua data input sudah harus terpopulate didalam form**. Buatlah halaman `POST /reports/edit/:reportId` untuk mengupdate sesuai dengan input form.

### Release 10
Buatlah helpers untuk memberi warna pada setiap status report yang berbeda
- "pending", gunakan warna kuning (#fff9c4)
- "rejected", gunakan warna merah (#ef9a9a)
- "accepted", gunakan warna hijau (#c8e6c9)

### Release 11
Buatlah helpers untuk mendapatkan selisih tanggal, antara tanggal hari ini dengan tanggal issueDate pada report.
co: 8 days ago

### Release 12
Buatlah routing GET `/reports/setStatus/:reportId` yang akan mengupdate status pada report tersebut menjadi `accepted` atau `rejected`.