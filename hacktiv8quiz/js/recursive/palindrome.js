function isPalindrome(word) {
    var start = 1;
    var end = word.length - 1;

    if (word[0] !== word[end]) {
        return false;
    }

    if (word.length === 2) {
        return word[0] === word[end];
    }
    
    if (word.length < 2) {
        return true;
    }

    return isPalindrome(word.slice(start, end));
}

console.log(isPalindrome("ahxggxha"));