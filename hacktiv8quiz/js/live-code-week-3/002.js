/*
=============
Number Ladder
=============

[INSTRUCTION]
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1

contoh 2 (height = 5):
54321
4321
321
21
1

contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.

Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
function generateNumbers(height){
    for (var i = height; i > 0; i--) {
        var collection = "";
        for (var j = i; j > 0; j--) {
            collection+=j;
        }
        console.log(collection);
    }
}

console.log(generateNumbers(3))
// 321
// 21
// 1

console.log(generateNumbers(8))
// 87654321
// 7654321
// 654321
// 54321
// 4321
// 321
// 21
// 1

console.log(generateNumbers(20))
// 2019181716151413121110987654321
// 19181716151413121110987654321
// 181716151413121110987654321
// 1716151413121110987654321
// 16151413121110987654321
// 151413121110987654321
// 1413121110987654321
// 13121110987654321
// 121110987654321
// 1110987654321
// 10987654321
// 987654321
// 87654321
// 7654321
// 654321
// 54321
// 4321
// 321
// 21
// 1