function attack(damage) {
    return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    var total = numberOfAttacks * damagePerAttack;
    for (var i = 0; i < numberOfAttacks; i++) {
        total = attack(total);
    }
    return total;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90