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

function simpleCardsFusion(str) {}

console.log(
  simpleCardsFusion('Flame Manipulator+Masaki the Legendary Swordsman')
);
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
