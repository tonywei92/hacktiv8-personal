# POKEMON GO

> ⏰ Time Estimation: ~90 mins

Buatlah sebuah permainan `Pokemon Go` yang terdapat 2 Character yaitu Trainer dan Gym Leader. Kedua character ini sama-sama memiliki first name, last name, gold, role, pokemons.

Character Trainer bertujuan untuk mengumpulkan badge dari Gym Leader.

## Release0
buatlah 3 karakter dengan detail berikut:

1. First Name: Ash, Last Name: Ketchum, Gold: 200000, Role: trainer
2. First Name: Claire, Last Name: Dragon, Gold: 200000, Role: trainer
3. First Name: Mr, Last Name: Brock, Pokemons: [ Charmender, Squirtle ], Badge: Rock Stone, Role: gym leader

```text
Trainer memiliki greeting yang akan menampilkan:
Pokemon Go Go Go!
Halo saya Trainer [first nama], saya akan mengumpulkan badge!


Gym Leader memiliki greeting yang akan menampilkan:
Pokemon Go Go Go!
Halo saya Gym Leader [last nama], bertarunglah dengan saya!
```

## Release 1
setiap character dapat memiliki lebih dari satu Pokemon. setiap Pokemon memiliki attribute name, hp, attack, speed, type.

```text
  nama: untuk menyimpan nama dari pokemon tersebut
  hp: untuk menunjukan health poin
  attack: poin serangan untuk mengurangi hp musuh
  speed: poin kecepatan, menentukan menyerang terlebih dahulu
  type: untuk menentukan tipe pokemon
```

buatlah 3 Pokemon, dengan data sebagai berikut:
1. Name: bulbasaur, HP: 30000, Attack: 3000, Speed: 50, Type: grass
2. Name: charmender, HP: 14000, Attack: 3500, Speed: 30, Type: fire
3. Name: squirtle, HP: 6000, Attack: 500, Speed: 40, Type: water

- buatlah method `catch` untuk semua trainer sehingga dia bisa menangkap pokemon.
- Para trainer juga bisa melakukan trade pokemon ke trainer lain. sehingga pokemon A bisa pindah ke trainer B, dan pokemon B bisa pindah ke trainer A.
  - jika pokemon A tidak ada di trainer A ATAU pokemon B tidak ada di Trainer B, keluarkan output **pokemon [nama pokemon] tidak ada**

## Release 2

saatnya bertarung...!!!

Di dalam game ini terdapat 3 jenis tipe pokemon: Grass, Water, Fire. Serangan pokemon akan menjadi 2 kali lipat jika melawan tipe pokemon tertentu.

- Grass lebih kuat dari Water
- Water lebih kuat dari Fire
- Fire lebih kuar dari Grass

buatlah method `attack` pada pokemon, yang sesuai dengan kondisi di atas.

buatlah method `battle` untuk menyerang karakter lain, dan masukan jumlah pokemon dipertandingkan. Karena ini permainan RPG yang bersifat '*turn base*' maka setelah pokemon karakter (A) menyerang maka pokemon karakter (B) akan menyerang.

- pertarungan 1 vs 1 hingga jumlah pokemon yang dipertandingkan habis
- karakter yang melakukan battle ke karakter lain, disebut penantang
- pokemon yang akan menyerang duluan adalah pokemon yang memiliki speed tertinggi
- health poin pokemon A akan berkurang sesuai dengan jumlah attack pokemon B, begitupun sebaliknya.
- keluarkan output **[nama lengkap] dengan pokemon [nama pokemon] berhasil menyerang [nama lengkap] dengan pokemon [nama pokemon]** jika health pokemon (A) masih tersisa, begitupun sebaliknya
- jika pokemon (B) mati pada setelah diserang, maka pokemon (A) menang, dan karakter lawan akan mengganti ke pokemon berikutnya, begitupun sebaliknya.
- keluarkan output **[nama lengkap] dengan pokemon [nama pokemon] menang`** jika pokemon lawan mati (hp = 0)
- jika pokemon masih tersisa, pokemon berikutnya akan menggantikan pokemon yang mati tersebut, dan pertarungan akan dilanjutkan kembali.
- jika semua pokemon karakter (A/B) mati, maka pertarungan berakhir
- keluarkan output **You win the battle** jika penantang menang
- keluarkan output **You lose the battle** jika penantang kalah

Adapun ketentuan setelah battle berakhir:
- Trainer VS Gym Leader
  - jika pemenangnya adalah Trainer, maka Trainer akan menambahkan badge yang sama dari Gym Leader dan gold Gym Leader akan berkurang 80% dan berpindah ke Trainer
  - jika pemenangnya adalah Gym Leader maka gold Trainer akan berkurang 80% dan akan berpindah ke Gym Leader
- Trainer VS Trainer
  - jika menang, maka gold Trainer yang kalah akan mendapatkan 50% ke trainer yang menang

contoh tampilan pertarungan:
```text
/*
pokemon Squirtle milik Ash Ketchum berhasil menyerang pokemon Charmender milik Mr Brock
pokemon Charmender milik Mr Brock berhasil menyerang pokemon Squirtle milik Ash Ketchum
pokemon Squirtle milik Ash Ketchum berhasil menyerang pokemon Charmender milik Mr Brock
pokemon Charmender milik Mr Brock berhasil menyerang pokemon Squirtle milik Ash Ketchum
============================================
Charmender milin Mr Brock menang!
============================================
pokemon Bulbasaur milik Ash Ketchum berhasil menyerang pokemon Charmender milik Mr Brock
pokemon Charmender milik Mr Brock berhasil menyerang pokemon Bulbasaur milik Ash Ketchum
pokemon Bulbasaur milik Ash Ketchum berhasil menyerang pokemon Charmender milik Mr Brock
pokemon Charmender milik Mr Brock berhasil menyerang pokemon Bulbasaur milik Ash Ketchum
pokemon Bulbasaur milik Ash Ketchum berhasil menyerang pokemon Charmender milik Mr Brock
pokemon Charmender milik Mr Brock berhasil menyerang pokemon Bulbasaur milik Ash Ketchum
pokemon Bulbasaur milik Ash Ketchum berhasil menyerang pokemon Charmender milik Mr Brock
============================================
Bulbasaur milik Ash Ketchum menang!
============================================
pokemon Bulbasaur milik Ash Ketchum berhasil menyerang pokemon Squirtle milik Mr Brock
============================================
Bulbasaur milik Ash Ketchum menang!
============================================
You win the battle
*/
```