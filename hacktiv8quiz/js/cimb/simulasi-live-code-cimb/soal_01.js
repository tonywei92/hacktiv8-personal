

/*
============
Grocery Shop 
============

[INSTRUCTION]
Mari kita berbelanja!! 
Miku berbelanja di pasar untuk membeli kebutuhan Bulanan. 
Di pasar dijual beberapa jenis kebutuhan sebagai berikut : 
1. Beras, 1 liter seharga Rp. 10.000 
2. Ayam, 1 Potong seharga Rp. 8.000
3. Sayur, 1 ikat seharga Rp. 5000

Uang Miku terbatas, namun uang belanjaannya harus dapat membeli mulai dari barang termahal (beras) hingga termurah (sayur).
Jika uangnya masih cukup, maka Miku akan membeli barang tersebut lagi dari yang termahal hingga termurah lagi hingga uang Miku tidak lagi cukup untuk membeli.

tugas kalian adalah memunculkan detail transaksi yang dilakukan Miku dan memunculkan kembaliannya.
note: selalu lakukan pembelian dari barang termahal -> termurah

[EXAMPLE]
uang Miku Rp. 107.400 maka jumlah belanjaan Miku yang paling maksimal adalah:
"beras 5 liter, ayam 4 potong, sayur 5 ikat, kembalian Rp. 400"
kenapa? karena saat uang Miku tersisa: 15400, Miku hanya sanggup membeli beras dan sayur dengan kembalian Rp. 4400



Tulis Pseudocode di sini!

 */

function shop(money){
    var products = [
        ["beras", 10000],
        ["ayam", 8000],
        ["sayur", 5000]
    ]

    var termurah = products[0][1];
    var obj = {};
    for(var i = 0; i<products.length;i++){
        if(termurah > products[i][1]){
            termurah = products[i][1];
        }
        obj[products[i][0]] = 0;
    }

    while(money >= termurah){
        for(var i = 0; i< products.length;i++){
            if(money >= products[i][1]){
                obj[products[i][0]] += 1;
                money -= products[i][1];    
            }
        }
    }
    obj.moneyleft = money;
    return obj;
}

console.log(shop(107400))


 