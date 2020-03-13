**PABRIK ELEKTRONIK DAN ROBOT**
> ⏰ Time Estimation: ~40 mins

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

const components  = RobotFactory.produceElectronics({
  resistor: {
    quantity: 2,
    price: 1000,
    resistance: 100
  },
  capacitor: {
    quantity: 2,
    price: 500,
    capacitance: 50
  },
  inductor: {
    quantity: 2,
    price: 1000,
    inductance: 100
  }
})
console.log(components)
/*
[ 
  Resistor { name: 'resistor', price: 1000, resistance: '100 Ohm' },
  Resistor { name: 'resistor', price: 1000, resistance: '100 Ohm' },
  Capacitor { name: 'capacitor', price: 500, capacitance: '50 Farrad' },
  Capacitor { name: 'capacitor', price: 500, capacitance: '50 Farrad' },
  Inductor { name: 'inductor', price: 1000, inductance: '100 Henry' },
  Inductor { name: 'inductor', price: 1000, inductance: '100 Henry' } 
]
```

###RELEASE 2
Buatlah method pada class `ElectronicFactory` yang bernama `buildRobot`. Method akan menerima input berupa  `name` yang merupakan nama robot yg ingin dibuat, `buildPrice` yang merupakan harga jasa membuat robot, `components` yang merupakan komponen elektronik yang digunakan untuk membuat robot. Method akan mengembalikan sebuah objek `Robot` dengan spesifikasi sebagai berikut:
- name
- price
- components

**Bentuk atau type data pada properti wajib mengikuti requirement pada test case**

Untuk properti `price` pada Robot nilainya diambil dari `buildPrice` pada input parameter ditambah dengan properti `price` pada masing-masing komponen elektronik.

Buatlah method pada class `Robot` yang bernama `showInfo` yang akan mengeluarkan output dengan format sebagai berikut:
Name: < robotName >
Price: < robotPrice >
Resistance: < totalResistanceRobot > Ohm
Inductance: < totalInductanceRobot > Henry
Capacitance: < totalCapacitanceRobot > Farrad

```javascript
const robotTayo = RobotFactory.buildRobot("Robot Tayo", 10000, components) 
robotTayo.showInfo()
/*
Name: Robot Tayo
Price: 15000
Resistance: 200 Ohm
Inducantce: 200 Henry
Capacitance: 100 Farrad
*/

console.log(robotTayo)
/*
Robot {
  components:
   { resistor: [ [Resistor], [Resistor] ],
     capacitor: [ [Capacitor], [Capacitor] ],
     inductor: [ [Inductor], [Inductor] ] },
  name: 'Robot Tayo',
  price: 15000 }
*/
```

