# Ladder Letter  <img align="right" width="100" height="70" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">

> ⏰ Time Estimation: ~30 mins


## Release 0

Buatlah sebuah fungsi ladderLetter yang akan menerima satu parameter word merupakan string kata-kata yang dipisahkan oleh satu spasi kosong.

Lihat contoh di bawah ini, untuk melihat letak lokasinya dengan tepat:

```javascript
 function ladderLetter(word) {
   // code here
 }
 ladderLetter('happy holliday');
/*
    happy
        h
        o
        l
        l
        i
        d
        a
        y
*/
```
Cara penyelesaian: 
* kata index ke - 0 (setelah dipisah berdasarkan spasi) => ke kanan. (ex: 'happy')
* kata index ke - 1 (setelah dipisah berdasarkan spasi) => ke bawah. (ex: 'holliday')


## Release 1

Buatlah kata-kata tersebut menjadi lebih dinamis (bisa lebih dari 2 kata).

```javascript
 ladderLetter('happy birthday to you guys');
/*
    happy
        b
        i
        r
        t
        h
        d
        a
        yto
          y
          o
          uguys
*/
```
* kata index ke - 0 (setelah dipisah berdasarkan spasi) => ke kanan (ex: 'happy')
* kata index ke - 1 (setelah dipisah berdasarkan spasi) => ke bawah (ex: 'birthday')
* kata index ke - 2 (setelah dipisah berdasarkan spasi) => ke kanan (ex: 'to')
* kata index ke - 3 (setelah dipisah berdasarkan spasi) => ke bawah (ex: 'you')
* dan seterusnya dengan pola (kanan, bawah, kanan, bawah, dst)