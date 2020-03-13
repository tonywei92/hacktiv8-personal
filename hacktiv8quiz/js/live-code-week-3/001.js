/*
=======================
FLASH SALE RUBAH ORANGE
=======================

Buatlah sebuah algoritma atau pseudocode untuk kasus berikut:

Toko 'RUBAH ORANGE' sedang mengadakan flash sale dengan ketentuan sebagai berikut:
- Jumlah item yang dibeli lebih dari 9 maka akan mendapatkan 5 item lagi
- Jumlah item yang dibeli lebih dari 7 maka akan mendapatkan 3 item lagi
- Jumlah item yang dibeli lebih dari 5 maka akan mendapatkan 1 item lagi
Tampilkan jumlah item yang didapatkan oleh pembeli.

NOTED:
Jika jumlah baju kurang dari 0 atau menerima input selain angka maka tampilkan 'Input Invalid'
*/

// write pseudocode/ algoritma here

function hitungBonus(itemTotal) {
    if (isNaN(itemTotal) || itemTotal <= 0) {
        return "Input invalid";
    }

    var bonus = 0;
    if (itemTotal > 9) {
        bonus = 5;
    }
    else if (itemTotal > 7) {
        bonus = 3;
    }
    else if (itemTotal > 5) {
        bonus = 1;
    }
    return "Anda membeli barang sejumlah " + itemTotal + "pcs dan mendapatkan bonus " + bonus + "pcs. Total jumlah barang anda adalah " + (itemTotal + bonus) + "pcs";
}

console.log(hitungBonus(9));