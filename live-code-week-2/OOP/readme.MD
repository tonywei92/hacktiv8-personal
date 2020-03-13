# Zoo 🐅🐘 ( 90 Menit )

## Summary

Buatlah sebuah aplikasi untuk membuat simulator zoo.

## Release 0

Buatlah sebuah class `Eye` dengan properti:

- eyeCount -> (private) jumlah mata, nilai default `2`.

Terdapat 3 jenis `Animal`, yaitu:

- `Bird`, dengan properti :
  - name -> (public) Nama dari animal
  - eye -> (private) Object `Eye`.
  - facingSeason -> (private) nilai default null
  - isActive -> (public) nilai default `false`
  - activity -> (private) nilai default null
  - wings -> (public) nilai default `2`

- `Tiger`, dengan properti :
  - name -> (public) Nama dari animal
  - eye -> (private) Object `Eye`, asumsi jumlah mata `Animal` selalu `2`
  - facingSeason -> (private) nilai default null
  - isActive -> (public) nilai default `false`
  - activity -> (private) nilai default null
  - fangs -> (public) nilai default `4`

- `HoneyBear`, dengan properti :
  - name -> (public) Nama dari animal
  - eye -> (private) Object `Eye`, asumsi jumlah mata `Animal` selalu `2`
  - facingSeason -> (private) nilai default null
  - isActive -> (public) nilai default `false`
  - activity -> (private) nilai default null



**Note**: Season akan bernilai `bright` atau `rainy`. 

Buatlah sebuah class `Zoo` dengan properti:
- name -> (public) Nama dari zoo
- season -> (public) nilai default `bright`
- animals -> (public) List dari object `Animal`

## Release 1

Buatlah sebuah class `AnimalFactory` yang memiliki method `collectAnimals`.

Method ini menerima sebuah parameter berupa array dari string animal. Dan akan mengembalikan array dari object `Animal`.

```javascript
const animals = AnimalFactory.collectAnimals(['tiger', 'bird'])
console.log(animals)
// OUTPUT

// [
//   Object Tiger,
//   Object Bird
// ]
```

**Perhatikan Drive Code dengan seksama**

## Release 2

Pada class `Zoo`, buatlah sebuah method `addAnimals` yang akan memasukkan array animals ke dalam properti `animals`.

Masih pada class `Zoo`, buatlah sebuah method `nextSeason` yang berfungsi untuk mengubah properti `season` dari `bright` menjadi `rainy` dan sebaliknya. 

Tambahkan setter di class `Animal` untuk mengubah private properti `facingSeason`.

Value properti `facingSeason` pada setiap `Animal` akan mengikuti perubahan `season` di zoo.

```javascript
const zoo = new Zoo('Taman Safari');
const animals = AnimalFactory.collectAnimals(['tiger'])
zoo.addAnimals(animals)
console.log(zoo);
/*
  Zoo {
    name: 'Taman Safari',
    season: 'bright',
    animals: [
      Tiger {
        ...
        facingSeason: 'bright'
      }
    ]
  }
*/
zoo.nextSeason();
/*
  Zoo {
    name: 'Taman Safari',
    season: 'rainy',
    animals: [
      Tiger {
        ...
        facingSeason: 'rainy'
      }
    ]
  }
*/
```

**Perhatikan Drive Code dengan seksama**

## Release 3

Buatlah method `makeActivity` pada class `Animal`, yang mengubah properti `isActive` menjadi true ketika `facingSeason bright` dan false ketika `facingSeason rainy`. 

Di method yang sama, properti `activity` berubah menjadi `playing` ketika `isActive` true, dan menjadi `warming` ketika `isActive` false.

Ketika `Animal` mengalami perubahan musim, maka otomatis aktivitas mereka berubah sesuai ketentuan diatas.


## Release 4

Pada class `Animal`, buatlah sebuah `getter` untuk private properti `activity` yang akan mengembalikan '<nama_animal> is <nama_activity>'.

Pada class `Zoo`, buatlah sebuah method `showAnimalsActivity` yang akan menampilkan aktivitas dari setiap animal.

Pada class `HoneyBear`, override method `makeActivity` yang mengubah aktivitas menjadi  `climbing tree` di musim `bright` dan `sleeping` di musim `rainy`.

```javascript
const zoo = new Zoo('Taman Safari');
const animals = AnimalFactory.collectAnimals(['tiger', 'honeyBear']);
zoo.addAnimals(animals)
zoo.showAnimalsActivity();
/*
  tiger is playing
  honeyBear is climbing tree
*/
zoo.nextSeason();
zoo.showAnimalsActivity();
/*
  tiger is warming
  honeyBear is sleeping
*/
```

## Release 5

Jawablah relasi hubungan antar class yang ada di paling bawah drive code, sesuai pada soal ini.

```javascript
// Tunjukan hubungan-hubungan antar class yang telah kalian buat diatas:
// contoh: person <-> bioskop = aggregation
// 
// Jawaban:
// <jawaban disini>
```