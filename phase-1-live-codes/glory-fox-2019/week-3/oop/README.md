<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 3


# BACTERIA

> ⏰ Time Estimation: ~20 mins

Sebuah Bacterium Ecosystem memiliki beberapa jenis `Bacterium` yaitu `Propionbacterium`, `Staphylobacterium`, dan `Corynebacterium`.


### Release 0
Buatlah class-class yang sesuai dan tentukan keterkaitannya jika ada. Adapun spesifikasi setiap `Bacterium` adalah sebagai berikut:


```javascript
- Propionbacterium

tails: 4
age: <umur bacterium>
birthAge: 3
method:
  birth() // menuliskan "`Propionbacterium` membelah diri"

- Staphylobacterium

tails: 3
age: <umur bacterium>
birthAge: 1
method:
  birth() // menuliskan "`Staphylobacterium` bertelur"

- Corynebacterium

tails: 1
age: <umur bacterium>
birthAge: 2
method:
  birth() //menuliskan "`Corynebacterium` bermutasi"
```

### Release 1
Buatlah sebuah class `Ecosystem` yang memiliki properti sebagai berikut:
- name: nama dari ekosistem
- location: lokasi ekosistem
- bacteria: kumpulan object bacterium, dimana default value awal merupakan Array kosong

```javascript
let ecosystem = new Ecosystem("Epidermis", "skin")
```

### Release 2
Buatlah method `getBacteria` pada class `Ecosystem` yang menerima parameter berupa objek literal kumpulan nama Bacterium dan jumlahnya.

Dimana method ini berfungsi untuk mengisi value property dari `bacteria`. Value age pada Class `Bacterium`, `Propionbacterium`, `Staphylobacterium`, dan `Corynebacterium` harus random (range 2-5). **Tipe dan jumlah parameter input tidak boleh diubah.**

```javascript
ecosystem.getBacteria({
  Propionbacterium: 3,
  Corynebacterium: 2,
  Staphylobacterium: 3,
  Bacterium: 1
})
console.log(ecosystem)
/*
Ecosystem {
  name: 'Epidermis',
  location: 'skin',
  bacteria:
   [ Propionbacterium { age: 4, tails: 4, birthAge: 3},
     Propionbacterium { age: 2, tails: 4, birthAge: 3 },
     Propionbacterium { age: 5, tails: 4, birthAge: 3 },
     Corynebacterium { age: 4, tails: 1, birthAge: 2 },
     Corynebacterium { age: 4, tails: 1, birthAge: 2 },
     Staphylobacterium { age: 2, tails: 3, birthAge: 1 },
     Staphylobacterium { age: 4, tails: 3, birthAge: 1 },
     Staphylobacterium { age: 4, tails: 3, birthAge: 1 },
     Bacterium { age: 3, tails: 0, birthAge: 0 } ] }
*/
```

### Release 3
Ketika menjalankan driver code dibawah ini:
```
  ecosystem.bacteria.forEach(backterium => {
    console.log(backterium.birth());
  })
```

output yang diharapkan adalah:
```
Propionbacterium membelah diri
Propionbacterium membelah diri
Propionbacterium membelah diri
Corynebacterium bermutasi
Corynebacterium bermutasi
Staphylobacterium bertelur
Staphylobacterium bertelur
Staphylobacterium bertelur
I am a parent!
```
