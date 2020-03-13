# Battle card
> ⏰ Time Estimation: 20 mins

Pada permainan battle card setiap kartu mempunyai power dan attribute. Power merupakan sebuah angka antara 1 sampai 99 yang menentukan daya serang kartu tersebut. Attribute akan menetukan efektifitas serangan terhadap lawan.

**Attribute Kartu**
- (P)ower 
  <br>Meningkat 25% terhadap Technique
- (T)echnique
  <br>Meningkat 25% terhadap Agility
- (A)gility
  <br>Meningkat 25% terhadap Power

(*)daya serang pembulatan ke atas

**Cara Bermain**

Kedua pemain akan menerima 5 kartu
``` javascript
  let player1 = ['5T', '7A', '3T', '5P', '2A']
  let player2 = ['3T', '3A', '3A', '8P', '7P']
```

Setiap kartu pada posisi yang sama akan saling bertarung, kartu dengan hasil power dan efektifitas tetinggi menjadi pemenang, sedangkan kartu yang kalah atau imbang akan dihancurkan. Pemain dengan sisa kartu terbanyak menjadi pemenang, dan jika jumlahnya sama maka dianggap imbang

``` Javascript
  // Example
  let player1 = ['5T', '7A', '3A', '5P', '2A']
  let player2 = ['3T', '3A', '3T', '8P', '8P']
  /* Battle image
  Power Calculation
  let player1 = [5, 7, 3, 5, 3]
  let player2 = [3, 3, 4, 8, 8]
  Result
  let player1 = [5T, 7A, KO, KO, KO]
  let player2 = [KO, KO, 3A, 8P, 8P]
  */
  // Result
  let player1 = ['5T', '8A']
  let player2 = ['3A', '8P', '8P']
```

## Release 0
Buatlah sebuah fungsi generateCard untuk membagikan kartu secara random
```javascript
function generateCard() {
  // put your code here
}

let player1 = generateCard() //['5T', '7A', '3A', '5P', '2A']
let player2 = generateCard() // ['3T', '3A', '3T', '8P', '8P']
```

## Release 1
Buatlah fungsi battleCard untuk jalankan pertarungan dan akan menampilkan pemenangnya
```javascript
function generateCard() {
  // put your code here
}

function battleCard(player1, player2) {
  // put your code here
}

let player1 = generateCard() //['5T', '7A', '3A', '5P', '2A']
let player2 = generateCard() // ['3T', '3A', '3T', '8P', '8P']

battleCard(player1, player2) // player two wins the battle
```

Notes:

Silahkan membuat function/fungsi tambahan jika dibutuhkan