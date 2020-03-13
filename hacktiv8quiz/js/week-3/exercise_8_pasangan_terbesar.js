function pasanganTerbesar(num) {
    var numStr = String(num);
    var largestNumIndex;
    var largestNum = 0;
    for(var i = 0; i < numStr.length; i++){
        if(largestNum < Number(numStr[i])){
            largestNum = numStr[i];
            largestNumIndex = i;
        }
    }
    return numStr[largestNumIndex] + numStr[largestNumIndex+1];
}


console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99