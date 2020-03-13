# Unique Sort Array ⏰ 15 minutes

## Summary

Melakukan sorting data pada kumpulan data dimana setiap datanya harus `unique`.

Tugas anda adalah membuat output data yang sudah tersorting dari yang terbesar menuju terkecil (descending). Sorting hanya dilakukan pada data yang berupa `Objek` dengan nama `key` `money`, selain itu data tidak boleh dimasukkan dalam sorting. Data yang tersorting harus berbentuk `unique` ( Tidak ada data yang sama ).

**Rules**

- **Tidak Boleh menggunakan fungsi `sort`**
- **Tidak boleh menggunakan data struktur `set`**

### Contoh (Test Case 1)

Terdapat sebuah kumpulan data sebagai berikut

### Contoh Input

```javascript
const data = [
  {
    money: 1000
  },
  {
    money: 500
  },
  {
    money: 10
  },
  '',
  {
    money: 10
  },
  null,
  undefined,
  {
    value: 30
  },
  {
    value: 10
  },
  Infinity,
  100
]
```

### Contoh Output

```javascript
console.log(uniqueSort(data)) // [10, 500, 1000]
```
