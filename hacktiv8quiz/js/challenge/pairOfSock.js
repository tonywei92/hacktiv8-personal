var input = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockPair(arr) {
    var groups = [];
    for (var i = 0; i < arr.length; i++) {
        var isExist = false;
        for(var j = 0; j< groups.length; j++){
            if(groups[j][0] === arr[i]){
                isExist = true;
                groups[j].push(arr[i]);
            }
        }
        if (!isExist) groups.push([arr[i]]);
    }

    var pairs = 0;
    for(var i = 0; i< groups.length;i++){
        pairs += (groups[i].length - (groups[i].length % 2))  / 2
    }

    return pairs;

    // var sorted = arr.sort();
    // var current = 0;
    // var total = 0;
    // var result = 0;
    // for(var i = 0; i < arr.length; i++){
    //     if(sorted[i] !== current){
    //         if(total > 0){
    //             result+=Math.floor(total/2);
    //         }
    //         current = sorted[i];
    //         total = 1;
    //     }
    //     else{
    //         total++;
    //     }
    // }
    // return result;
}

console.log(sockPair(input));
