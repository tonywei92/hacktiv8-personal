# SUMMON HERO

> ⏰ Time Estimation: ~90 mins

buatlah sebuah permainan RPG yang terdapat 3 pahlawan yaitu Assassin, Mage, Knight. Ketiga pahlawan ini sama-sama memiliki name, job, health, mana, attack, money, items dan masing-masih hero memiliki skill yang berbeda-beda.

```text
Assassin memiliki skill yang akan mereturn ‘Ciat..! Serangan tanpa bayangan..’
Knight memiliki skill yang akan mereturn ‘Lemparan Perisai Suci’
Mage  memiliki skill yang akan mereturn ‘Terimalah serangan sihir ini..’
```

## Release 0
buatlah 4 karakter dengan detail berikut:


1. Name: Rikimaru, Job: Assassin, Health: 1200, Mana: 543, Attack: 431, Money: 1200
2. Name: Leonidas, Job: Knight, Health: 3213, Mana: 126, Attack: 431, Money: 1700
3. Name: Gandalf, Job: Mage, Health: 1130, Mana: 603, Attack: 231, Money: 2500
4. Name: Ezio, Job: Assassin, Health: 1250, Mana: 523, Attack: 431, Money: 2100

setiap karakter dapat memiliki lebih dari satu item. setiap item memiliki attribute nama, job, detail, healthpoint, manapoint, attackpoint, price,

```
  nama: untuk menyimpan nama dari item tersebut
  job: untuk mentukan job apa saya yang bisa menggunakan item ini
  price: adalah harga dari item tersebut
  healthpoint: jumlah health yang akan bertambah ke dalam health karakter
  manapoint: jumlah mana yang akan bertambah ke dalam mana karakter
  attackpoint: jumlah attack yang akan bertambah ke dalam attack karakter
```

buatlah 2 item apa saja, yang sesuai dengan kondisi diatas

## Release 1

kalian dapat membeli dan menjual item yang sudah dibuat.

  - buatlah method buyItem() yang berfungsi untuk membeli item dan memasukannya kedalam properti items.
    - method dapat mengvalidasi apakah item yang di input sesuai dengan job karakter
    - method dapat mengvalidasi apakah uang dari karakter cukup untuk membeli item
    - tambahkan healthpoint item ke status health karakter
    - tambahkan manapoint item ke status mana karakter
    - tambahkan attackpoint item ke status attack karakter
    - kurangkan uang yang ada di karakter sesuai dengan harga item
    - input object item kedalam properti items
  - buatlah method sellItem() yang berfungsi untuk menjual item dan mengeluarkannya dari daftar items.
    - kurangkan status health karakter berdasarkan healthpoint item
    - kurangkan status mana karakter berdasarkan manapoint item
    - kurangkan status attack karakter berdasarkan attackpoint item
    - tambahkan uang karakter berdasarkan 50% dari harga item.
    - kurangkan object item dari properti items

## Release 2

saatnya bertarung...!!!

didalam game ini terdapat banyak monster yang memiliki attribute
name, health, attack, weakness

```
  name: nama dari monster
  health: jumlah health dari monster
  attack: jumlah attack dari monster
  weakness: value dari properti ini adalah monster tersebut lemah terhadap job karakter apa.
```

buatlah 2 monster apa saja, yang sesuai dengan kondisi diatas

buatlah method untuk menyerang monster karena ini permainan RPG yang bersifat '*turn base*' maka setelah karakter menyerang maka monster akan menyerang.
  - health monster akan berkurang sesuai dengan jumlah attack karakter
  - jika monster mati pada saat diserang maka monster tidak dapat menyerang balik karakter tetapi jika health monster masih tersisa maka monster dapat menyerang karakter
  - jika job karakter sama dengan weakness dari monster maka serangan akan bertambah 50%
  - keluarkan output '**Kamu Berhasil Menyerang [nama monster] dengan jumlah serangan [angka dari serangan termasuk yang sudah ditambah] Darah kamu terisaa [sisa Healt karakter] jadi barhati-hatilah**' jika health karakter dan health monster masih tersisa
  - keluarkan output '**Kamu berhasil membunuh monster [nama monster]. dan sisa darah kamu adalah [healt karakter]**' jika monster mati
  - keluarkan output '**Kamu kalah sebaiknya pulang ke kota dan beli item lagi**' jika serangan monster lebih besar dari health karakter / karakter mati.
