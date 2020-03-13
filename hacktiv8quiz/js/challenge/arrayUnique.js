function arrayUnique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j] === arr[i]) {
                found = true;
            }
        }
        if(!found){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(arrayUnique([10, 20, 10, 4, 5, 5, 6, 6])); // [ 10, 20, 4, 5, 6 ]
console.log(arrayUnique([7, 5, 3, 3, 2, 2, 2, 2, 1])); // [ 7, 5, 3, 2, 1 ]
console.log(arrayUnique([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // [ 10 ]
