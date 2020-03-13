# OOP Clan Wars <img align="right" width="100" height="70" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">

> ⏰ time estimation: 40 Minutes

Kali ini kamu akan diminta membuat sebuah sistem game seperti game di HP seperti clash of clans yang bisa diinstall di Handphone. Kemudian game tersebut dapat di pertandingkan pada suatu Game Center dengan cara bertanding dengan pemain lain dan menentukkan pemenangnya.

---

## Release 0

Buatlah class `Phone` yang memiliki properti:

- name : string
- clan : object Clan (default value null)

Terdapat 2 jenis `Clan`, yaitu:

- Warrior, dengan properti :

  - owner : string
  - name: string (nilai selalu 'warrior')
  - budget : number (default value 0)
  - power: number (nilai selalu 1000)

- Druid, dengan properti :

  - owner : string
  - name: string (nilai selalu 'druid')
  - budget : number (default value 0)
  - power: number (nilai selalu 1000)


## Release 1

Pada class Phone buatlah method `createNewClan` yang akan membuat object clan baru ke properti clan, jika input clan 'warrior' maka properti clan diubah menjadi instance dari class `Warrior`, input clan 'druid' maka properti clan diubah menjadi instance dari class `Druid`.

**Perhatikan driver code dengan seksama!!!**

## Release 2

Untuk setiap `Clan` bikin property budget dengan menggunakan getter setter. Pada class Druid buatlah method powerUp yang berfungsi untuk meningkatkan power dari clan tersebut.

Gunakanlah preprocessing data pada getter dan setter tersebut. serta ubah format `currency` budget menjadi format `dollar USA`. Untuk memudahkan dapat menggunakan referensi:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

**Perhatikan driver code dengan seksama!!!**

## Release 3

Buatlah class GameCenter yang memiliki:

- static method clanWars yang menerima 2 parameter berupa object Phone dan object Phone

Method ini akan menghasilkan tampilan dari pemenang pertandingan tersebut atau seri. Hasil ini bergantung pada besar power dari clan pada object Phone masing-masing.

**Perhatikan driver code dengan seksama!!!**



