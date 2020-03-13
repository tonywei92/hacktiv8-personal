function angkaPalindrome(num) {
    var palindromeFound = false;
    var palindrome;
    while (!palindromeFound) {
        num++;
        var numStr = String(num);
        var isPalindrome = true;

        for (i = 0; i < numStr.length; i++) {
            if (numStr[i] !== numStr[numStr.length - i - 1]) {
                isPalindrome = false;
            }
        }

        if (isPalindrome) {
            palindrome = num;
            palindromeFound = true;
        }
    }
    return palindrome;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001