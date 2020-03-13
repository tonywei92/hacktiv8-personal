function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var newObj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        };
        let startIndex = 0;
        let finishIndex = 0;
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                startIndex = j;
            }
            if (arrPenumpang[i][2] === rute[j]) {
                finishIndex = j;
            }
        }
        newObj.bayar = Math.abs((finishIndex - startIndex) * 2000);

        result.push(newObj);
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'F', 'A']]));

console.log(naikAngkot([])); //[]