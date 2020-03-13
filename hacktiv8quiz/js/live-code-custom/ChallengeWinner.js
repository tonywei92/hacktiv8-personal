/*
=================
Challenge Winner
=================

[INSTRUCTION]
Ada dua player yang sedang lomba mengerjakan soal-soal, dengan ketentuan
player yang memiliki poin yang tertinggi adalah pemenangnya. Input berupa dua
array, masing-masing mewakili nilai player, bila salah satu player memiliki
nilai yang lebih tinggi maka ia mendapatkan poin, poin yang didapatkan
ditentukan oleh urutan array (index ke 0 adalah urutan ke-1), bila genap maka
mendapatkan 2 poin, bila ganjil mendapatkan 1 poin, dan bila seri masing-masing
player mendapatkan 1 poin.

[EXAMPLE]
Bila input array adalah [1, 2, 0] dan [9, 2, 1], maka:
~ di soal pertama, player 1 kalah tetap 0 poin dan player 2 menang menjadi 1 point
~ di soal kedua, player 1 dan player 2 seri, keduanya menjadi 1 dan 2 point
~ di soal ketiga, player 1 kalah tetap 1 poin dan player 2 menang menjadi 3 poin

maka hasilnya adalah:
"Player 1 mendapatkan nilai 1 poin dan player 2 mendapatkan nilai 3 poin,
pemenangnya adalah player 2 dengan nilai 3 poin".

- Bila seri maka hasilnya adalah:
"Score seri dengan nilai masing-masing player adalah <nilai>"

- Bila panjang array tidak sama maka hasilnya adalah:
"Input tidak valid, panjang array harus sama"

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), sort(), shift(), unshift()
2. dilarang menggunakan regex
*/


function winner(player1, player2) {
    // tulis code disini
    if(player1.length!== player2.length){
        return "Input tidak valid, panjang array harus sama";
    }
    var player1Score = 0;
    var player2Score = 0;
    for (var i = 0; i < player1.length; i++) {
        if (player1[i] > player2[i]) {
            if ((i+1) % 2 == 0) {
                player1Score += 2;
            }
            else {
                player1Score ++;
            }
        }
        else if (player2[i] > player1[i]) {
            if ((i+1) % 2 == 0) {
                player2Score += 2;
            }
            else {
                player2Score++;
            }
        }
        else {
            player1Score++;
            player2Score++;
        }
    }
    var win = 0;
    var score = [0, player1Score, player2Score];
    
    if (player1Score > player2Score) {
        win = 1;
    }
    else if (player2Score > player1Score) {
        win = 2;
    }

    if (win > 0) {
        return "Player 1 mendapatkan nilai " + player1Score + " poin dan player 2 mendapatkan nilai " + player2Score
            + " poin, pemenangnya adalah player " + win + " dengan nilai " + score[win] + " poin";
    }
    else {
        return "Score seri dengan nilai masing-masing player adalah " + score[1];
    }
}

console.log(winner([1, 2, 0], [9, 2, 1]));
// Player 1 mendapatkan nilai 1 poin dan player 2 mendapatkan nilai 3 poin,
// pemenangnya adalah player 2 dengan nilai 3 poin

console.log(winner([6, 7, 8, 12, 3], [3, 12, 8, 7, 6]));
// Score seri dengan nilai masing-masing player adalah 4

console.log(winner([8, 8, 2, 12], [4, 11, 1]));
// Input tidak valid, panjang array harus sama
