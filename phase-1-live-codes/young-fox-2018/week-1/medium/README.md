# Helix Generator

Buatlah sebuah function bernama generateHelix.

Function generateHelix adalah sebuah function yang menerima sebuah parameter berupa number dengan asumsi nilai parameternya lebih dari 2.

Function akan menghasilkan sebuah pola yang tipe data-nya string, dan memiliki element di dalamnya berupa simbol 'o' yang akan berbentuk seperti DNA dengan jumlah yang sesuai dengan input.

```javascript
generateHelix(2) // input minimum 3

generateHelix(3)
/*
o   o
 o o
  o
 o o
o   o
o   o
 o o
  o
 o o
o   o
o   o
 o o
  o
 o o
o   o
*/

generateHelix(4)
/*
o     o
 o   o
  o o
   o
  o o
 o   o
o     o
o     o
 o   o
  o o
   o
  o o
 o   o
o     o
o     o
 o   o
  o o
   o
  o o
 o   o
o     o
o     o
 o   o
  o o
   o
  o o
 o   o
o     o
*/
```