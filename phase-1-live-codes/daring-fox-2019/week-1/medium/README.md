# DNA Generator

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