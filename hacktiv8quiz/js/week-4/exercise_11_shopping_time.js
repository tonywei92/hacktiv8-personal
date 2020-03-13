var products = [
    {
        name: "Sepatu brand Stacattu",
        price: 1500000
    },
    {
        name: "Baju brand Zoro",
        price: 500000
    },
    {
        name: "Baju brand H&N",
        price: 250000
    },
    {
        name: "Sweater brand Uniklooh",
        price: 175000
    },
    {
        name: "Casing Handphone",
        price: 50000
    },
    
];


function shoppingTime(memberId, money) {
    if (typeof memberId === "undefined" || memberId.length === 0) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }

    if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    }


    var result = {};
    result.memberId = memberId;
    result.money = money;
    result.listPurchased = [];
    var moneyLeft = money;
    for (var i = 0; i < products.length; i++) {
        if (products[i].price <= moneyLeft) {
            result.listPurchased.push(products[i].name);
            moneyLeft -= products[i].price;
        }
    }
    result.changeMoney = moneyLeft;
    return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja