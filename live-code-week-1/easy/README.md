# Bubble Tea<img align="right" height="70" width="100" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">

> ⏰ Time limit: **25 min**

Ceritanya Bella mau beli bubble tea.

Ini adalah list bubble tea yang bisa dibeli beserta harganya:

```javascript
const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
```

Bella berniat membeli bubble tea yang ada di list
tadi secara berurutan, mulai dari Xing Fu Tang,
sampai ke Bubble Station Milk.
Uang jajan Bella terbatas, dan berkurang jika membeli
bubble tea, jadi mungkin tidak bisa membeli semuanya.

Ceritakanlah apa yang Bella lakukan dalam bentuk string
saat sedang berbelanja boba.

Jadi jika uang jajan Bella 100.000 rupiah, maka 
hasil output akan seperti ini:

```
Bella mulai jajan dengan uang jajan 100.000 rupiah.
Dengan uang 100.000, cukup untuk beli 'Xing Fu Tang',
setelah beli 'Xing Fu Tang' uangnya berkurang 38.000,
jadi uangnya sisa 62.000. 
Dengan uang 62.000, cukup untuk beli 'OneZo',
setelah beli 'OneZo' uangnya berkurang 53.500,
jadi uangnya sisa 8.500.
Dengan uang 8.500, tidak cukup untuk beli 'KOI The'.
Dengan uang 8.500, tidak cukup untuk beli 'Chatime'.
Dengan uang 8.500, tidak cukup untuk beli 'Kokumi'.
Dengan uang 8.500, tidak cukup untuk beli 'Bubble Station Milk'.
Bella pulang dengan sisa uang jajan 9.500.
=====
*/
```
