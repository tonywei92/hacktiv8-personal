# E money Sistem
> ⏰ time estimation: 120 minutes

Kali ini kamu akan diminta membuat sebuah sistem E-Money seperti ovo dan gopay yang dapat digunakan untuk memesan ojek maupun memesan tiket dengan menggunakan konsep OOP (Object Oriented Programming).



----



## Release 0

Buatlah class `Person` yang memiliki properti:

- name : string
- email : string
- phone : string

Terdapat 2 jenis `Ticket`, yaitu:
- MovieTicket, dengan properti :
  - type : string ()
  - price : number (nilai selalu 50000)
  - ticketCode : string (nilai default 9 angka random)
  - status: string (nilai default 'booked')
  - title: string
  - orderedBy: string nomor telepon pemesan tiket

- EventTicket, dengan properti :
  - type : string
  - price : number (nilai selalu 300000)
  - ticketCode : string (nilai default 9 angka random)
  - status: string (nilai default 'booked')
  - title: string
  - orderedBy: string nomor telepon pemesan tiket

Untuk setiap jenis `Emoney` akan memiliki properti : 
- user : objek instance dari `Person`
- balance : number (saldo pengguna)

`Emoney` akan terbagi menjadi 2 jenis:
- Gopay
- Ovo

## Release 1 
Buatlah class `Company` yang memiliki properti:

- name : string
- users : pengguna yang terdaftar Emoney
pada perusahaan terkait


Buatlah method `registerUser` yang akan menambahkan user baru ke properti users, jika nama company adalah 'Gojek' maka user yang akan ditambahkan adalah instance dari class `Gopay`, sedangkan jika nama company adalah `Grab`  maka user yang akan ditambahkan adalah instance dari class `Ovo`, lalu me-`return` user baru tersebut.

**Perhatikan driver code dengan seksama!!!**

## Release 2

Untuk setiap `Emoney` akan terdapat method:
- topUp : befungsi untuk menambah balance Emoney sesuai nilai topUp
- orderRide : berfungsi untuk memesan kendaraan, menerima parameter distance. Harga dari orderRide adalah distance * 3000. 

**Perhatikan driver code dengan seksama!!!**

Pada `Emoney` dengan jenis `Gopay` akan tersedia method:
- orderTickets : orderTickets menerima parameter :
  - type(jenis `Tickets` yang akan dipesan bisa MovieTicket atau EventTicket)
  - title(judul nama `Ticket` yang dipesan)
  - quantity (jumlah tiket yang dipesan)

**Perhatikan driver code dengan seksama!!! Ingat default nilai dari `Ticket` adalah 'booked'**


## Release 3

Pada `Emoney` dengan jenis `Gopay` akan tersedia method `payTickets` :
- method ini berfungsi untuk membayar Ticket yang akan dipesan dan merubah status ticket menjadi 'paid' jika berhasil di bayar
- terdapat validasi yang akan mengecheck apakah tiket yang di order sesuai dengan phone number orang yang mengorder (dari perbandingan user phone dengan ticket orderedBy)
- terdapat validasi yang akan mengechek balance dan harga tiket yang di order, jika uang tidak cukup akan menampilkan pesan seperti di driver code
- apabila sudah dibayar tidak boleh dibayar kembali

**Perhatikan driver code dengan seksama!!!**