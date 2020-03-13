
# **DOTA MINI**
> ⏰ Time Estimation: ~120 mins

### Summary
Buatlah sebuah permainan MOBA sederhana dimana terdapat `Hero` dimana 1 `Hero` bisa memiliki lebih dari 1 `Item`. `Item` dapat dibeli di Shop.

### RELEASE 0
Terdapat 4 jenis `Hero` yaitu dimana `Hero` memiliki:
 - username : `string nama player`
 - health: 200
 - mana: 75
 - money: 500
 - items: []
  1. Axe
     * name: Mogul Khan
     * type: strength
     * damage: 70
     * strength: 70
     * intelligence: 20
     * agility: 30
  2. Earthshaker
     * name: Raigor Stonehoof The Earthshaker
     * type: strength
     * damage: 85
     * strength: 80
     * intelligence: 30
     * agility: 20
  3. Invoker
     * name: Invoker
     * type: Intelligence
     * damage: 60
     * strength: 30
     * intelligence: 90
     * agility: 20
  4. Shadow Fiend
     * name: Nevermore The Shadow Fiend
     * type: Agility
     * damage: 55
     * strength: 45
     * intelligence: 25
     * agility: 77

**HEALTH** untuk `Hero` dengan type Strength akan ditambahkan dengan 562.5, type Intelegence akan ditambahkan dengan 405 dan type Agility akan ditambahkan 450 dari basic health `Hero`.
Buatlah class yang diperlukan dan tentukan juga keterkaitan antar class nya !

### RELEASE 1
Setiap `Hero` bisa membeli banyak `Item`. `Item` yang disediakan oleh `Shop` hanya terdapat 3 jenis yaitu:
  1. Iron Branch
     * name: Iron Branch
     * Price: 50
     * bonus: {strength: 1, agility: 2, intelligence: 1}
  2. Healing Salve
     * name: Healing Salve
     * Price: 110
  3. Gauntlets Of Strength
     * name: Gauntlets Of Strength
     * price: 135
     * bonus: {strength: 3}

### RELEASE 2
Buatlah method untuk membeli `Item` pada class `Hero` yang memiliki satu parameter berupa object_item.
Dimana:
  - jika uang yang dimiliki oleh `Hero` tersebut tidak cukup akan menampilkan pesan "Sorry your balance is not sufficient to buy this item"
  - jika uang cukup maka cek jika `Item` yang dibeli memiliki property bonus, maka property hero tersebut akan bertambah sesuai dengan key bonus pada item tersebut.
    Contoh:
     1. Axe membeli Iron Branch, maka:
        - Strength Axe bertambah 1: 70+1 => 71
        - Agility Axe bertambah 2: 30+2 => 32
        - Intelegence Axe bertambah 1: 20+1 => 21
     2. Earthshaker membeli Gauntlets Of Strength, maka strength dari Earthshaker akan bertambah 3 menjadi 83, dst.
  - jika uang cukup maka tambahkan `Item` yang berhasil dibeli pada property items pada `Hero` dan uang dari `Hero` tersebut harus berkurang. **Coba pikirkan relasi apa yang cocok antara item dengan hero ini**

### RELEASE 3
Setelah itu buat Class `Shop` dimana di class Shop memiliki method untuk menjual `Item` dengan parameter `Hero` dan item name
contoh test Case
```javascript
Shop.sellItem([parameter_Hero], [nama_Item])
```
dengan mengakses test case di atas, maka method buyItem pada `Hero` akan otomatis terpanggil

### RELEASE 4
Buatlah method attack dimana `Hero` yang sedang diakses dapat menyerang `Hero` lainnya
contoh test Case
```javascript
objectHero.attack([parameter_Hero])
```
Dimana:
 - Jika health dari `Hero` penyerang lebih kecil atau sama dengan 0 maka munculkan pesan "YOU [nama_hero] HAVE BEEN SLAIN! YOU CANNOT ATTACK"
 - Jika health dari `Hero` yang diserang lebih kecil atau sama dengan 0 maka munculkan pesan "[nama_hero] already died"
 - Health dari `Hero` yang diserang akan berkurang sesuai dengan damage dari `Hero` penyerang ditambahkan strength dari `Hero` penyerang.
 - Jika `Hero` melakukan attack maka tampilkan pesan
 "[hero_penyerang] attack [hero_yangDiserang] with damage [damage_hero_penyerang+strength_hero_pernyerang]
   Current Health [hero_yangDiserang] is [health_hero_yangDiserang]"
 - Jika health `Hero` yang diserang telah 0 maka tampilkan pesan "You killed [hero_yang_diserang]" dan uang `Hero` penyerang akan bertambah 1000
 - Jika `Hero` yang diserang memiliki item `Healing Salve` maka secara otomatis health dari `Hero` yang diserang akan bertambah 400 dan item `Healing Salve` dari items `Hero` yang diserang akan dihapus. Dan Munculkan pesan "[hero_yang_diserang] is using Healing Salve.[hero_yang_diserang] current health is [health_hero_yangDiserang]"
**NOTE**
Health `Hero` yang diserang tidak boleh minus
