# BROADWAY

Buatlah sistem pemesanan tiket pada sebuah theater broadway.
Audience dari theater broadway tersebut memiliki 2 jenis yaitu member dan nonmember.
Kamu diminta untuk menghitung invoice pembelian tiket dari setiap audience yang memesan.

Berikut requirement dari theater broadway ini:

1. Setiap `Audience` (`Member` maupun `NonMember`) memiliki attribute:
    - name
    - email
    - age
    - type

    Khusus untuk `Member`, akan memiliki attribute khusus:
      - memberId
      - balance

    `Member` akan memiliki 2 type gold dan silver

2. `Theater Broadway` hanya menampilkan satu pertunjukan saja setiap harinya dan memiliki
   3 macam section yaitu VVIP, VIP dan Regular

   - `Member` yang bertype gold dapat membeli semua section
   - `Member` yang bertype silver hanya dapat membeli section VIP dan Regular
   - `NonMember` hanya dapat membeli section Regular


3. `Theater Broadway` memiliki attribute:
    - todayShow
    - audiences
    - priceVVIP
    - priceVIP
    - priceRegular


## RELEASE 0
Buatlah class-class yang diperlukan untuk mengimplementasikan `Audience` (Coba kamu pikirkan apakah memerlukan inheritance, composition, aggreagtion)

Untuk attribute/property type default valuenya adalah 'Regular'

## RELEASE 1
- Property memberId yang terdapat pada `Member` akan ter-generate secara otomatis dimana formatnya adalah `3 huruf pertama dari name + tahun lahir + angkaRandom dari 1-20`

- Property type pada `Member` akan berubah menjadi Gold atau Silver. Untuk menentukannya lakukanlah random

- Property balance pada `Member` default valuenya adalah 0

- Buatlah method untuk melakukan top up balance untuk `Member`. Minimal top up adalah 500.
   Jika kurang dari itu tampilkan message `Sorry, minimum amount is 500`

## RELEASE 2
- Implementasikan TheaterBroadway dimana attributenya memiliki default value sebagai berikut:

    - todayShow: null
    - audiences: { VVIP: [], VIP: [], Regular: [] }
    - priceVVIP: null
    - priceVIP: null
    - priceRegular: null

- Buatlah method setTodayShow yang berfungsi untuk mengubah judul todayShow, harga section VVIP, VIP dan Regular untuk judul todayShow tersebut

- Buatlah method showAudience yang berfungsi untuk menampilkan list audience berdasarkan sectionnya

- Jika pada section tersebut tidak memiliki audience maka tampilkan "THERE IS NO AUDIENCE IN THIS SECTION"

Example:
```
LIST AUDIENCE:
-------------- VVIP---------------
1. irsyah (gold member)
2. irsyah (gold member)
-------------- VIP---------------
THERE IS NO AUDIENCE IN THIS SECTION
-------------- Regular---------------
1. rama (regular member)
```

## RELEASE 3
Buatlah method buyTicket pada TheaterBroadway yang menerima input audience, section dan jumlah tiket yang ingin dibeli. Berikut adalah requirement dari method ini:

- `Member` yang bertype gold dapat membeli semua section

- `Member` yang bertype silver hanya dapat membeli section VIP dan Regular

- `NonMember` hanya dapat membeli section Regular

- Jika `Member` bertype silver ingin membeli section VVIP, keluarkan message "We are sorry, this section only for gold member"

- Jika `NonMember` ingin membeli section VVIP atau VIP, keluarkan message "With all due respect, section ${section} only for member"

- Jika audience `Member` ataupun `NonMember` berhasil membeli tiket maka data audience akan dimasukkan ke property audiences berdasarkan section yang telah dipilih

- Untuk menghasilkan invoice, lakukan pengecekan jika audience yang membeli adalah audience `Member` maka total balance akan ditampilkan. Jika balance dari audience `Member` tersebut masih ada maka balance akan otomatis terpotong sesuai dangan harga total pembelian tiket. Balance dari audience `Member` akan terupdate!!

- Contoh invoice yang akan tercetak sebagai berikut: (Perhatikan pola invoice untuk member dan non member)
  * UNTUK MEMBER
    ```
    **************************INVOICE****************************
    Theater Broadway                             TICKET CONFIRMED
                         The Book of Mormon      irs199220 (Gold)
    *************************************************************
    Quantity    : 3
    Price       : 500
    Sub Total   : 1500
    Balance     : 10000
    Grand Total : PAID BY BALANCE         Remaining Balance: 8500
    *************************************************************
    ```

    *ATAU*

    ```
    **************************INVOICE****************************
    Theater Broadway                             TICKET CONFIRMED
                        The Book of Mormon       irs199220 (Gold)
    *************************************************************
     Quantity    : 3
     Price       : 500
     Sub Total   : 1500
     Balance     : 1000
     Grand Total : 500                     Remaining Balance: 0
    *************************************************************
    ```

  * UNTUK NON MEMBER
    ```
      **************************INVOICE****************************
      Theater Broadway                             TICKET CONFIRMED
                                  Cat                rama (Regular)
      *************************************************************
       Quantity    : 2
       Price       : 150
       Sub Total   : 300
       Grand Total : 300
      *************************************************************
    ```
