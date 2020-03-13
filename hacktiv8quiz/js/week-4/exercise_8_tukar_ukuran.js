function tukarBesarKecil(kalimat) {
    var result = "";
    var charLibLowerCase = "abcdefghijklmnopqrstuvwxyz";
    var charLibUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < kalimat.length; i++) {
        var inLib = false;
        for (var j = 0; j < charLibLowerCase.length; j++) {
            if (charLibLowerCase[j] === kalimat[i]) {
                result += charLibUpperCase[j];
                inLib = true;
                break;
            }
            if (charLibUpperCase[j] === kalimat[i]) {
                result += charLibLowerCase[j];
                inLib = true;
                break;
            }
        }
        if(!inLib){
            result+=kalimat[i];
        }
    }
    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"