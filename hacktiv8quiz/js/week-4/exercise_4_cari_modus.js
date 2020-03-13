function cariModus(arr) {
    var numMapping = [];
    var modus = -1;

    for (var i = 0; i < arr.length; i++) {
        var found = false;
        var newArr = [];
        for (var j = 0; j < numMapping.length; j++) {
            if (numMapping[j][0] === arr[i]) {
                found = true;
                numMapping[j].push(arr[i]);
                break;
            }
        }

        if (!found) {
            newArr.push(arr[i]);
            numMapping.push(newArr);
        }
    }
    
    for (var i = 1; i < numMapping.length; i++) {
       // console.log(numMapping[i - 1].length > numMapping[i].length);
       if(numMapping[i].length > 1){
        if(numMapping[i - 1].length < numMapping[i].length){
            modus = numMapping[i][0];
        }
        else if (numMapping[i - 1].length > numMapping[i].length) {
            modus = numMapping[i - 1 ][0];
        }
        else{
            modus = numMapping[i - 1 ][0];
        }
       }
        
    }
    return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // 