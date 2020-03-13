# Medan Magnet #
###### estimasi waktu: 30 Menit


Pada sebuah lemari es terpasang beberapa hiasan magnet yang terpasang dengan kuat sehingga masing masing magnet tidak akan dapat saling menarik.
Buatlah fungsi yang menggambarkan besi tersebut tertarik ke hiasan magnet tertentu. Fungsi tersebut menerima string dengan symbol sebagai berikut
- `m`: hiasan magnet dengan daya tari 3cm
- `i`: besi yang dapat di tarik magnet
- `-`: jarak kosong sejauh 1cm

### Rules
- Setiap magnet memiliki medan magnet sejauh 3 cm. Apabila `iron` berada diantara kedua magnet maka `iron` akan tertarik kearah magnet yang memiliki jarak antara `iron` dan `magnet` yang terkecil atau memiliki jarak terdekat antara `iron` dan `magnet`.
- jika besi tersebut berada di tepat di tengah antara 2 magnet atau di luar jangkauan magnet maka posisi tidak berubah

### Example
```javascript
  console.log(drawMagnetic('m--i-m-i--m--i--m--'))
  // m---imi---m--i--m--
```
