function spiralNumber(param) {
    var result = [[]];
    var number = 1;
    var total = param * param;
    var spiral = 0;
    var round = 0;
    while(total > 0){
        var r = spiral === 0 ? spiral: spiral - round;
        var c = spiral === 0 ? spiral : spiral - round;
        var i;
        for (i = 0; i < param - spiral; i++) {
            if(typeof result[c] === "undefined"){
                result[c] = [];
            }
            result[c][r] = number;
            r++;
            number++;
            total--;
        }
        if(total === 0){
            break;
        }
        r--;
        c++;
        spiral++;
        for (i = 0; i < param - spiral; i++) {
            if(typeof result[c] === "undefined"){
                result[c] = [];
            }
            result[c][r]= number;
            c++;
            number++;
            total--;
        }
        
        r--;
        c--;
        for (i = 0; i < param - spiral; i++) {
            if(typeof  result[c] === "undefined"){
                result[c] = [];
            }
            result[c][r]= number;
            r--;
            number++;
            total--;
        }
        r++;
        c--;
        spiral++;
        for (i = 0; i < param -spiral; i++) {
            if(typeof result[c] === "undefined"){
                result[c] = [];
            }
            result[c][r]= number;
            c--;
            number++;
            total--;
        }
        // spiral--;
        // spiral++;
        round++;
    }
    return result;
}

console.table(spiralNumber(3))
/*
    [
        [1,2,3],
        [8,9,4]
        [7,6,5]
    ]
*/

console.table(spiralNumber(4))
/*
    [
        [1,2,3,4],
        [12,13,14,5],
        [11,16,15,6],
        [10,9,8,7]
    ]
*/

console.table(spiralNumber(5))
console.table(spiralNumber(6))