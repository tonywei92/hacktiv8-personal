**PABRIK ELEKTRONIK DAN ROBOT**
> ⏰ Time Estimation: ~30 mins

Sebuah pabrik elektronik dan robot memiliki 3 jenis elektronik yang diproduksi yaitu `resistor`, `kapasitor`, dan `induktor`. 

###RELEASE 0 

Buatlah class Electronic yang memiliki property name dan price dan spesifikasi masing-masing jenis elektronik sebagai berikut:
  ```
  Resistor

  type: 'resistor',
  price: <harga barang>
  resistance: <besaran satuan pada resistor dalam ohm>

  Kapasitor

  type: 'kapasitor',
  price: <harga barang>
  capacitance: <besaran satuan pada kapasitor dalam farrad>

  Induktor

  type: 'induktor',
  price: <harga barang>
  inductance: <besaran satuan pada induktor dalam henry>
  ```

###RELEASE 1
Buatlah class `ElectronicFactory` yang memiliki method `produceElectronics`. Method akan mengembalikan array of Objects dari semua jenis elektronik dan menerima parameter berupa objek sebagai berikut: 
```javascript
const orderItems = {
  "Resistor": {
    quantity: 2, // jumlah barang yang dibeli
    price: 2000, // harga satuan barang
    resistance: 1100 // besaran satuan komponen elektronik
  },
  "Inductor": {
    quantity: 3,
    price: 3000,
    inductance: 100
  },
  "Capacitor": {
    quantity: 5,
    price: 2000,
    capacitance: 200
  }
}

let components = ElectronicFactory.produceElectronics(orderItems)
/*
[ Resistor { type: 'resistor', price: 2000, resistance: '100 Ohm' },
  Resistor { type: 'resistor', price: 2000, resistance: '100 Ohm' },
  Inductor { type: 'inductor', price: 3000, inductance: '10 Henry' },
  Inductor { type: 'inductor', price: 3000, inductance: '10 Henry' },
  Inductor { type: 'inductor', price: 3000, inductance: '10 Henry' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' } ]
```

###RELEASE 2
Buatlah method pada class `ElectronicFactory` yang bernama `buildRobot`. Method akan menerima input berupa  `name` merupakan nama robot yg ingin dibuat, `buildPrice` merupakan harga jasa membuat robot, `components` merupakan komponen elektronik yang digunakan untuk membuat robot. Method akan mengembalikan sebuah objek dengan spesifikasi sebagai berikut:
```
  Robot
  - name
  - price
```
Untuk properti `price` pada Robot nilainya diambil dari `buildPrice` pada input parameter ditambah dengan properti `price` pada masing-masing komponen elektronik.

```javascript

let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)
/*
  Robot { name: 'Robot Tayo', price: 24000 }
*/
```