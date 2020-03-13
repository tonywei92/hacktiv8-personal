# PABRIK MAINAN GUNDAM

Terdapat pabrik pembuat mainan gundam yang melakukan produksi 3 jenis gundam.  

Manfaatkan pengetahuan kamu tentang Inheritance, Aggregation, Composition dan Factory Method untuk memodelkan masalah ini.

### RELEASE 0
Adapun spesifikasi setiap Gundam adalah sebagai berikut:

1. Wingzero
  * size: '145cm'
  * price: '12000'
  * version: 'high grade'

2. Deathscythe
  * size: '235cm'
  * price: '16000'
  * version: 'master grade'

3. Sandrock
  * size: '145cm'
  * price: '9000'
  * version: 'high grade'

Buatlah class yang diperlukan dan tentukan juga keterkaitan antar class-nya !

### RELEASE 1
Buatlah class GundamFactory dan buatlah method produce yang menerima parameter nama gundam yang ingin dibuat berserta jumlah yang ingin dibuat.

### RELEASE 2
Buatlah class WareHouse yang mempunyai sebuah nama, maksimal jumlah kapasitas penampungan dan list items yang ada di gudang tersebut.

Buatlah Method untuk menampung mainan tersebut, dengan syarat:
- jika jumlah mainan tersebut muat, maka keluarkan output **Success add items to warehouse. Free space left: [sisakapasitas]**
- jika jumlah mainan melebihi kapasitas, maka keluarkan output **Cannot add more items to this warehouse. Free space left: [sisakapasitas]**

``` javascript
let wing = GundamFactory.produce('WingZero', 15);
let scythe = GundamFactory.produce('Deathscythe', 10);
let sandrock = GundamFactory.produce('Sandrock', 10);

console.log(wing) // akan ada 15 winggundam
/*
[ WingZero { size: '145cm', version: 'high grade', price: 12000 },
  WingZero { size: '145cm', version: 'high grade', price: 12000 },
  WingZero { size: '145cm', version: 'high grade', price: 12000 },
  ...
 ]
*/

let warehouse = new WareHouse('bandaiWarehouse', 30)

warehouse.addStock(wing)
/*
  Success add items to warehouse. Free space left: 15
*/
warehouse.addStock(scythe)
/*
  Success add items to warehouse. Free space left: 5
*/
warehouse.addStock(sandrock)
/*
  Cannot add more items to this warehouse. Free space left: 5
*/


console.log(warehouse)
/*
  Warehouse {
  name: 'bandaiWarehouse',
  maxCapacity: 30,
  items: 
   [ 
     WingZero { size: '145cm', version: 'high grade', price: 12000 },
     WingZero { size: '145cm', version: 'high grade', price: 12000 },
      ...,
     Deathscythe { size: '235cm', version: 'master grade', price: 16000 },
     Deathscythe { size: '235cm', version: 'master grade', price: 16000 } 
  ] } */
```