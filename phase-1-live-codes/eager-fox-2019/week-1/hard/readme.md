##**FLAPPY BIRD JS**

> ⏰ time estimation: 60 minutes

Pada tahun 2014 terdapat game yang **Booming** pada saat itu bernama flappy bird. Kita akan membuat simulasi game tersebut menggunakan javascript.


### RELEASE 0 - GENERATE OBSTACLES
Buatlah sebuah board sesuai dengan input user, lebar dan tinggi board adalah 2 kali dari input user. Dan tugas kita adalah membuat tiang-tiang penghalang , tiang penghalang akan muncul selang-seling, dan tiap tiang akan memiliki 1 lubang yang dapat dilewati oleh burung. (**generate tiang secara random !** )
```javascript
//Dibawah ini contoh obstacle yang digenerate secara random
generateObstacle(4);

[ [ ' ', 'I', ' ', ' ', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', ' ' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', ' ', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', ' ', ' ', 'I' ] ]
```

### RELEASE 1 - INIT GAME
Buatlah function initGame yang menerima 3 parameter berupa :

  1. posisi pertama burung diletakkan (dihitung dari bawah)
  2. obstacle yang sudah digenerate dengan function pada release 0
  3. input user untuk pergerakan burung

burung dilambangkan dengan symbol `@`

```javascript
//Dibawah ini contoh pemanggilan fungsi initGame
let soal = generateObstacle(4);

initGame(2, soal, 'up3,-,up4,-,down7,-,up6,-')

[ [ ' ', 'I', ' ', ' ', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', ' ' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', ' ', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ '@', 'I', ' ', 'I', ' ', 'I', ' ', 'I' ],
  [ ' ', 'I', ' ', 'I', ' ', ' ', ' ', 'I' ] ]
```

Berikutnya burung akan bergerak sesuai animasi dengan input user 

### RELEASE 2 - WIN LOSE CONDITION

- Animasi akan berakhir dan menampilkan pesan **Your bird goes out of arena! You Lose!** jika posisi burung melebihi batas kotak yang sudah disiapkan oleh obstacles
- Animasi akan berakhir dan menampilkan pesan **Ooops You Lose !** jika burung menabrak tiang obstacle
- Animasi akan berakhir dan menampilkan pesan **You Win the Game !** jika burung berhasil melewati semua obstacle


