function grade(data){
    var result = [];
    var chars = {};

    for (var i = 0; i < data.length; i++) {
        chars[data[i][0]] = "";
    }

    for(char in chars){
        var obj = {
            name: "",
            count: 0,
            sum: 0,
            avg: 0
        };
        for(var i = 0; i < data.length; i++){
            if(char === data[i][0]){
                obj.name = char;
                obj.sum+= data[i][1];    
                obj.count++;
            }
        }
        obj.avg = obj.sum / obj.count;
        result.push(obj)
    }
    
    return result;
}


var heroes = [
    ["naruto",100],
    ["ichigo", 90],
    ["naruto", 80],
    ["goku", 85],
    ["ichigo", 80 ],
    ["naruto", 70]
]

console.table(grade(heroes));