/**
Simple Cards Fusion
-------------------
# Intro
Yu-Gi-Oh! Trading Card Game adalah permainan kartu koleksi Jepang yang dibuat
dan dipublikasikan oleh Konami.
Di dalam permainan ini terdapat 'Fusion Cards' yang menggabungkan 2 monster
menjadi 1 monster yang lebih kuat!
# Task
Diberikan array of objects `fusionCards` di dalam function `simpleCardsFusion` yang
berisi nama-nama monster dan monster apa saja yang dibutuhkan untuk penggabungan.
Tugas kalian adalah implementasikan function `simpleCardsFusion` untuk
mencari nama monster hasil gabungan dari input kalian (`str`).
# Notes
- Input pasti berisi 2 monster
- Input terbalik masih akan menghasilkan monster yang sama
    ex: 'Faith Bird+Skull Red Bird' SAMA DENGAN 'Skull Red Bird+Faith Bird'
- Kembalikan 'Fusion failed' ketika gabungan monster kalian tidak ditemukan di `fusionCards`
# Rules
- Dilarang menggunakan built-in function .filter()
*/

function simpleCardsFusion (str) {
  const fusionCards = [
    { name: 'Cyber Twin Dragon', card1: 'Cyber Dragon', card2: 'Cyber Dragon' },
    { name: 'Gaia The Dragon Champion', card1: 'Curse of Dragon', card2: 'Gaia The Fierce Knight' },
    { name: 'Meteor B. Dragon', card1: 'Red-Eyes B. Dragon', card2: 'Meteor Dragon' },
    { name: 'Crimson Sunbird', card1: 'Faith Bird', card2: 'Skull Red Bird' },
    { name: 'Flame Swordsman', card1: 'Masaki the Legendary Swordsman', card2: 'Flame Manipulator' }
  ];

  var result = "";
  var splittedStr = str.split('+');
  for (var i = 0; i < fusionCards.length; i++) {
    var card1 = fusionCards[i].card1;
    var card2 = fusionCards[i].card2;
    if((splittedStr[0] === card1  || splittedStr[0] === card2) 
      && (splittedStr[1] === card1 || splittedStr[1] === card2)
    ){
      result+=fusionCards[i].name
    }
  }
  if(result.length === 0) return "Fusion Failed";
  return result;
}

console.log(simpleCardsFusion('Flame Manipulator+Masaki the Legendary Swordsman'));
// Flame Swordsman

console.log(simpleCardsFusion('Gaia The Fierce Knight+Curse of Dragon'));
// Gaia the Dragon Champion

console.log(simpleCardsFusion('Faith Bird+Skull Red Bird'));
// Crimson Sunbird

console.log(simpleCardsFusion('Red-Eyes B. Dragon+Meteor Dragon'));
// Meteor B. Dragon

console.log(simpleCardsFusion('Cyber Dragon+Cyber Dragon'));
// Cyber Twin Dragon

console.log(simpleCardsFusion('Dark Magician+Dark Magician'));
// Fusion failed

console.log(simpleCardsFusion('Cyber Dragon+Dark Magician'));
// Fusion failed