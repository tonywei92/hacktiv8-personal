function targetTerdekat(arr) {
    var toRight = -1;
    var toLeft = -1;
    var oIndex = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "o") {
            oIndex = i;
        }
        if (oIndex >= 0) {
            if (arr[i] === "x") {
                toRight = i - oIndex;
                break;
            }
        }
    }
    if (oIndex >=0) {
        for (var i = oIndex; i > 0; i--) {
            if (arr[i] === "x") {
                toLeft = oIndex - i;
                break;
            }
        }
    }
    // console.log(toLeft, toRight)
    if(toLeft === -1 && toRight === -1){
        return 0;
    }
    
    else if(toLeft === -1){
        return toRight;
    }
    else if(toRight === -1){
        return toLeft;
    }
    else{
        if(toLeft<toRight){
            return toLeft;
        }
        else{
            return toRight;
        }
    }
    
    
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2