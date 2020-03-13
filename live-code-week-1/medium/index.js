function generateDNA(num) {
  dnaConverge(num);
  dnaLine(num);
  dnaDiverge(num);
  dnaConverge(num);
  dnaLine(num);
  dnaDiverge(num);
 }

 function dnaLine(num) {
   let line = '';

   for(let i = 0; i < num; i++) {

     for(let j = 0; j < num-1; j++) {
       line += ' ';
      }

      line += '*';
      console.log(line);
      line = '';
   }
 }

 function dnaConverge(num) {
   let line = '';

   for(let i = 0; i < num-1; i++) {

     for(let j = 0; j < num*2; j++) {
       if(j == i) line += '*';
       else if(j == num*2-2-i) {
        line += '*';
        break;
       }
       else line += ' ';
     }

     console.log(line);
     line = '';
   }
 }

 function dnaDiverge(num) {
  let line = '';

  // for(let i = 0; i < num-1; i++) {
  //   for(let j = 0; j < num*2; j++) {
  //     if(j == num-i) 
  //   }
  // }
 }
 
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