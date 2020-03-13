## FOOTBALL PLAYER SYSTEM
> ⏰ Time Estimation: ~105 mins


Pada challenge kali ini kamu diwajibkan untuk membuat code dalam struktur MVC, menggunakan database SQLite, package node-sqlite3 / npm sqlite3 dan callback

Input akan diterima lewat Terminal kamu dan urutan command WAJIB mengikuti requirement yang disediakan.

## Preparation
Telah disediakan file `package.json`, `setup.js`, dan `seed.js` untuk membuat *database* dan *table* yang diperlukan. Jadi kamu hanya perlu menjalankan perintah ini sebelum memulai coding:
```bash
npm install
node setup.js
node seed.js
```

Berikut adalah skema dari database yang disediakan:
- `Teams`
  - `id (INTEGER, PK, AI)`
  - `name (text)`
  - `balance (INTEGER)`

- `Players`
  - `id (INTEGER, PK, AI)`
  - `name (text)`
  - `position (VARCHAR)`
  - `contractDuration (INTEGER)`
  - `monthlySalary (INTEGER)`
  - `rating (INTEGER)`
  - `TeamId (INTEGER, FK, REFERENCES Teams(id))` 

## General
Applikasi ini memiliki **3 Fitur Utama**
  - Registrasi Player: Untuk mendaftarkan satu `player` ke satu `team`.
  - Sell Player: Team dapat menjual player kepada team lain.
  - Payday: Team mengurangi balance saat ini dengan total gaji player pada team tsb.

## Command
```bash
  Perintah yang perlu kamu buat adalah sebagai berikut:

  node index.js register <teamId> <name> <position> <rating> <monthlySalary>

  node index.js "sell player" <playerId> <teamId>
  node index.js payday <teamId>

```

## RELEASE 0
#### Register Player
Pada feature ini kamu diminta untuk membuat sistem pendaftaran `player`.
```javascript
  COMMAND:
   node index.js register <teamId> <name> <position> <rating> <monthlySalary>

  EXAMPLE:
  node index.js register 1 giroud striker 4 5000

  OUTPUT:
  <Giroud> joined <teamName> as a <striker>.

  EXAMPLE 2:
  node index.js register 999 giroud striker 4 5000

  OUTPUT 2:
  Team with ID 999 does not exist.

  NOTES:
   - teamId = Id team yang ingin dimasuki oleh player
   - playerName = name player
   - rating = popularitas player
   - monthlySalary = gaji bulanan tiap player
```

#### RULES: 
  - Attribut `contractDuration` adalah durasi kontrak player dengan team dengan satuan tahun. Didapatkan dengan format sebagai berikut:
    - Apabila `rating` yang diinput >= 5, maka `contractDuration` menjadi `4`
    - Apabila `rating` yang diinput >= 4 , maka `contractDuration` menjadi `3`
    - Apabila `rating` yang diinput >= 3 , maka `contractDuration` menjadi `2`
    - Apabila `rating` yang diinput >= 1 , maka `contractDuration` menjadi `1`
  - Validasi untuk mengecek `teamId` apakah ada atau tidak di database.



## RELEASE 1
#### Sell Player
Pada feature ini kamu diminta untuk membuat sistem penjualan player yang dapat dilakukan oleh tiap team. 

```javascript
  COMMAND:
  node index.js "sell player" <playerId> <teamId>

  EXAMPLE:
  node index.js "sell player" 1 2

  NOTES:
   - playerId = Id player yang akan dijual
   - teamId = Id team yang akan membeli player

  OUTPUT SUKSES:
  <playerName> move to <teamName> this season !

```

#### RULES: 
- Validasi apakah `playerId` yang di input terdapat dalam database atau tidak. Jika player tidak terdapat dalam database maka sistem akan mengeluarkan pesan : **Player with id <playerId> does not exist**

- Validasi apakah `teamId` yang di input terdapat dalam database atau tidak.Jika team tidak terdapat dalam database maka sistem akan mengeluarkan pesan : **Team with id <teamId> does not exist**

- Validasi apakah `teamId` yang di input (team yang membeli) apakah sama dengan team player saat ini. Jika teamId sama maka sistem akan mengeluarkan pesan :  **Buyer and Seller should be a different Team**

- Saat dijalankan maka attribut `balance` pada `team` yang membeli player akan berkurang sebanyak `contractDuration` dikali `monthlySalary` dari player , jika `balance` tidak mencukupi proses pembelian maka proses penjualan akan gagal dan sistem akan mengeluarkan pesan : **Your Team does not have enough balance to buy this player**.

- Saat dijalankan dan penjualan sukses, maka attribut `balance` pada `team` yang menjual player akan bertambah sebanyak `contractDuration` dikali `monthlySalary` dari player

- Saat dijalankan maka attribut `teamId` pada `playerId` harus berubah menjadi `teamId` yang membeli player. Saat penjualan sukses sistem akan mengeluarkan pesan : **<playerName> move to <teamName> this season !**




## RELEASE 2
#### Gajian Player
Pada feature ini kamu diminta untuk mengurangi Team Balance yang diinput sesuai dengan gaji tiap player yang terdapat di team tsb, jika total gaji player melebihi balance dari Team maka update akan gagal.

```javascript
  COMMAND:
	node index.js payday <teamId>
  
  EXAMPLE INPUT:
  node index.js payday 1

  OUTPUT:
  <TeamName> spent <totalSalary> for payday.
```
#### RULES: 
- Validasi apakah <balance> lebih dari total player salary, jika berhasil maka sistem akan update <balance> team yang terdapat dalam database dan akan menampilkan pesan : **<TeamName> spent <totalSalary> for payday.**

- Jika Team balance kurang dari total player salary, maka update balance akan gagal dan sistem akan menampilkan pesan **<TeamName> need <money> more to pay the player!**
