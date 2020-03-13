# ** QUERY (estimasi 30 Menit) **

### dilarang menggunakan view, sub-query
### contoh hasil di Readme berupa json HANYA untuk referensi hasil data yang diharapkan. yang diperlukan hanya query saja.

## Release 0

- tampilkan semua data player dan total card yang dimiliki setiap player, yang total card nya mulai dari 5 atau lebih banyak dan diurutkan berdasarkan umur.

hasilnya sebagai berikut:
```javascript
[
  {
    id: 3,
    name: 'Hamabe',
    gender: 'Female',
    age: 18,
    total_card: 7
  },
  {
    id: 1,
    name: 'Fayola',
    gender: 'Male',
    age: 20,
    total_card: 7
  },
  {
    id: 2,
    name: 'Jerax',
    gender: 'Male',
    age: 24,
    total_card: 8
  }
]

```

## Release 1

- tampilkan nama dari player dan title dari status dalam 1 kolom bernama 'name_and_title'


hasilnya sebagai berikut:
```javascript
[ { name_and_title: 'Apprentice' },
  { name_and_title: 'Beggar' },
  { name_and_title: 'Berserker' },
  { name_and_title: 'Dendimon' },
  { name_and_title: 'Fayola' },
  { name_and_title: 'Fiverna' },
  { name_and_title: 'Greenhorn' },
  { name_and_title: 'Grunt' },
  { name_and_title: 'Hamabe' },
  { name_and_title: 'Henchman' },
  { name_and_title: 'Hero' },
  { name_and_title: 'Jerax' },
  { name_and_title: 'Jeyone' },
  { name_and_title: 'Matumbaman' },
  { name_and_title: 'Minami' },
  { name_and_title: 'Novice' },
  { name_and_title: 'Rogoue' },
  { name_and_title: 'Rookie' },
  { name_and_title: 'Saitama' },
  { name_and_title: 'Vandal' } ]
```

## Release 2

- tampilkan gabungan data dari rank, type, skill dari Cards dengan nama column 'description' dimana setiap 1 row data nya tidak boleh ada yang duplicate.
- hints : combine two columns

hasilnya sebagai berikut:
```javascript
[ { description: 'Common-Caster-Prelati Spellbook' },
  { description: 'Common-Caster-Rule Breaker' },
  { description: 'Common-Lancer-Gae Bolg' },
  { description: 'Common-Rider-Bellerophon' },
  { description: 'Common-Saber-Caladbolg' },
  { description: 'SR-Archer-Unlimited Blade Words' },
  { description: 'SR-Berserk-Knight of Owner' },
  { description: 'SR-Berserk-Nine Lives' },
  { description: 'SR-Rider-Tarasque' },
  { description: 'SR-Saber-Excalibur' },
  { description: 'SSR-Archer-Phasupata' },
  { description: 'SSR-Archer-Tri-star Amore Mio' },
  { description: 'SSR-Caster-Unreturning Army' },
  { description: 'SSR-Lancer-Brynhildr Romantia' },
  { description: 'SSR-Lancer-Gae Bolg' },
  { description: 'SSR-Rider-Golden Wild Hunt' },
  { description: 'SSR-Saber-Boundary Of Emptiness' },
  { description: 'SSR-Saber-Excalibur' },
  { description: 'Uncommon-Archer-Stella' },
  { description: 'Uncommon-Assasin-Swallow Reversal' },
  { description: 'Uncommon-Assasin-Zabaniya' },
  { description: 'Uncommon-Lancer-Thermopylae Enomotia' } ]
```
