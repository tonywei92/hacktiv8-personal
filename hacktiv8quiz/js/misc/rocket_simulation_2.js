function nextTargetArea(code) {
    var libraries = {
        "TWO": 2,
        "THREE": 3,
        "FOUR": 4,
        "FIVE": 5,
        "SIX": 6,
        "SEVEN": 7,
        "EIGHT": 8
    };
    var count = 0;
    var blacklistedCharIndex = [];
    for (library in libraries) {
        var found = false;
        for (var i = 0; i < library.length; i++) {
            var charFound = 0;
            for (var j = 0; j < code.length; j++) {
                if (code[j] === library[j]) {
                    charFound++;
                    break;
                }
            }
        }
    }
    return "District " + count + " is the next target!";
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"
