function countDistance(arr, money) {
    const mergedArr = [];
    let o1 = -1;
    let o2 = -1;
    let sufficient = 0;
    arr.forEach(el => mergedArr.push(...el));
    for (let i = 0; i < mergedArr.length; i++) {
        if (mergedArr[i] === "o") {
            if (o1 < 0) {
                o1 = i;
            } else if (o2 < 0) {
                o2 = i;
            }
        }
    }

    for (let i = o1; i < o2; i++) {
        if (money <= 0) {
            sufficient++;
        }
        if (mergedArr[i] === 'x') {
            money -= 10000;
        }
    }

    if (sufficient > 0) {
        return `Uang anda habis, jarak tersisa sampai tujuan adalah ${sufficient * 10} km`
    }
    else {
        return `Sisa uang : ${money}, jarak tempuh: ${(o2 - o1) * 10} km`;
    }

}
console.log(
    countDistance(
        [["", "o", "", "", "o"], ["", "", "", "", ""], ["", "", "", "", ""]],
        40000
    )
);
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */
console.log(
    countDistance(
        [
            ["", "", "o", "", ""],
            ["", "x", ""],
            ["", "", "", "", "", "x"],
            ["", "o", "", ""]
        ],
        50000
    )
);
// // output:
// /* Sisa uang : 30000, jarak tempuh: 120 km */
console.log(
    countDistance(
        [
            ["", "", "", "", ""],
            ["o", "x", "x", "x", ""],
            ["", "", "", "x", "", "x"],
            ["", "o", "", ""]
        ],
        40000
    )
);
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/
console.log(
    countDistance(
        [
            ["", "o", "x", "x", "x", "x"],
            ["o", "", "", "", ""],
            ["", "", "", "", ""]
        ],
        30000
    )
);
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/
