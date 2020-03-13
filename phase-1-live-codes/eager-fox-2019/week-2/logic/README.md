# MOVE OTHELLO GAME

Pada live-code kali ini kamu ditantang untuk membuat algorithma seperti pada permainan othello atau reversi. Berikut adalah link bagaimana cara bermain reversi atau othello
[Cara bermain reversi](https://www.mathsisfun.com/games/reversi.html).

Seperti yang kita ketahui permainan reversi adalah permainan untuk 2 orang dimana pemenangnya adalah yang memilki symbol atau piece (biasanya piece berwarna putih dan hitam) yang paling banyak. Tenang saja dilive-code kali ini kamu hanya diminta untuk mensimulasikan pergerakan piece dan perubahan pada board. Untuk livecode kali ini asumsikan `x` dan `o` sebagai simbol atau piece yang akan dimainkan.

Kamu telah disediakan function bernama `move` yang akan menerima 3 parameter yaitu:
    - board
    - symbol / piece (piece yang akan mengubah board)
    - koordinat peletakan piece atau symbol pada board

### Release 0
  Buatlah validasi apabila koordinat yang akan diletakkan sudah diisi dengan symbol atau piece. Tampilkan `Oops you can't put in there`

### Release 1
  Seperti yang kita tahu rules dari permainan ini adalah apabila piece baru diletakkan dia akan mengecek secara horizontal (kiri dan kanan), vertikal (atas dan bawah) dan diagonal untuk mendapatkan apakah ada simbol lain yang terhimpit dan seberapa banyak.
  ```javascript
    CONTOH INPUT 1 ROW BOARD:
    ....
    ["o", "x", "o", "o", "xBaruYangDimasukan", "o", "x"]
    ....

    maka hasil keluaran adalah:
    ...
    ["o", "x", "x", "x", "xBaruYangDimasukan", "x", "x"]
    ...
  ```
  karena disebelah kiri dan kanan `xYangBaruDimasukan` terdapat simbol `x` yang lain sehingga nilai antara `xYangBaruDimasukan` dengan symbol `x` yang paling dekat dari kanan dan kiri akan berubah menjadi `x`

**LIVE CODE RULES**

  - Misal sekarang giliran symbol `x`, maka semua symbol `o` yang diantara symbol`x` yang lain yang terdekat akan berubah menjadi symbol `x` atau yang dihimpit oleh symbol `x` yang akan diletakkan dan symbol `x` yang terdekatnya.
  - Untuk live-code kali ini kamu hanya diminta untuk mengubah symbol yang terdekat dari horizontal (kiri dan kanan) dan vertikal (atas dan bawah).
  - Kerjakan untuk semua test case yang ada (tidak ada test case yang ditambahkan)
   
