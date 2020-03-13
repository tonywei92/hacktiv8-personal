# TOKO PALUGADA

Didalam database Toko Palugada terdapat 3 table yaitu Products, Invoices, invoiceItems, hubungan antar table Products dan Invoices adalah many to many, dan table invoiceItems sebagai table conjuntion

didalam database.db terdapat data contoh yang sudah di input.

## Release 0
buatlah query untuk menampilkan jumlah data dari setiap paymentMethod yang ada dan urutkan dari jumlah yang terbanyak.

```javascript
[
  {
    paymentMethod: 'voucher',
    total: 3
  },
  {
    paymentMethod: 'cash',
    total: 2
  },
  {
    paymentMethod: 'credit',
    total: 2
  }
]
```

## Release 1
buatlah query untuk menampilkan 5 barang yang terjual dengan quantity terbanyak dan diurutkan dari yang terbanyak.

```javascript
[ {
    productName: 'Garpu Kayu',
    price: 28000,
    TotalQuantity: 20
  },
  { productName: 'Roti Kurang Kenyang',
    price: 13000,
    TotalQuantity: 16
  },
  {
    productName: 'Baju Anti Badai',
    price: 15000,
    TotalQuantity: 15
  },
  {
    productName: 'Indomie Kukus',
    price: 10000,
    TotalQuantity: 13
  },
  {
    productName: 'Deodorant',
    price: 27500,
    TotalQuantity: 12
  } ]
```

## Release 2
buatlah query untuk menampilkan product apa saja yang dibeli oleh invCode 'INV2018-03-011'
```javascript
[ { quantity: 5,
    productName: 'Roti Kurang Kenyang',
    category: 'food',
    price: 13000,
    invCode: 'INV2018-03-011',
    date: '2018-03-19',
    paymentMethod: 'cash' },
  { quantity: 7,
    productName: 'Garpu Kayu',
    category: 'kitchen tool',
    price: 28000,
    invCode: 'INV2018-03-011',
    date: '2018-03-19',
    paymentMethod: 'cash' },
  { quantity: 4,
    productName: 'Baju Anti Badai',
    category: 'outfit',
    price: 15000,
    invCode: 'INV2018-03-011',
    date: '2018-03-19',
    paymentMethod: 'cash' },
  { quantity: 2,
    productName: 'Indomie Kukus',
    category: 'food',
    price: 10000,
    invCode: 'INV2018-03-011',
    date: '2018-03-19',
    paymentMethod: 'cash' } ]
```

### yang dinilai hanya query nya saja
