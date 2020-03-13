function grade(data) {
    var result = [];
    var chars = {};

    for (var i = 0; i < data.length; i++) {
        var name = data[i][0];
        if (chars[name] === undefined) {
            chars[name] = {
                name: name,
                count: 0,
                sum: 0,
                avg: 0
            }
        }

        chars[name].count++;
        chars[name].sum += data[i][1];
        chars[name].avg = (chars[name].sum / chars[name].count).toFixed(2);
    }
    for (char in chars) {
        result.push(chars[char])
    }
    return result;
}


var heroes = [
    ["naruto", 100],
    ["ichigo", 90],
    ["naruto", 80],
    ["goku", 85],
    ["ichigo", 80],
    ["naruto", 70]
]

console.table(grade(heroes));