/*
================
Advanced Seating
================
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.
*/

function trainSeating(penumpang) {
  var result = {};
  for (var i = 0; i < penumpang.length; i++) {
    if(result[penumpang[i].gerbong] === undefined){
      result[penumpang[i].gerbong] = [];
    }
    result[penumpang[i].gerbong].push({
      name: penumpang[i].nama,
      seat: penumpang[i].seat
    })
  }
  return result;
}


console.log(trainSeating([
  { nama: "Goku", gerbong: "VVIP", seat: 'A1' },
  { nama: "Vegeta", gerbong: "VIP", seat: 'V1' },
  { nama: "Sasuke", gerbong: "VVIP", seat: 'A2' },
  { nama: "Naruto", gerbong: "Regular", seat: 'R1' },
  { nama: "Sakura", gerbong: "Regular", seat: 'R3' },
  { nama: "Luffy", gerbong: "VIP", seat: 'V2' },
  { nama: "Zoro", gerbong: "VVIP", seat: 'A666' },
  { nama: "Nami", gerbong: "VIP", seat: 'V6' }
]));
/*
Output :
{
  VVIP:
  [ { nama: 'Goku', seat: 'A1' },
    { nama: 'Sasuke', seat: 'A2' },
    { nama: 'Zoro', seat: 'A666' } ],
  VIP:
  [ { nama: 'Vegeta', seat: 'V1' },
    { nama: 'Luffy', seat: 'V2' },
    { nama: 'Nami', seat: 'V6' } ],
  Regular:
    [ { nama: 'Naruto', seat: 'R1' },
      { nama: 'Sakura', seat: 'R3' } ]
}
*/
