# DNA Generator<img align="right" height="70" width="100" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">

> ⏰ Time limit: **45 min**

Function generateDNA adalah sebuah function yang menerima sebuah parameter berupa number dengan asumsi nilai parameternya lebih dari 1. Jika parameter yang diinput lebih kecil dari 2, maka function akan memberikan info berupa `number must greater than 1`

Parameter yang diinput merupakan ukuran dalam membuat DNA tersebut dan DNA akan terbentuk dari simbol ``'*'``.

```javascrtipt
generateDNA(3)
/*

*   *
 * * 
  *  
  *  
  *  
 * * 
*   *
*   *
 * * 
  *  
  *  
  *  
 * * 
*   *

*/

generateDNA(5)
/*

*       *
 *     * 
  *   *  
   * *   
    *    
    *    
    *    
    *    
    *    
   * *   
  *   *  
 *     * 
*       *
*       *
 *     * 
  *   *  
   * *   
    *    
    *    
    *    
    *    
    *    
   * *   
  *   *  
 *     * 
*       *
 
*/