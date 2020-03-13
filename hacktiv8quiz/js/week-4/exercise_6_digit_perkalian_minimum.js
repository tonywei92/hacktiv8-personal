function digitPerkalianMinimum(angka) {
    var perkalian = [];
    for (i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            perkalian.push("" + i + (angka / i));
        }
    }
    var shortestDigit = perkalian[0];

    for (var i = 0; i < perkalian.length / 2; i++) {

        if (shortestDigit > perkalian[i].length) {
            shortestDigit = perkalian[i].length;
        }
    }
    
    return shortestDigit;
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2