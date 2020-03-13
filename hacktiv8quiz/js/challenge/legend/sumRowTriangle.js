/* 
    ================
    Row Sum Triangle
    ================
    [INSTRUCTION]
    diberikan sebuah segitiga yang berisi angka - angka ganjil 
    1 
    3 5 
    7 9 11
    13 15 17 19
    21 23 25 27 29
    31 33 35 37 39 41
    ...
    tugas kalian adalah dapat mengetahui jumlah angka per baris bila 
    baris nya disebutkan.
    [EXAMPLE]
    rowSumTriangle(4)
    dibaris 4 terdapat angka :
    13 + 15 + 17 + 19 = 64
    output: 64 
    rowSumTriangle(27)
    output : 19683
*/

function rowSumTriangle(row) {

    return row * row * row;
    var start = row * (row - 1) + 1;
    var result = 0;

    // First approach 
    // for (var i = 0; i < row; i++) {
    //     result += start;
    //     start+=2;
    // }

    // second approach
    if (row % 2 === 1) {
        index = Math.floor(row / 2);
        result = row * (start + (2 * index));
    }
    else {
        index = Math.floor(row / 2) - 1;
        result = row * (start + (2 * index)) + row;
    }
    return result;
}

console.log(rowSumTriangle(4)) // 64

console.log(rowSumTriangle(27)) // 19683