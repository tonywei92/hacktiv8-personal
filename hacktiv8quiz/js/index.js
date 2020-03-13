// for(var i = 97; i<=122;i++){
//     var tempArr = [];
//     for(var j = 0; j < arr.length; j++){
//         if(arr[j].charCodeAt(0) === i){
//             tempArr.push(arr[j]);
//         }
//     }
//     if(tempArr.length > 0) newArr.push(tempArr);
// }

var arr = ['cacing', 'ayam', "bekicot", 'kuda', 'anoa', 'kancil', 'unta', "bebek", 'cicak', "banteng"];
var newArr = []
var usedArray = [];
for (var i = 0; i < arr.length; i++) {
    tempArray = [];
    var found = false;
    for(var j = 0; j < newArr.length; j++){
        if(newArr[j][0][0] === arr[i][0]){
            found = true;
        }
    }

    if(!found){
        for(var j = 0; j < arr.length; j++){
            if(arr[j][0] === arr[i][0]){
                tempArray.push(arr[j]);
            }
        }
    }
    if(tempArray.length) newArr.push(tempArray)
}

console.log(newArr);