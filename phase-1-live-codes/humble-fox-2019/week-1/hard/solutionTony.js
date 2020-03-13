function pirateFindTreasure(str) {
    let count = 0;
    const treasures = [];
    let harbour = [];
    let pirate = [];
    let distance = 0;
    for (let i = 0; i < str.length; i += 4) {
        for (let j = 0; j < 4; j++) {
            if (str[i + j] === 'T') {
                treasures.push([count, j]);
            }
            if (str[i + j] === 'P') {
                pirate = [count, j]
            }
            if (str[i + j] === 'H') {
                harbour = [count, j];
            }
        }
        count++;
    }
    clearScreen();
    while (treasures.length > 0) {
        printMap({ pirate, harbour, treasures });
        sleep(1000);
        clearScreen();
        const info = findNearestTreasure(pirate, treasures);
        pirate = treasures[info.pos];
        treasures.splice(info.pos, 1);
        distance += info.distance;
    }
    printMap({ pirate, harbour, treasures })
    sleep(1000);
    clearScreen();
    distance += calculatePirateToHarbour(pirate, harbour);
    pirate = harbour;
    printMap({ pirate, harbour, treasures })
    console.log(`langkah yang ditempuh untuk mengambil semua harta karun dan kembali ke pelabuhan adalah ${distance} langkah`)
}

function printMap(info) {
    let map = [];
    for (let i = 0; i < 4; i++) {
        map.push([]);
        for (let j = 0; j < 4; j++) {
            map[i].push('O');
        }
    }
    const { pirate, harbour, treasures } = info;
    for (let i = 0; i < treasures.length; i++) {
        map[treasures[i][0]][treasures[i][1]] = 'T'
    }
    map[harbour[0]][harbour[1]] = 'H';
    map[pirate[0]][pirate[1]] = 'P';
    console.log(map)
}

function findNearestTreasure(pirate, treasures) {
    let distance = Infinity;
    let pos = -1;
    for (let i = 0; i < treasures.length; i++) {
        let distance1 = Math.abs(pirate[0] - treasures[i][0]) + Math.abs(pirate[1] - treasures[i][1]);
        if (distance1 < distance) {
            distance = distance1
            pos = i;
        }
    }
    return {
        pos,
        distance
    };
}

function calculatePirateToHarbour(pirate, harbour) {
    let distance = Math.abs(pirate[0] - harbour[0]) + Math.abs(pirate[1] - harbour[1]);
    return distance
}



function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function clearScreen() {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
}

console.log(pirateFindTreasure("OOOOOOTTOPHOOTOO")) // 7 kotak
console.log(pirateFindTreasure("TOOOOPOHOTOTOTOO")) // 14 kotak
