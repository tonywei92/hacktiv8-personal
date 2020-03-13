# LIVE-CODE-WEEK 4

> **estimasi waktu: ⏰  160 minutes**

Dalam era teknologi yang makin berkembang, semakin banyak platform yang membuka wadah untuk menggalang dana berupa donasi online 

Kali ini kita akan membuat aplikasi untuk situs penggalangan dana online dengan menggunakan express + sequelize


**Notes:**

- Desain tampilan tidak perlu sesuai, yang penting feature dioptimalkan sesuai dengan requirement yang diminta.
- Wajib menggunakan port **3000**
- Selain node_modules, config juga di .gitignore



------



### Release 0

Buatlah model `Campaign`:

- `name`: STRING
- `description`: STRING
- `location`: STRING
- `timeLimit` : DATE
- `donationTarget` : INTEGER 
- `virtualAccount` : STRING
- `verified`: BOOLEAN


Buatlah model `Donation`:

- `name`: STRING
- `totalDonation`: INTEGER
- `paidDate`: DATE
- `message` : STRING
- `paid` : BOOLEAN



### Release 1

`Campaign` dan `Season` memiliki hubungan one-to-many, 1 `Campaign` punya banyak `Donation`, 1 `Donation` hanya dimiliki oleh 1 `Campaign`. Buatlah migrasi baru untuk menambahkan kolom baru dan memenuhi releasi `Campaign` dan `Donation` dan buat assosiasinya.



### Release 2

Buatlah migrasi baru untuk memindahkan kolom `virtualAccount` dari Model `Campaign` ke Model `Donation`.



### Release 3

Jika release sebelumnya sudah selesai, lakukan seeding

- untuk table `Campaigns` dengan menggunakan data `campaignSeeds.json`
- untuk table `Donations` dengan menggunakan data `DonationSeeds.json`.



------

***Routes yang perlu dibuat adalah sebagai berikut:***

| method | routes                        | detail                                                       |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| GET    | /                             | Homepage                                                     |
| GET    | /campaigns                  | List `Campaign` yang tersedia                              |
| GET    | /campaigns/:campaignId    | Menampilkan detail `Campaign` beserta form untuk menambahkan `Donation` baru pada `Campaign` tersebut. |
| GET    | /campaigns/delete/:campaignId | Membatalkan `Campaign`                                       |
| POST    | /donations/:campaignId    | Menambahkan `Donation` baru pada `Campaign` |
| GET    | /donations                    | List `Donation` yang sudah ada                               |
| GET    | /donations/verify/:donationId       | Mengubah status `paid` pada donation menjadi true dan mengisi `paidDate` |
| GET    | /donations/delete/:donationId     | Menghapus donation |
------



### Release 4

Tampilkanlah daftar campaign yang tersedia pada routing  `GET /campaigns`

Untuk setiap campaign akan tersedia tombol verify jika statusnya belum verified atau tombol donate jika statusnya sudah verified



### Release 5

Pada model `Campaign` buatlah instance method `getCollectedAmount` untuk memperoleh total donasi yang telah diperoleh oleh satu campaign. Diperoleh dari penjumlahan tiap `Donation` dengan status `paid` pada campaign tersebut.

Routing  `GET /campaign/:campaignsId` akan menampilkan detail dari `Campaign` sesuai dengan id pada params.

**notes: Jika status campaign belum ter `verified` maka user akan di redirect kehalaman depan/home**

Daftar donatur yang terdapat pada halaman ini merupakan `Donation` dengan status `paid`

Lalu buat juga form untuk membuat `Donation` pada campaign tersebut.

Kolom-kolom input harus sesuai dengan contoh!!!



### Release 6

Routing `POST /donations/:campaignId` akan membuat `Donation` baru pada  `Campaign` dengan id sesuai dengan params.

Status `paid` secara default akan bernilai `false` saat `Donation` pertama kali dibuat.

Isi field `virtualAccount` didapat dari `5555-${CampaignId}-${namaDonatur}`

Buatlah validasi-validasi berikut ini pada model `Donation`:

- field `totalDonation` pada `Donation` memiliki nilai minimal `1000` rupiah. Message yang harus ditampilkan adalah: **Minimum donation is Rp. 1000**.
- Nama pemberi donasi tidak boleh kosong. Message yang harus ditampilkan adalah: **Please input your name**.

Buatlah hooks untuk melakukan validasi berikut pada saat menambahkan `Donation` :
- sebelum melakukan donasi harus dipastikan `Campaign` yang akan diberikan donasi memiliki `timeLimit` masih berlaku (lebih dari atau sama dengan hari sekarang)



### Release 7

Pada routing `GET /donations` tampilkanlah daftar `Donation` yang telah ada.

Untuk setiap donation yang memiliki status `paid` false maka akan menampilkan tombol verifikasi dan delete

Untuk donation yang memiliki status `paid` true maka menampilkan tulisan 'verified'



### Release 8

Buatlah routing `GET /donations/verify/:donationId` yang berguna untuk mengubah status `paid` pada donation manjadi 'true' dan juga mengisi status `paidDate` menjadi tanggal sekarang



### Release 9

Routing `GET /donations/delete/:donationId` akan menghapus Donation



### Release 10

Buatlah helpers function berikut ini : 
- Format uang mengubah parameter menjadi format rupiah (misal : 10000 menjadi Rp.10.000)
- getPercentage mengubah parameter yang diberikan menjadi persen (gunakan getPercentage pada view yang menampilkan detail campaigns , persentase didapat dari jumlah `Donation` dengan field `paid` true dibagi dengan targetDonation yang dituju pada sebuah campaign)


# lvcodew4
