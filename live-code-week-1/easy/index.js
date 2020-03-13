function beliBoba(uangJajan) {
    const listBoba = [
        ['Xing Fu Tang', 38000],
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]

    let marker = 0;
    let bought = [];
    // let lowest = getLowestPrice(listBoba);

    console.log(`Bella mulai jajan dengan uang jajan ${convertToMoney(uangJajan)} rupiah.`);

    for(let i in listBoba) {
        if(listBoba[i][1] <= uangJajan) {
            tellStory(true, listBoba[i][0], listBoba[i][1], uangJajan);
            uangJajan -= listBoba[i][1];
        } // enough
        else tellStory(false, listBoba[i][0], listBoba[i][1], uangJajan);
    }

    console.log(`Bella pulang dengan sisa uang jajan ${convertToMoney(uangJajan)}.`);
    console.log('=====')
}

function getLowestPrice(bobas) {
    let lowest = 1000000;
    for(let i in bobas) {
        if(bobas[i][1] < lowest) lowest = bobas[i][1];
    }

    return lowest;
}

function convertToMoney(num) {
    let strNum = num.toString();
    if(strNum.length == 6) {
        let left = strNum.slice(0, 3);
        let right = strNum.slice(3, 6);
        return left + "." + right;
    }
    else if(strNum.length == 5) {
        let left = strNum.slice(0, 2);
        let right = strNum.slice(2, 5);
        return left + "." + right;
    }
    else if(strNum.length == 4) {
        let left = strNum.slice(0, 1);
        let right = strNum.slice(1, 4);
        return left + "." + right;
    }
    
    else return num;
}

function tellStory(enough, name, price, money) {
    if(enough) {
        console.log(`Dengan uang ${convertToMoney(money)}, cukup untuk beli '${name},'`);
        console.log(`setelah beli '${name}' uangnya berkurang ${convertToMoney(price)},`);
        console.log(`jadi uangnya sisa ${convertToMoney(money-price)}.`);
    }
    else {
        console.log(`Dengan uang ${money}, tidak cukup untuk beli '${name}'.`);
    }
}

beliBoba(150000)
// Bella mulai jajan dengan uang jajan 150.000 rupiah.
// Dengan uang 150.000, cukup untuk beli 'Xing Fu Tang',
// setelah beli 'Xing Fu Tang' uangnya berkurang 38.000,
// jadi uangnya sisa 112.000.
// Dengan uang 112.000, cukup untuk beli 'OneZo',
// setelah beli 'OneZo' uangnya berkurang 53.500,
// jadi uangnya sisa 58.500.
// Dengan uang 58.500, cukup untuk beli 'KOI The',
// setelah beli 'KOI The' uangnya berkurang 36.000,
// jadi uangnya sisa 22.500.
// Dengan uang 22.500, tidak cukup untuk beli 'Chatime'.
// Dengan uang 22.500, tidak cukup untuk beli 'Kokumi'.
// Dengan uang 22.500, cukup untuk beli 'Bubble Station Milk',
// setelah beli 'Bubble Station Milk' uangnya berkurang 13.000,
// jadi uangnya sisa 9.500.
// Bella pulang dengan sisa uang jajan 9.500.
// =====

beliBoba(15000)
// Bella mulai jajan dengan uang jajan 15.000 rupiah.
// Dengan uang 15.000, tidak cukup untuk beli 'Xing Fu Tang'.
// Dengan uang 15.000, tidak cukup untuk beli 'OneZo'.
// Dengan uang 15.000, tidak cukup untuk beli 'KOI The'.
// Dengan uang 15.000, tidak cukup untuk beli 'Chatime'.
// Dengan uang 15.000, tidak cukup untuk beli 'Kokumi'.
// Dengan uang 15.000, cukup untuk beli 'Bubble Station Milk',
// setelah beli 'Bubble Station Milk' uangnya berkurang 13.000,
// jadi uangnya sisa 2.000.
// Bella pulang dengan sisa uang jajan 2.000.
// =====