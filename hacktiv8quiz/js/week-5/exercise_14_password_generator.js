function changeVocals(str) {
    var charLibLower = "abcdefghijklmnopqrstuvwxyz";
    var charLibUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charLibLowerVocal = "aiueo";
    var charLibUpperVocal = "AIUEO";
    result = '';
    for (var i = 0; i < str.length; i++) {
        var found = false;
        for (var j = 0; j < charLibLower.length; j++) {
            for(var k = 0; k < charLibLowerVocal.length; k++){
                if(charLibLower[j] === charLibLowerVocal[k]){
                    if (str[i] === charLibLower[j]) {
                        result += charLibLower[j + 1];
                        found = true;
                    }
                    if (str[i] === charLibUpper[j]) {
                        result += charLibUpper[j + 1];
                        found = true;
                    }
                }
            }
        }
        if (!found) {
            result += str[i];
        }
    }
    return result;
}

function reverseWord(str) {
    var result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function setLowerUpperCase(str) {
    var result = '';
    var charLibLower = "abcdefghijklmnopqrstuvwxyz";
    var charLibUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < str.length; i++) {
        var found = false;
        for (var j = 0; j < charLibLower.length; j++) {
            if (str[i] === charLibLower[j]) {
                result += charLibUpper[j];
                found = true;
            }
            if (str[i] === charLibUpper[j]) {
                result += charLibLower[j];
                found = true;
            }
        }
        if (!found) {
            result += str[i];
        }
    }
    return result;
}

function removeSpaces(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if(str[i] !== " "){
            result+=str[i];
        }
    }
    return result;
}

function passwordGenerator(name) {
    if(name.length <5){
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    }
    var offsetted = changeVocals(name);
    var reversed = reverseWord(offsetted);
    var reversedCase = setLowerUpperCase(reversed);
    var removedSpace = removeSpaces(reversedCase)
    return removedSpace;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'