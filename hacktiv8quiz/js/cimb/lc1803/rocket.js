
/*
===============
Boot Pair Count
===============

[INSTRUCTION]
Jack sedang merapikan gudang di toko Boot-nya, dia memiliki banyak tumpukan
boot-boot yang warnanya harus dipasangkan agar dapat dijual. Bila input yang
berisi huruf-huruf masing-masing mewakili suatu warna, tentukanlah ada berapa
banyak pasang boot yang siap dijual oleh Jack!

[EXAMPLE]
Bila input adalah ABAACBBA maka:
hasilnya adalah 3, karena ada dua pasang A dan satu pasang B.

- Bila tidak ada pasangan sama sekali, maka hasilnya adalah:
"Tidak ada pasangan sepatu boot ditemukan"
- Bila tidak ada boot sama sekali, maka hasilnya adalah:
"Tidak ada sepatu boot mohon cek kembali input anda"
*/
function bootPairCount(bootStr) {
    if (bootStr === undefined) {
        return "Tidak ada sepatu boot mohon cek kembali input anda";
    }
    var result = [];
    for (var i = 0; i < bootStr.length; i++) {
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j][0] === bootStr[i]) {
                found = true;
                result[j].push(bootStr[i]);
            }
        }
        if (found === false) {
            result.push([bootStr[i]]);
        }
    }
    var pasangan = 0;
    for (var i = 0; i < result.length; i++) {
        pasangan += Math.floor(result[i].length / 2);
    }
    if (pasangan === 0) {
        return "Tidak ada pasangan sepatu boot ditemukan";
    }
    else {
        return pasangan;
    }

}

//TEST CASES
console.log(bootPairCount("ABBAACDAB")); // 3
console.log(bootPairCount("ABBCCDAD")); // 4
console.log(bootPairCount("ABCDE")); // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount()); // Tidak ada sepatu boot mohon cek kembali input anda