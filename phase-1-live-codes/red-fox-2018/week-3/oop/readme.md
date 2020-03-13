# SISTEM PENYIMPANAN

- Sebuah gudang di gunakan untuk menyimpan produk-produk dari brand tertentu. buatlah class dan object javascript dengan ketentuan sebagai berikut.
- Sebuah gudang mempunyai sebuah nama, lokasi dan maksimal jumlah kapsistas penampungan.  sebuah gudang bisa menyimpan banyak produk.
- Sebuah produk mempunyai sebuah sku, nama dan kategori. produk adalah turunan sebuah Merk (brand).
- Sebuah brand memiliki sebuah nama dan list produk dari brand tersebut

### RELEASE 0
Buat class berdasarkan deskripsi di atas

### RELEASE 1
  - Buatlah fungsi menambah produk kedalam gudang, dengan ketentuan jika gudang masih menyimpan produk. proses penambahan produk ke gudang bisa dilakukan namun jika jumlah produk yang dimasukan melebihi sisa kapasitas gudang tampilkan pesan error. silahkan lihat driver code berikut:
```javascript
  let warehouse = new Warehouse('name, 'location', 1200) // 1200 adalah maksimal penyimpanan sebuah warehouse

  let brand   = new Brand('Samsung')

  // gunakan composition untuk menambahkan brand kedalam produk
  let samsungTelevision = new Product('Television') 
  let samsungSmartPhone = new Product('SmartPhone')
  let samsungAirConditioner = new Product('AirConditioner')

  warehouse.addProduct(productTelevision, 200) // 200 adalah jumlah produk yang disimpan kedalam warehouse
  // hasil dari fungsi di atas adalah :
  // "Berhasil menambahkan produk ke gudang, sisa kapasitas 1000"

  warehouse.addProduct(productTelevision, 1200)
  // hasil dari fungsi di atas adalah : 
  // "Gagal menambahkan produk ke gudang, jumlah stok overload"
```

### RELEASE 2
  - Tampilkan semua produk yang ada di gudang
   ```javascript
   warehouse.allProducts()
   // hasil dari fungsi di atas adalah:
   // [
   //  {name: SamsungTelevision, quantity: 200},
   //  {name: samsungSmartPhone, quantity: 800},
   //  {name: samsungAirConditioner, quantity: 150},
   // ]
   ```
  - Tampilkan produk berdasarkan jumlah quantity nya:
  ```javascript
  warehouse.findProductsByQuantity('minimum', 300) // cari produk yang jumlah quantity nya minimal lebih dari atau sama dengan 300
  warehouse.findProductsByQuantity('maximum', 300) // cari produk yang jumlah quantity nya maksimal lebih dari atau sama dengan 300
  ```

   - Tampilkan semua produk yang ada di sebuah product
  ```javascript
  brand.AllProducts()
   // hasil dari fungsi di atas adalah:
   // [SamsungTelevision, samsungSmartPhone, samsungAirConditioner]   
  ```