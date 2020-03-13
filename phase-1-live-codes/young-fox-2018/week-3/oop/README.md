# TOYS STORY 4

Mengingat film ini akan tayang tahun depan, kamu sebagai pembuat mainan, ingin membuat Toy berdasarkan karakter di film itu.

Manfaatkan pengetahuan kamu tentang Inheritance, Aggregation, Composition dan Factory Method untuk memodelkan masalah ini.

### RELEASE 0
Adapun spesifikasi setiap Toy adalah sebagai berikut:

1. Buzz
  * name: 'Buzz'
  * price: '12000'
  * version: 'limited'

2. Woody
  * name: 'Woody'
  * price: '11000'
  * version: 'regular'

3. Jessie
  * name: 'Jessie'
  * price: '9000'
  * version: 'limited'

Buatlah class yang diperlukan dan tentukan juga keterkaitan antar class-nya !

### RELEASE 1
Buatlah class ToyFactory dan buatlah method produceToy yang menerima parameter nama toy yang ingin dibuat berserta jumlah yang ingin dibuat.

### RELEASE 2
Buatlah class WareHouse yang mempunyai sebuah nama, maksimal jumlah kapsistas penampungan dan list items yang ada di gudang tersebut.

Buatlah Method untuk menampung mainan tersebut, dengan syarat:
- jika jumlah mainan tersebut muat, maka keluarkan output **success save stocks in [name] warehouse**
- jika jumlah mainan melebihi kapasitas, maka keluarkan output **[name] warehouse is full**

``` javascript
let buzz = ToyFactory.produceRobot('buzz', 15);
let woody = ToyFactory.produceRobot('woody', 10);
let jessie = ToyFactory.produceRobot('jessie', 10);

console.log(buzz) // akan ada 15 buzz
/*
[ Buzz { name: 'buz', price: 12000, edition: 'limited' },
  Buzz { name: 'buz', price: 12000, edition: 'limited' },
  Buzz { name: 'buz', price: 12000, edition: 'limited' },
  ...]
*/

let warehouse = new WareHouse('toysstory', 30)

warehouse.addStock(buzz)
warehouse.addStock(woody)
warehouse.addStock(jessie)
/*
success save stocks in toysstory warehouse
success save stocks in toysstory warehouse
oysstory warehouse is full, free space: 5
*/

console.log(warehouse)
/*
WareHouse {
  name: 'toysstory',
  maxCapacity: 30,
  items:
   [ Buzz { name: 'Buzz', price: 12000, edition: 'limited' },
     Buzz { name: 'Buzz', price: 12000, edition: 'limited' },
     ...,
     Woody { name: 'Woody', price: 11000, edition: 'limited' },
     Woody { name: 'Woody', price: 11000, edition: 'limited' },
     ... ] }
*/
```