function hitungJumlahKata(kalimat) {
    var trimmedKalimat = kalimat.trim();
    var spaceCount = 0;
    for (var i = 0; i < trimmedKalimat.length; i++) {
        if(trimmedKalimat[i]===" "){
            spaceCount++;
        }
    }
    return spaceCount + 1;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5