# FARM SYSTEM
> ⏰ Time Estimation: ~40 mins

Sebuah Peternakan Hewan yang memiliki beberapa jenis `Animal` yaitu `Cow`, `Sheep`, dan `Chicken`. 


### Release 0
Buatlah class-class yang sesuai. Adapun spesifikasi setiap `Animal` adalah sebagai berikut:


```bash
Cow

legs: 4
age: <umur hewan>
birthAge: 4 // melahirkan setiap umurnya kelipatan 4
method:
  birth() // mengembalikan nilai object hewan baru (sapi)

Sheep

legs: 4
age: <umur hewan>
birthAge: 3 // melahirkan setiap umurnya kelipatan 3
method:
  birth() // mengembalikan nilai object hewan baru (domba)

Chicken

legs: 2
age: <umur hewan>
spawn: 2 // bertelur setiap umurnya kelipatan 2
method:
  spawn() // mengembalikan nilai array of object hewan baru (ayam)
```

### Release 1
Buatlah sebuah class Farm yang memiliki properti sebagai berikut: 
- name: nama dari peternakan
- location: lokasi peternakan
- animals: kumpulan object animals. Default value awal merupakan Array kosong

```javascript
const safari = new Farm("safari", "puncak")
```

Buatlah method `getAnimals` yang menerima parameter berupa objek binatang. Umur hewan didapatkan dari Math.random antara 2 sampai 5. **Parameter input tidak boleh diubah.**

```javascript
safari.getAnimals({
  Cow: 1,
  Chicken: 2,
  Sheep: 3
})
console.log(safari)
/*
Farm {
  name: 'Taman Safari',
  location: 'Puncak',
  animals:
   [ Cow { age: 4, legs: 4, birthAge: 4 },
     Chicken { age: 3, legs: 2, spawnAge: 2 },
     Chicken { age: 3, legs: 2, spawnAge: 2 },
     Sheep { age: 4, legs: 4, birthAge: 2 },
     Sheep { age: 3, legs: 4, birthAge: 2 },
     Sheep { age: 2, legs: 4, birthAge: 2 } ] }
*/
```

### Release 2
Buatlah method `nextYear` pada class `Farm`. Berikut adalah ketentuant method `nextYear` saat dijalankan:
- Akan menambah attribut semua animal yang terdapat difarm tersebut sebanyak 1.
- Apabila saat penambahan umur masing-masing hewan properti `age` pada hewan tersebut merupakan kelipatan dari `birthAge` atau `spawnAge`, maka hewan tersebut akan menjalankan method `birth()` pada sapi atau domba atau method `spawn()` pada ayam.
- Ketika method `spawn` atau `birth` dijalankan maka, properti list animals pada `Farm` tersebut akan bertambah sesuai dengan ketentuan berikut:
  - method `birth()` akan mengembalikan nilai berupa **object class** Hewan tersebut dengan default properti `Age` pada hewan `0`.
  - method `spawn()` akan mengembalikan nilai berupa **array of object class** Hewan tersebut dengan default properti `Age` pada hewan `0`. Jumlah `object` yang dihasilkan saat method `spawn` dijalankan adalah `Math.random` antara 2 sampai 5.
- Nilai balikan dari kedua method tersebut akan dimasukan kedalam properti `animals` pada class `Farm`

```javascript
  safari.nextYear()
  console.log(safari)
  /*
  Farm {
    name: 'Taman Safari',
    location: 'Puncak',
    animals:
      [ 
        Cow { age: 5, legs: 4, birthAge: 4 },
        Chicken { age: 4, legs: 2, spawnAge: 2 },
        Chicken { age: 4, legs: 2, spawnAge: 2 },
        Sheep { age: 5, legs: 4, birthAge: 2 },
        Sheep { age: 4, legs: 4, birthAge: 2 },
        Sheep { age: 3, legs: 4, birthAge: 2 },
        Chicken { age: 0, legs: 2, spawnAge: 2 },
        Chicken { age: 0, legs: 2, spawnAge: 2 },
        Chicken { age: 0, legs: 2, spawnAge: 2 },
        Sheep { age: 0, legs: 4, birthAge: 2 } ] }
  */
```