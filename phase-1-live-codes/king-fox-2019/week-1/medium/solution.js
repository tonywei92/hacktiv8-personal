function generateY1(num) {
  for(let i = 0; i < num; i++) {
    let string = ''
    for(let j = 0; j < (num * 2) - 1; j++) {
      if(i === j || j === ((num * 2) - 2) - i) {
        string += '*'
      } else {
        string += ' '
      }
    }
    console.log(string)
  }
}

function generateI(num) {
  // I
  for(let i = 0; i < num - 2; i++) {
    let string = ''
    for(let j = 0; j < (num * 2 - 1); j++) {
      if(j === Math.floor((num * 2 - 1)/2)) {
        string += '*'
      } else {
        string += ' '
      }
    }
    console.log(string)
  }
}

function generateY2(num) {
  // Y
  for(let i = 0; i < num; i++) {
    let string = ''
    for(let j = 0; j < (num * 2) - 1; j++) {
      if(i === ((num - 1) - j) || (i + (num - 1)) === j) {
        string += '*'
      } else {
        string += ' '
      }
    }
    console.log(string)
  }
}

function generateDNA(num) {
  for(let i = 0; i < 2; i++) {
    generateY1(num)
    generateI(num)
    generateY2(num)
  }
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