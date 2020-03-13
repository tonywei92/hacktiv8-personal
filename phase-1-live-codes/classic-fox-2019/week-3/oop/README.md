# Amusement Park
> ⏰ Time Estimation: ~30 mins

Pada sebuah taman bermain pengunjung dapat bermain dengan membeli tiket terlebih dahulu melalui gate yang telah disediakan.

`Ticket` memiliki property ticketNumber, price dan type.
Terdapat 3 jenis tiket yang tersedia yaitu:

- `CinematicPass` untuk wahana cinematic, memiliki method `checkAccess` yang akan menampilkan pesan 'Tiket ini memiliki akses ke wahana Cinematic'.
- `DayPass` untuk semua wahana, memiliki method `checkAccess` yang akan menampilkan pesan 'Tiket ini memiliki akses ke semua wahana'.
- `MemberPass` memiliki propperty memberName dan memilik method checkAccess yang akan menampilkan pesan 'Tiket ini memiliki akses prioritas ke semua wahana' 

`Gate` memiliki property name dan ticketIn. 

### RELEASE 0 

  Buatlah class yang sesuai untuk semua jenis tiket yang tersedia

  ```
  CinematicPass

  ticketNumber: <nomor ticket dengan format 'cp'+6_digit_angka_acak>,
  price: 75000
  type: 'CinematicPass'

  DayPass

  ticketNumber: <nomor ticket dengan format 'dp'+6_digit_angka_acak>,
  price: 100000
  type: 'dayPass'

  MemberPass

  ticketNumber: <nomor ticket dengan format 'mp'+6_digit_angka_acak>,
  price: 120000
  type: 'memberPass'
  memberName: <nama_pelanggan>
  ```

### RELEASE 1

Buatlah class serta object `Gate` dengan data sbb:

1. GateA
name: 'Gate A'
ticketIn: []
1. GateB
name: 'Gate B'
ticketIn: []
1. GateC
name: 'Gate C'
ticketIn: []

### RELEASE 2

Buatlah method `buyTicket` pada class `Gate` yang menerima sebuah string tipe tiket yang ingin dibeli, uang yang dibayarkan dan string nama member(Opsional), yang akan membuat dan mengembalikan Object `Ticket` serta menyimpan datanya pada property ticketIn. 

```javascript
//membeli tiket Cinematic Pass
let ticket1 = GateA.buyTicket('cinematicPass', 80000)
/* output
tiket masuk : cinematic pass dengan nomor 'cp000001'
kembalian : Rp. 5000
*/
//membeli tiket Day Pass
let ticket2 = GateA.buyTicket('dayPass', 100000)
/* output
tiket masuk : day pass dengan nomor 'dp000002'
*/
//membeli tiket Member Pass
let ticket3 = GateA.buyTicket('memberPass', 150000, 'Daniel')
/* output
tiket masuk : member pass dengan nomor 'mp000003' atas nama Daniel
kembalian : Rp. 30000
*/
//membeli tiket Member Pass
let ticket4 = GateA.buyTicket('memberPass', 50000, 'Anton')
/* output
uang tidak cukup
*/
```