function meleeRangedGrouping(str) {
    if(str.length === 0) return [];
    var strArr = String(str).split(',');
    var result = [[],[]];
    for (var i = 0; i < strArr.length; i++) {
        var hero = String(strArr[i]).split('-');
        if(hero[1] === "Ranged"){
            result[0].push(hero[0]);
        }
        else{
            result[1].push(hero[0]);
        }
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []