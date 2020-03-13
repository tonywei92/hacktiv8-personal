function checkAB(str) {
    var isAB = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            if (str[i + 4] === "b") {
                isAB = true;
                break;
            }
        }
        if(str[i] === "b"){
            if (str[i + 4] === "a") {
                isAB = true;
                break;
            }
        }
    }
    return isAB;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false