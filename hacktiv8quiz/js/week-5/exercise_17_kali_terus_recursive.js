function kaliTerusRekursif(angka) {
    if(angka.toString().length === 1){
        return angka;
    }
    var result = 1;
    for (var i = 0; i < angka.toString().length; i++) {
        result *=angka.toString()[i];
    }
    return kaliTerusRekursif(result);

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6