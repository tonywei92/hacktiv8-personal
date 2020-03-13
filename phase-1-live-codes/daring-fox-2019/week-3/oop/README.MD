# Hacktiv8 Heroes
> ⏰ Time Estimation: 30 mins

Dalam permainana ini pemain dapat mengkoleksi hero untuk memenangkan pertandingan 

### Release 0 - Character creation
Di dalam game ini, terdapat `Character` yang memiliki attribute sebagai berikut: 
- id <terdiri dari 6 angka random> 
- gender <string male/female>
- name <string>
- money <default 15000>
- heroes <default array kosong>

Buatlah class yang mewakili kondisi di atas, serta buatlah getter untuk menampilkan `id`.

### Release 1 - Lets make a Hero
Dalam game ini terdapat beberapa jenis `Hero` yang secara umum memeiliki attribute sebagai berikut:
- id <format sama dengan `Character` id> 
- name <string>
- type <string fighter/tank/support>
- health <number>
- power <number>
- range <number, default value 1>
- price <number>

`Fighter` heroes memiliki tambahan attribute `killingPoint` yang secara default bernilai 0\
`Tank` heroes memiliki tambahan attributes `tankPoint` yang secara default bernilai 0\
`Support` heroes memiliki tambahan attribute `supportPoint` yang secara default bernilai 0

Buatlah class yang mewakili kondisi di atas, serta buatlah `getter` untuk menampilkan `id`.

### Release 2 - Heroes collection
Buatlah class `Game`, yang memiliki method buyHero sehingga pemain dapat membeli hero yang diinginkan. Method ini merima parameter `Character` dan nama hero yang ingin di beli. Pemain dapat membeli hanya jika uang yang dimilikinya cukup. tampilkan pesan sesuai yang telah di sediakan pada driver code.\
Note:\
**list heroes telah disediakan pada skeleton code**

```javascript
  EXAMPLE COMMAND:
  Game.buyHero(heroes, adam, 'tigreal')
```

### Release 3 - Win
Tambahkan method `win` pada `Game` yang akan menerima 2 parameter berupa `character` dan `indexHero` yang dimainkan. Method ini akan mengubah properti dengan ketentuan sebagai berikut:

`Fighter` Hero:
- Attribut `killingPoint` pada `Hero` akan bertambah sebanyak 3
  
`Tank` Hero:
- Attribut `tankPoint` pada `Hero` akan bertambah sebanyak 3
  
`Support` Hero:
- Attribut `supportPoint` pada `Hero` akan bertambah sebanyak 3

Dan attribut `money` pada `Character` tersebut akan bertambah sebanyak 2000.
