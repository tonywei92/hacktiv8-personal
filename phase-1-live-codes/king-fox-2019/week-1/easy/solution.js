/*
Bubble Tea

Ceritanya Bella mau beli bubble tea.

Ini adalah list bubble tea yang bisa dibeli beserta harganya:

const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]

Bella berniat membeli bubble tea yang ada di list
tadi secara berurutan, mulai dari Xing Fu Tang,
sampai ke Bubble Station Milk.
Uang jajan Bella terbatas, dan berkurang jika membeli
bubble tea, jadi mungkin tidak bisa membeli semuanya.

Ceritakanlah apa yang Bella lakukan dalam bentuk string
saat sedang berbelanja boba.

Jadi jika uang jajan Bella 100.000 rupiah, maka 
hasil output akan seperti ini:

Bella mulai jajan dengan uang jajan 100.000 rupiah.
Dengan uang 100.000, cukup untuk beli 'Xing Fu Tang',
setelah beli 'Xing Fu Tang' uangnya berkurang 38.000,
jadi uangnya sisa 62.000. 
Dengan uang 62.000, cukup untuk beli 'OneZo',
setelah beli 'OneZo' uangnya berkurang 53.500,
jadi uangnya sisa 8.500.
Dengan uang 8.500, tidak cukup untuk beli 'KOI The'.
Dengan uang 8.500, tidak cukup untuk beli 'Chatime'.
Dengan uang 8.500, tidak cukup untuk beli 'Kokumi'.
Dengan uang 8.500, tidak cukup untuk beli 'Bubble Station Milk'.
Bella pulang dengan sisa uang jajan 9.500.
=====
*/

function beliBoba(uangJajan){
    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]

    if (!uangJajan || uangJajan < 0){
        return 'Uang jajan tidak ada.'
    }

    let cerita = `Bella mulai jajan dengan uang jajan ${convertUang(uangJajan)} rupiah.\n`
    for (let i = 0; i < listBoba.length; i++){
        cerita += `Dengan uang ${convertUang(uangJajan)}, `
        if (uangJajan > listBoba[i][1]){
            uangJajan -= listBoba[i][1]

            cerita += `cukup untuk beli '${listBoba[i][0]}',\n`
            cerita += `setelah beli '${listBoba[i][0]}' uangnya berkurang ${convertUang(listBoba[i][1])},\n`
            cerita += `jadi uangnya sisa ${convertUang(uangJajan)}.\n`
        } else {
            cerita += `tidak cukup untuk beli '${listBoba[i][0]}'.\n`
        }
    }
    cerita += `Bella pulang dengan sisa uang jajan ${convertUang(uangJajan)}.`
    cerita += `\n=====`
    console.log(cerita)
    return cerita
}

function convertNumToStr(num){
    if (num < 0) return '?'
    if (num < 10) return '00'+num
    if (num < 100) return '0'+num
    if (num < 1000) return ''+num
    if (!num) return '0'
    
    return convertNumToStr(Math.floor(num / 1000)) + '.' + convertNumToStr(num % 1000)
}

function removeZeros(str){
    while (str[0]==='0'){
        str = str.slice(1)
    }
    return str
}

function convertUang(num){
    return removeZeros(convertNumToStr(num))
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