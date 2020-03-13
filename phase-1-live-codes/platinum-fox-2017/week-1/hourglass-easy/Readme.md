# Hourglass Generator

Buatlah sebuah function bernama generateHourglass dan printHourglass. 

Function generateHourglass adalah sebuah function yang menerima sebuah parameter berupa number dengan asumsi nilai parameternya lebih dari 0. Function akan mereturn sebuah nilai yang tipe data-nya array of string, dan memiliki element di dalamnya berupa simbol ``'#'``.

Function printHourglass adalah sebuah function yang menerima satu parameter berupa nested array yang berisi simbol ``'#'``, dan akan me-return semua simbol pagar dari nested array tadi ke dalam bentuk jam pasir / hourglass.

Gunakan driver code di bawah ini :

```javascript
let hrglass = generateHourglass(...);
console.log(typeof hrglass);
console.log(printHourglass(hrglass));
```

Lihat CONTOH di bawah ini :

```javascript
let hrglass1 = generateHourglass(1);
console.log(hrglass1);
/*
[ 'x' ]
*/
console.log(typeof hrglass1); // object
console.log(printHourglass(hrglass1));
/*
#
*/

console.log('===============================');
let hrglass2 = generateHourglass(2);
console.log(hrglass2);
/*
[ 'xxx', ' x ', 'xxx' ]
*/
console.log(typeof hrglass2);  // object
console.log(printHourglass(hrglass2));
/*
###
 #
###
*/

console.log('===============================');
let hrglass3 = generateHourglass(3);
console.log(hrglass3);
/*
[ 'xxxxx', ' xxx ', '  x  ', ' xxx ', 'xxxxx' ]
*/
console.log(typeof hrglass3); // object
console.log(printHourglass(hrglass3));
/*
#####
 ###
  #
 ###
#####
*/

console.log('===============================');
let hrglass4 = generateHourglass(4);
console.log(hrglass4);
/*
[ 'xxxxxxx',
  ' xxxxx ',
  '  xxx  ',
  '   x   ',
  '  xxx  ',
  ' xxxxx ',
  'xxxxxxx' ]
*/
console.log(typeof hrglass4); // object
console.log(printHourglass(hrglass4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/

console.log('===============================');
let hrglass5 = generateHourglass(5);
console.log(hrglass5);
/*
[ 'xxxxxxxxx',
  ' xxxxxxx ',
  '  xxxxx  ',
  '   xxx   ',
  '    x    ',
  '   xxx   ',
  '  xxxxx  ',
  ' xxxxxxx ',
  'xxxxxxxxx' ]
*/
console.log(typeof hrglass5);  // object
console.log(printHourglass(hrglass5));
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/
```