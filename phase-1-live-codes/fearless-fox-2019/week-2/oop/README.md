# Flight Ticketing
> ⏰ time estimation: 90 minutes

Kali ini kamu akan diminta membuat sebuah sistem ticketing maskapai penerbangan dengan menggunakan konsep OOP (Object Oriented Programming).



----



## Release 0

Buatlah class `Airline` yang memiliki properti:

- name
- flights (daftar penerbangan dari airline)



Buatlah class `Flight` yang memiliki properti:

- flightCode
- time
- capacity
- tickets (daftar tiket yang terdaftar untuk penerbangan ini)



Buatlah class `Passenger` yang memiliki properti:

- name
- age



Buatlah method `addFlight` pada class `Airline` yang akan membuat flight baru dan menambahkannya pada properti `flights`, lalu me-return flight baru tersebut.

Method ini juga akan memunculkan message: **Flight ${flightCode} added to ${airlineName}**



**Perhatikan driver code dengan seksama!!!**



## Release 1

Tiket akan terbagi ke dalam 3 kelas:

- economy class
- business class
- first class

Buatlah class-class `Ticket`, `Economy`, `Business`, dan `First`. Dan tentukanlah bentuk inheritance dari class-class tersebut.

Class-class itu akan memiliki properti sebagai berikut:
- bookingCode
- passenger
- status
- price
- freeBaggage (jumlah berat bagasi yang digratiskan)
- extraBaggageFee (biaya yang harus dibayarkan per kg untuk kelebihan bagasi dari jumlah berat yang digratiskan.)

`bookingCode` akan digenerate dengan huruf-huruf random sebanyak 6 karakter dengan ketentuan:
- tiket economy class akan dimulai dengan huruf **Y**. Misal: YKSTJD
- tiket business class akan dimulai dengan huruf **J**. Misal: JKSTJD
- tiket first class akan dimulai dengan huruf **F**. Misal: FKSTJD 

`status` akan memiliki value awal **booked** saat object dibuat. Status nantinya bisa berubah-ubah menjadi salah satu dari: **paid**, **canceled**, **checked-in**.

`price` tergantung kepada kelas dari tiket:
- tiket economy class harganya 200
- tiket business class harganya 300
- tiket first class harganya 400

`freeBaggage` tergantung kepada kelas dari tiket:
- tiket economy class tidak memperoleh bagasi gratis
- tiket business class memperoleh 20 kg
- tiket first class memperoleh 45 kg

`extraBaggageFee` bernilai sama untuk semua kelas yaitu **10**.



Buatlah method `issueTicket` pada class `Airline`. Salah satu input dari method ini adalah object _flight_. Method ini akan membuat tiket baru dan menambahkannya pada properti `tickets` di object _flight_ lalu me-return tiket baru tersebut. 

Method ini juga akan memunculkan message: **Booking code ${bookingCode} is issued for ${passengerName}. Please pay in 24 hours.**

Tambahkan validasi bahwa _flight_ yang diinput adalah benar dimiliki oleh _airline_ yang dimaksud. Tampilkan message **Invalid flight for ${airlineName}** kalau _flight_ yang diinput tidak valid.



**Perhatikan driver code dengan seksama!!!**



## Release 2

Buatlah method `pay` pada class `Passenger` yang akan mengupdate status tiket menjadi **paid**. Method ini juga akan memunculkan message **${PassengerName} paid the ticket with booking code ${bookingCode}**.



Buatlah method `checkIn` pada class `Passenger` yang akan mengupdate status tiket dari **paid** menjadi **checked-in**. Salah satu input dari method ini adalah berat bagasi yang dibawa oleh passenger. Jika beratnya melebihi batas berat yang digratiskan, maka passenger harus membayar ekstra sebanyak jumlah kelebihan berat dikali dengan `extraBaggageFee`.

Check-in yang berhasil akan mengubah status tiket menjadi **checked-in** dan memunculkan message:
- jika passenger tidak perlu membayar kelebihan ekstra bagasi, maka messagenya **${passengerName} checked in successfully.**
- jika passenger perlu membayar kelebihan ekstra bagasi, maka messagenya **${passengerName} checked in successfully  and paid ${extraFee} for extra baggage..**

Tambahkan juga validasi-validasi:
- jika status tiket masih **booked**, maka akan memunculkan message **Oh sorry, ${passengerName} did not pay the ticket yet**.
- jika status tiket adalah **canceled**, maka akan memunculkan message **The ticket was canceled**.
- jika status tiket sudah **checked-in**, maka akan memunculkan message **${passengerName} already checked in before**.
- Jika yang melakukan check-in berbeda dengan passenger yang tertera pada tiket, maka akan memunculkan message **Only ${passengerName} can check in with this ticket**.



Khusus untuk tiket first class akan memiliki method `refund`. Method ini akan mengubah status tiket menjadi **canceled** dan memunculkan message **${refundAmount} has been transfered back to ${passengerName} bank account**.

Tambahkan validasi bahwa hanya tiket dengan status **paid** yang bisa direfund. Tiket dengan status selain itu akan memunculkan message **This ticket can't get refund**.



**Perhatikan driver code dengan seksama!!!**



## Release 3

Pada class `Flight` buatlah getter- getter berikut:

- passengersInFlight (diambil dari jumlah penumpang yang telah melakukan check in).
- emptySeats (jumlah kursi kosong yang dihitung dari kapasitas flight dikurangi passengersInFlight)



Buat juga method `depart` pada class `Flight`. Method ini akan memunculkan message **Flight ${flightCode} has departed with ${passengersInFlight} passengers, and ${emptySeats} empty seats**



**Perhatikan driver code dengan seksama!!!**