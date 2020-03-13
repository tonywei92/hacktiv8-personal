<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 3

# Warner Bros Arcade

> ⏰ Time limit: **60 min**

WB company mengadakan perlombaan untuk para karakternya. 
Nah disini, kamu diminta untuk membuat simulasi perlombaan dengan menggunakan konsep OOP.

## Release 0
Buatlah sebuah class `Character` yang memiliki properti sebagai berikut:
  - name = nama dari karakter | public
  - speed = kecepatan dari karakter | public
  - mileage = jarak yang sudah ditempuh | default: 0 | public
  - equipment = object `Equipment` | default null | private
  
Buatlah class `Timer` yang memiliki properti sebagai berikut:
  - limit = Jangka waktu pemakaian| public
  - start = Waktu mulai | public
  

`Equipment` ini terdiri dari 3 macam: 
  1. `Rocket`:
        - name = nama dari alat | default: 'Rocket' | public
        - timer = object `Timer`  | (limit: 2) | public
        - speedValue = nilai kecepatan | default: 50 | public
        - isUsed = status alat sudah digunakan atau belum. | public

  2. `JumpPeer`:
        - name = nama dari alat | default: 'JumpPeer' | public
        - timer = object `Timer`  | (limit: 1) | public
        - speedValue = nilai kecepatan | default: 5 | public
        - isUsed = status alat sudah digunakan atau belum. value: true atau false | default: false | public

  3. `Wing`:
     - name = nama dari alat | default: 'Wing' | public
     - timer = object `Timer`  | (limit: 'infinite') | public
     - speedValue = nilai kecepatan | default: 2 | public
     - isUsed = status alat sudah digunakan atau belum. value: true atau false | default: false | public
     - totalWing = default value 2 | public

<br />

## Release 1
Tambahkan equipment di character. 

```javascript
const tazmania = new Character('Tazmania', 85)
tazmania.equipment = new Rocket(1) // Tazmania: Rocket equipped!
/*
Character {
  name: 'Tazmania',
  mileage: 0,
  speed: 85,
  _equipment:
   Rocket {
     name: 'Rocket',
     timer: Timer { limit: 2, start: 1 },
     speedValue: 50,
     isUsed: false } }
*/
```

Pada class `Equipment`, buatlah method `useEffect` yang menerima 2 input, yaitu timeInput dan Object `Character`.
Pada method ini, yang dilakukan adalah: 
- speed `Character` ditambah speedValue bila timeInput sama dengan start time dan mengubah isUsed menjadi `true`. 
  
  Pesan yang ditampilkan:  ```<Character Name>: using <Equipment Name>! Speed increased up to <Speed Value>```
- speed `Character` dikurangi speedValue bila jangka waktu pemakaian sudah berakhir.
  
  Pesan yang ditampilkan:  ```<Character Name>: losing the effect of <Equipment Name>. Speed decreased down to <Speed Value>```


<br />

Override method `useEffect` di class `Wing`.
- speed `Character` ditambah speedValue dan mengubah isUsed menjadi `true`. 

<br />

## Release 2
Buatlah sebuah class `Arcade` yang memiliki properti sebagai berikut:
  - players = array Object `Character` | default : [] | public
  - distance = Panjang lintasan | public

Masih pada class `Arcade`:
1. Buatlah method `register` yang akan memasukkan character ke properti players.
```javascript
const wbArcade = new Arcade(380)
console.log(wbArcade) 
/**
  Arcade { players: [], distance: 380 }
 */

wbArcade.register(tazmania) //Tazmania has registered to the arcade
```

2. Buatlah method `race`.
   
    RULES: 
      
  - Setiap character akan mengalami perubahan pada mileage-nya (jarak tempuh) tergantung waktu dan speed yang dimiliki. RUMUS: mileage = speed * time.
  - Perlombaan akan berakhir, bila salah satu karakter telah mencapai ujung dari panjang lintasan `Arcade`.
  - Method `useEffect` dari `Equipment` akan dipanggil bila time sama dengan start Equipment.
  
```javascript
wbArcade.race()
/*
Race Start!
============================
TIME:  0
-- Bugs Bunny using Wing! Speed increased up to 2 --
Position 1. Bugs Bunny, speed: 92, km: 0
Position 2. Tazmania, speed: 85, km: 0
Position 3. Daffy Duck, speed: 110, km: 0


TIME:  1
-- Tazmania: using Rocket! Speed increased up to 50 --
Position 1. Tazmania, speed: 135, km: 135
Position 2. Daffy Duck, speed: 110, km: 110
Position 3. Bugs Bunny, speed: 92, km: 92

....
*/
```
