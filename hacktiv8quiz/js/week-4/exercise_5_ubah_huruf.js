function ubahHuruf(kata) {
    var result = "";
    var charlib = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < charlib.length; j++) {
            if (kata[i] === charlib[j]) {
                result+=charlib[j + 1];
            }
        }
    }
    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu