/*
================
Monster Hunter
================

[INSTRUCTIONS]
sebagai hunter, kita akan mencari harta karun('$') selama dalam perjalanan.

perjalanan digambarkan dalam sebuah string dan ditandai dengan berbagai kode:
- '*' adalah tanda kita mendapatkan serangan dari monster
- 'x' adalah tanda kita melakukan serangan dan berhasil membunuh monster itu
- '$' adalah tanda berhasil mendapatkan gold selama di perjalanan
- '-' adalah tanda selama di perjalanan tidak terjadi apa-apa

jika selama perjalanan dia mendapatkan 3 serangan, maka hunter akan kembali pulang dan akan memberikan info berapa banyak gold($) yang didapatkan.
jika dia berhasil membunuh lebih dari 5 monster, maka hunter akan pulang untuk beristirahat
dan jika selama perjalanan tidak masuk kondisi yang ada di atas, hunter akan memberikan info berapa banyak gold yang didapat

ps: PERHATIKAN TEST CASE UNTUK OUTPUT YANG SESUAI

Buatlah sebuah algoritma/pseudocode dan buatlah sebuah function yang akan menerima sebuah inputan string dengan output sesuai dengan penjelasan di atas.

[RULE]
- WAJIB menggunakan algoritma/ pseudocode

[EXAMPLE]
input: '---x---$-$-$-*-*-$'
proses: mengikuti kondisi di atas
output: 'Selamat, kamu berhasil mendapatkan 4 gold!'

Algoritma / Pseudocode here..

*/

function monsterHunter(string) {}

console.log(monsterHunter('---x---$-$-$-*-*-$')); // 'Selamat, kamu berhasil mendapatkan 4 gold!'
console.log(monsterHunter('---x-xx-$-$-x-x-$-$-$')); // 'Kamu kelelahan, kamu hanya mendapatkan 2 gold'
console.log(monsterHunter('$$$---------***')); // 'Kamu terluka parah, kamu hanya mendapatkan 3 gold'
console.log(monsterHunter('$$$--x-x-x-$$-x--**')); // 'Selamat, kamu berhasil mendapatkan 5 gold!'
