function penambahan(a, b) {
    if (a > b) {
        a = Math.round(a / 3);
        return a + b;
    }
    else {
        return a + b + 2;
    }
}

console.log(penambahan(10, 8));