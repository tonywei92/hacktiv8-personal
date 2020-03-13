# Combo Battle
> ⏰ Time Estimation: 45 mins

Pada permainan combo card setiap person dari people mempunyai nama dan attribute. Disediakan juga clans yang merupakan
array dengan isi nama dari clan yang ada.

**Attribute Kartu**
``` javascript
const people = [
  { name: 'Hinata', power: 1000 },
  { name: 'Karin', power: 500 },
  { name: 'Naruto', power: 3000 },
  { name: 'Boruto', power: 800 },
  { name: 'Itachi', power: 1900 },
  { name: 'Sasuke', power: 2400 },
  { name: 'Obito', power: 1300 },
  { name: 'Hanabi', power: 800 }
]
const clans = ['Uzumaki', 'Kazekage', 'Uchiha', 'Hyuuga']
```
 - Jumlah people selalu genap
 - Perbandingan jumlah clans dan people selalu 1 : 2

**Cara Bermain**

Kedua pemain akan menerima 2 person berbeda. Akan tetapi apabila beda pemain person boleh sama.
(Lihat Itachi).
``` javascript
  let player1 = [
    { name: 'Obito', power: 1300, clan: 'Uzumaki' },
    { name: 'Itachi', power: 1900, clan: 'Kazekage' }
  ]
  let player2 = [
    { name: 'Hanabi', power: 800, clan: 'Uchiha' },
    { name: 'Itachi', power: 1900, clan: 'Kazekage' }
  ]
```

Kemampuan person dari masing-masing pemain dijumlahkan. Dan ditentukkan siapa pemenang berdasarkan jumlah
kekuatannya, pemenangnya bisa jadi player1, player2, atau tidak ada. Apabila player memiliki clan yang sama
akan ditambah 1000 power.

## Release 0
Buatlah sebuah fungsi fillTheClan untuk memberikkan clan kepada setiap people secara random.
1 clan pasti memiliki 2 person (karena 1 banding 2). Dan jumlah people selalu genap dan dinamis.
```javascript
function fillTheClans() {
  // put your code here
}

fillTheClans()
/* clannnya random dan setiap clan memiliki 2 person
  [ { name: 'Hinata', power: 1000, clan: 'Uchiha' },
  { name: 'Karin', power: 500, clan: 'Hyuuga' },
  { name: 'Naruto', power: 3000, clan: 'Kazekage' },
  { name: 'Boruto', power: 800, clan: 'Hyuuga' },
  { name: 'Itachi', power: 1900, clan: 'Kazekage' },
  { name: 'Sasuke', power: 2400, clan: 'Uzumaki' },
  { name: 'Obito', power: 1300, clan: 'Uzumaki' },
  { name: 'Hanabi', power: 800, clan: 'Uchiha' } ]
*/
```

## Release 1
Setelah menyelesaikan release 0. Kemudian buatlah sebuah function yang mengambil 2 nama orang berbeda.
```javascript

function getPairPerson() {
  // put your code here
}

let player1 = getPairPerson()
/*
  [ { name: 'Obito', power: 1300, clan: 'Uzumaki' },
  { name: 'Itachi', power: 1900, clan: 'Kazekage' } ]
*/
```

## Release 2
Setelah menyelesaikan release 1. Buat function comboBattle untuk menentukkan pemenang diantara 2 orang pemain.
Kondisinya ada tiga, yaitu: player 1 win, player 2 win, atau seri.
Apabila Player memiliki clan yang sama maka power Player tersebut akan ditambah 1000
```javascript


function comboBattle(player1, player2) {
  // put code here
}

let player1 = getPairPerson()
/*
  [ { name: 'Obito', power: 1300, clan: 'Uzumaki' },
  { name: 'Itachi', power: 1900, clan: 'Kazekage' } ]
*/
let player2 = getPairPerson()
/*
  [ { name: 'Hanabi', power: 800, clan: 'Uchiha' },
  { name: 'Sasuke', power: 2400, clan: 'Uchiha' } ]
*/
// PROCESS:
// player 1 Power = 1300 + 1900
// player 2 Power = 800 + 2400 + (1000) => bonus karena memiliki 2 clan Uchiha
comboBattle(player1, player2)
// Player 1 Powers is: 3000 and Player 2 power is: 3200, Player 2 Win! // bila player 2 win
// ANOTHER CASE:
// Player 1 Powers is: 3200 and Player 2 power is: 3000, Player 1 Win! // bila player 1 win
// Player 1 Powers is: 3200 and Player 2 power is: 4200, It's a Draw! // bila draw
```

##Release 3
Setelah menyelesaikan release 2. buatlah function play yang akan menampilkan pertarungan sebanyak 
jumlah total pasangan yang mungkin didapat dari list people, dimana setiap ronde pasangan yang sudah dipakai sebelumnya tidak bisa dipakai lagi oleh player yang sama. 
Output akhir dari function ini akan menampilkan objek score masing-masing tiap player

```javascript 
Player 1 power is: 3800, Player 2 power is: 2700. Player 1 win
This round player 1 used: Hanabi and Naruto
This round player 2 used: Itachi and Boruto
---------------------------------------------------------
Player 1 power is: 2800, Player 2 power is: 1500. Player 1 win
This round player 1 used: Hinata and Boruto
This round player 2 used: Karin and Hinata
---------------------------------------------------------
Player 1 power is: 4300, Player 2 power is: 4200. Player 1 win
This round player 1 used: Itachi and Sasuke
This round player 2 used: Hanabi and Sasuke
---------------------------------------------------------
Player 1 power is: 1800, Player 2 power is: 4300. Player 2 win
This round player 1 used: Obito and Karin
This round player 2 used: Obito and Naruto
---------------------------------------------------------
{ player1Score: 3, player2Score: 1 }
```

Notes:

Silahkan membuat function/fungsi tambahan jika dibutuhkan