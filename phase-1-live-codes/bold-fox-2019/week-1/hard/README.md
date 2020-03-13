# SHOW ME THE DIRECTION

Buatlah sebuah function dengan nama generateArrow yang menerima parameter `size`.

Function ini akan mengenerate sebuah panah kiri sesuai dengan size yang diinput.
Size adalah panjang dari kepala panah dan juga badannya.
Untuk lebar dari badan panah, jika size adalah ganjil maka lebarnya sama dengan size, sedangkan jika size adalah genap maka lebarnya adalah size - 1

## RULES
  - Kamu boleh membuat function lain yang dapat membantu kamu menyelesaikan masalah
  - Kamu bebas menggunakan built in function apa saja untuk menyelesaikan masalah ini

## RELEASE 0
Buatlah sebuah validasi bahwa panah tidak bisa dibuat dengan size kurang dari 3

## RELEASE 1
Buatlah segitiga yang sebelah kiri (kepala dari panah)

## RELEASE 2
Lengkapi panah dengan badannya.

## RELEASE 3 (BONUS)
Buatlah agar function dapat menerima parameter kedua `direction` (up, down, left, right) sehingga panah yang dibentuk dapat mengarah ke atas, bawah, kiri, atau kanan




```javascript

console.log(generateArrow(2))
// minimum size adalah 3


console.log(generateArrow(3))
/* 

    *
  * * * * *
*         *
  * * * * *
    *

*/

console.log(generateArrow(4))
/* 

      *
    * *
  *   * * * * *
*             *
  *   * * * * *
    * *
      *

*/

console.log(generateArrow(5))
/* 

        *
      * *
    *   * * * * * *
  *               *
*                 *
  *               *
    *   * * * * * *
      * *
        *

*/

console.log(generateArrow(6))
/* 

          *
        * *
      *   *
    *     * * * * * * *
  *                   *
*                     *
  *                   *
    *     * * * * * * *
      *   *
        * *
          *

*/

console.log(generateArrow(7))

/* 

            *
          * *
        *   *
      *     * * * * * * * *
    *                     *
  *                       *
*                         *
  *                       *
    *                     *
      *     * * * * * * * *
        *   *
          * *
            *

*/


console.log(generateArrow(5, 'up'))

/* 

        *
      *   *
    *       *
  *           *
* * *       * * *
    *       *
    *       *
    *       *
    *       *
    * * * * *
    
*/

console.log(generateArrow(5, 'right'))

/* 

          *
          * *
* * * * * *   *
*               *
*                 *
*               *
* * * * * *   *
          * *
          *

*/

console.log(generateArrow(5, 'left'))

/* 

        *
      * *
    *   * * * * * *
  *               *
*                 *
  *               *
    *   * * * * * *
      * *
        *

*/

console.log(generateArrow(5, 'down'))

/* 

    * * * * *
    *       *
    *       *
    *       *
    *       *
* * *       * * *
  *           *
    *       *
      *   *
        *

*/

```