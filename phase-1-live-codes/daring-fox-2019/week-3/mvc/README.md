## HACKTIV8 GO
> ⏰ Time Estimation: ~150 mins

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
- `Trainers`
  - `id (INTEGER, PK, AI)`
  - `firstName (text)`
  - `lastName (text)`
  - `username (text)`

- `Monsters`
  - `id (INTEGER, PK, AI)`
  - `species (text)`
  - `level (INTEGER)`
  - `hp (INTEGER)`
  - `attack (INTEGER)`
  - `speed (VARCHAR)`
  - `type (TEXT)`
  - `experience (TEXT)`
  - `TrainerId (INTEGER, FK, REFERENCES Schools(Id)` 

## General
Applikasi ini memiliki **3 Fitur Query** dan **3 Fitur Utama**

  - **FITUR QUERY**
    - getTrainersWhoHave5MonstersWithAverageLevel6: Mendapatkan list trainer yang memiliki total 5 monster dengan rata2 level monster 6
    - getTotalTypeMonsterEachTrainer: Mendapatkan total type monster pada masing-masing trainer.
    - getRankTop2to4MonstersWithNameLikeTle: Mendapatkan monster yang memiliki species dengan akhiran `tle` dan ambil 3 monster yang memiliki level tertinggi namun tidak mengambil data yang pertama.
  
  - **FITUR UTAMA**
  
    - catch: menangkap monster yang digenerate random
    - trade: bertukar monster sesama trainer
    - train: melatih monster yang dipilih



## Command
```bash
  Perintah yang perlu kamu buat adalah sebagai berikut:

  // UNTUK FITUR QUERY

  node index.js getTrainersWhoHave5MonstersWithAverageLevel6
  node index.js getTotalTypeMonsterEachTrainer
  node index.js getRankTop2to4MonstersWithNameLikeTle

  // UNTUK FITUR UTAMA

  node index.js catch <usernameTrainer> <speciesMonster> <typeMonster>
  node index.js trade <monsterId1> <monsterId2>
  node index.js train <usernameTrainer> <monsterId>
```

**NOTES**
  - Untuk release 0 sampai 2 kamu tidak perlu membalikan array of object dari class boleh langsung object literal
  - boleh membuat class atau static method sendiri hanya untuk mendapatkan hasil query
  - nama column yang diselect HARUS sesuai format

### RELEASE 0 : getTrainersWhoHave5MonstersWithAverageLevel6
Tampilkan Trainer yang memiliki 5 monster dengan rata2 semua level monster yang dimiliki adalah 6
```javascript
  COMMAND:
  node index.js getTrainersWhoHave5MonstersWithAverageLevel6

  OUTPUT:
  /*
    [ 
      { 
        fullName: 'Wika Silo',
        averageLevelmonster: 6,
        totalmonster: 5 
      } 
    ]
  */
```

### RELEASE 1 : getTotalTypeMonsterEachTrainer
Tampilkan nama lengkap trainer dengan total monster masing-masing type yang dimiliki oleh setiap trainer. Data digroup berdasarkan nama lengkap trainer dan masing-masing type monster yang dimiliki setiap trainer. Data diurutkan berdasarkan fullName secara ascending.
```javascript
  COMMAND:
  node index.js getTotalTypeMonsterEachTrainer

  OUTPUT:
  /*
    [ 
      { fullName: 'Armedi ', type: 'grass', totalMonster: 2 },
      { fullName: 'Armedi ', type: 'water', totalMonster: 1 },
      { fullName: 'Suprayogi Yoki', type: 'grass', totalMonster: 1 },
      { fullName: 'Suprayogi Yoki', type: 'water', totalMonster: 2 },
      { fullName: 'Wika Silo', type: 'fire', totalMonster: 1 },
      { fullName: 'Wika Silo', type: 'water', totalMonster: 4 } 
    ]
  */
```

### RELEASE 2 : getRankTop2to4MonstersWithNameLikeTle
Mendapatkan monster yang memiliki species dengan akhiran `tle` dan ambil 3 monster yang memiliki level tertinggi namun tidak mengambil data yang pertama atau row yang diambil dimulai dari yang kedua.
```javascript
  COMMAND:
  node index.js getRankTop2to4MonstersWithNameLikeTle

  OUTPUT:
  /*
    [ 
      { 
        id: 10,
        species: 'wartotle',
        level: 6,
        hp: 5027,
        attack: 232,
        speed: 113,
        type: 'water',
        experience: 5,
        TrainerId: 2 
      },
      { 
        id: 9,
        species: 'squirtle',
        level: 4,
        hp: 3027,
        attack: 332,
        speed: 233,
        type: 'water',
        experience: 75,
        TrainerId: 1 
      },
      { 
        id: 3,
        species: 'squirtle',
        level: 2,
        hp: 1027,
        attack: 132,
        speed: 133,
        type: 'water',
        experience: 32,
        TrainerId: 3 
      } 
    ]
  */
```


### NOTES
  - Mulai dari release 3 ketika retrieve atau pengambilan data wajib mengembalikan berupa `instance` atau `object` dari class model tersebut.
  - Buatlah error handling ketika gagal melakukan query ke database yang messagenya didapatkan dari setiap method db npm sqlite3.


### RELEASE 3 : CATCH

Output dari release ini adalah menambahkan data baru kedalam table `Monsters` dengan ketentuan sebagai berikut:
  - species: diambil dari input argv
  - level: digenerate random dari range 1 - 5
  - hp: digenerate random antara 1000 sampai (level random yg didapat + 1) * 1000
  - attack: digenerate random antara 100 sampai (level random yg didapat + 1) * 100
  - speed: digenerate random antara 100 sampai (level random yg didapat + 1) * 000
  - type: diambil dari input argv
  - experience: 0
  - TrainerId: didapatkan dari id pada table Trainers berdasarkan username yang diinput dari argv


**RULES**

  - Buatlah validasi untuk mengecek apakah trainer tersebut ada didalam database atau tidak. Contoh pesan output pada terminal adalah `Trainer with ${usernameInput} not found`

```javascript
  COMMAND:
  node index.js catch <usernameTrainer> <speciesMonster> <typeMonster>

  EXAMPLE
  node index.js catch wikanyaa bulbasaur grass

  EXAMPLE OUTPUT:
  /*
    Success catch new grass type monster with details:
    Species: bulbasaur
    Level: 3
    hp: 2074
    attack: 370
    speed: 316
  */
```

### RELEASE 4 : Trade
Fitur ini bertujuan untuk menukar monster sesama trainer. Output dari release ini adalah menukar dan mengupdate data pada table `Monsters` pada column `TrainerId`.

**RULES**
  - Buatlah validasi untuk mengecek apakah id monster tersebut ada didalam database atau tidak. Contoh pesan output pada terminal adalah `Monster with ${monsterIdInput} not found`
  - Buatlah validasi untuk mengecek tiba bisa menukar monster yang memiliki `TrainerId` yang sama. Contoh pesan output pada terminal adalah `Transaction failed! You can't trade monster with yourself`


```javascript
  COMMAND:
  node index.js trade <monsterId1> <monsterId2>

  EXAMPLE
  node index.js catch 1 2

  EXAMPLE OUTPUT:
  /*
    TRADING SUCCESS!
    Monster with id 1 now belongsTo trainer with id 2
      AND
    Monster with id 2 now belongsTo trainer with id 1
  */
```

### RELEASE 5 : Train
Fitur ini bertujuan untuk mengupdate data pada table `Monster` dengan ketentuan sebagai berikut:
  - column yang diupdate pertama kali pada data monster adalah `experience` dengan nilai random antara 10 sampai 20.
  - Apabila `experience` pada monster tersebut telah melebihi 100 maka monster akan diupdate lagi dengan ketentuan sebagai berikut:
    - `experience` kembali lagi menjadi 0
    - `level` bertambah sebanyak 1
    - `hp` bertambah sebanyak angka random dari 100 sampai 200
    - `attack` bertambah sebanyak angka random dari 10 sampai 20
    - `speed` bertambah sebanyak angka random dari 10 sampai 20

**RULES**
  - Buatlah validasi untuk mengecek apakah username tersebut ada didalam database atau tidak. Contoh pesan output pada terminal adalah `Trainer with ${usernameInput} not found`
  - Buatlah validasi untuk mengecek apakah monster tersebut kepunyaan dari trainer yang diinput berdasarkan username dari argv terminal. Contoh pesan output pada terminal adalah `This monster doesn't belongsTo ${fullNameTrainer}`

```javascript
  COMMAND:
  node index.js trade <monsterId1> <monsterId2>

  EXAMPLE
  node index.js train wikanyaa 2

  EXAMPLE OUTPUT IF EXPERIENCE < 100:
  /*
    Success train monster!
    bulbasaur now need 83% to level up
  */

 EXAMPLE OUTPUT IF EXPERIENCE >= 100:
 /*
    Monster level up!
    bulbasaur now level 4
  */
```