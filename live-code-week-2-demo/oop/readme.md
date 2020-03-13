# OOP Adventure Park <img align="right" width="100" height="70" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">

> ⏰ time estimation: 120 minutes

Kali ini kamu akan diminta membuat sebuah sistem Kartu bermain di taman bermain seperti dufan bernama **Adventure Park**, anda mendaftarkan konsumen sebagai tamu VIP maupun regular, mengatur saldo serta dapat mengembalikan kartu apabila telah selesai bermain.

---

## Release 0

Buatlah class `Person` yang memiliki properti:

- name : string
- phone : string

Terdapat 4 jenis `Wahana`, yaitu:

- RollerCoaster, dengan properti :

  - name : string
  - price : number (nilai selalu 25000 )

- Seaworld, dengan properti :

  - name : string
  - price : number (nilai selalu 30000 )

- Bianglala, dengan properti :

  - name : string
  - price : number (nilai selalu 20000)

- Theater, dengan properti :
  - name : string
  - price : number (nilai selalu 50000)

Untuk setiap jenis `WahanaCard` akan memiliki properti :

- type : string (vip/regular)
- user : object Person
- balance : number

`WahanaCard` akan terbagi menjadi 2 jenis:

- VIPCard (harga: Rp. 500000)
- RegularCard (harga: Rp. 150000)

## Release 1

Buatlah class `WahanaPark` yang memiliki properti:

- rollerCoaster : objek wahana RollerCoaster
- seaWorld : objek wahana Seaworld
- theater : objek wahana Theater
- bianglala : objek wahan Bianglala
- customers: kumpulan objek WahanaCard

Buatlah method `register` yang akan menambahkan person baru ke properti customers, jika kelas kartu adalah 'VIP' maka person yang akan ditambahkan adalah instance dari class `VIPCard`, bila jenis kartu adalah 'regular' maka person yang akan ditambahkan adalah instance dari class `RegularCard`, lalu me-`return` card baru tersebut.

Bila person yang mendaftar memiliki nomor hp yang sama pada daftar customer wahana, makan munculkan pesan error.

Bila person mendaftar kartu VIP dengan uang Rp.600000, maka kartu VIP memiliki balance (Rp.600000 - VIP price Rp.500000 = Rp.100000), gunakan pola yang sama untuk kartu Regular

**Perhatikan driver code dengan seksama!!!**

## Release 2

Untuk setiap `Wahana` akan terdapat method:

- checkIn: berfungsi untuk bermain pada wahana tersebut dan mengurangi saldo sesuai harga

ketentuan checkIn:

- VIP dapat bermain semua wahana dengan gratis
- Khusus wahana Theater tidak gratis untuk Regular maupun VIP.
- Validasi mengecek apabila saldo cukup untuk check-in ke wahana

**Perhatikan driver code dengan seksama!!!**

## Release 3

Pada kartu wahana terdapat fungsi `topup` untuk menambahkan saldo dan pada WahanaPark terdapat fungsi `returnCard` mengembalikan kartu dan menampilkan sisa saldo. Buatlah validasi mengecek apabila person sudah me-return kartu

**Perhatikan driver code dengan seksama!!!**
