function palindrome(kata) {
    var isPalindrome = true
    for(i=0; i<kata.length/2;i++){
        if(kata[i] !== kata[kata.length - 1 -i] ){
            isPalindrome = false
        }
    }
    return isPalindrome;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false