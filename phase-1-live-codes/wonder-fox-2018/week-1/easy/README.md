# Two Pair Poker card

> ⏰ Time Estimation: ~15 mins

![Two Pair Poker](https://www.deepstackpoker.com.au/images/poker-hand-two-pair-big.png)

Pada permainan poker kita menggunakan kartu remi yang terdiri dari 52 kartu:

**(K)eriting ( 13 Kartu)**

- Angka 2 sampai 10
- (J)ack,
- (Q)ueen,
- (K)ing
- (A)s

**(H)ati ( 13 Kartu)**

- Angka 2 sampai 10
- (J)ack,
- (Q)ueen,
- (K)ing
- (A)s

**(W)ajik ( 13 Kartu)**

- Angka 2 sampai 10
- (J)ack,
- (Q)ueen,
- (K)ing
- (A)s

**(S)ekop ( 13 Kartu)**

- Angka 2 sampai 10
- (J)ack,
- (Q)ueen,
- (K)ing
- (A)s

## Cara Bermain

Setiap pemain yang mengikuti permainan poker akan diberikan 5 kartu kombinasi
dari 52 kartu remi yang tersedia.

Example

```javascript
let cardInHand = ['5K', 'JK', '2H', '3W', 'AK']

let cardInHand2 = ['10S', '10K', 'JH', 'JS', '2K']
```

## Two pair

Two pair adalah kondisi dimana kartu ditangan kita memiliki 2 pasangan angka
atau gambar yang sama.

```javascript
let cardInHand = ['10S', '10K', 'JH', 'JS', '2K']

// memiliki dua pair
// pair pertama -> 10S dan 10K ( angka 10 sekop dan 10 keriting)
// pair kedua -> JH dan JS (Jack Hati dan Jack sekop)

let cardInHand2 = ['5K', 'JK', '2H', '3W', 'AK']

// kartu ditangan tersebut tidak memiliki Pair sama sekali karena tidak ada
// kartu yang berpasangan
```

## Release 0

Buatlah sebuah fungsi untuk me generate kartu yang akan diterima oleh sebuah
player secara random.

```javascript
function generateCardInHand() {
  // put your code here
}

generateCardInHand() // [ '5K', 'JK', '2H', '3W', 'AK']
generateCardInHand() // [ '5K', 'QK', 'AH', '4W', 'KK']
```

## Release 1

Melanjutkan fungsi yang dibuat pada release 0 dan pastikan kartu yang diterima
oleh player memiliki **2 pairs** dan **1 kartu bebas**.

```javascript
function generateCardInHand() {
  // put your code here
}

generateCardInHand() // [ '10S', '10K', 'JH', 'JS', '2K']
generateCardInHand() // [ '2S', '2K', '10H', '10L', '4K']
```
