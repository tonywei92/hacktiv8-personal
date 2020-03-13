function groupAnimals(animals) {
    // animals.sort();
    // animals = [ 'anoa', 'ayam', 'cacing', 'kancil', 'kuda' ]
    var result = [];

    for (var i = 0; i < animals.length; i++) { // i =0, 1, 2, 3, 4
        var found = false; // false, true, false, false, false
        for (var j = 0; j < result.length; j++) { // j =0, 1, 0, 1, 2
            if (result[j][0][0] === animals[i][0]) {
                found = true;
                result[j].push(animals[i]);
            }
        }
        if (found === false) {
            result.push([animals[i]]);
        }
    }

    result.sort();
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
