/**
 [Instruction]
 Ubah huruf kecil menjadi besar, dan besar menjadi kecil.
 dilarang menggunakan .toUpperCase() dan .toLowerCase()
 gunakan teknik alphabet library!
 */

function switchCharCase(words) {
  var libUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var libLower = 'abcdefghijklmnopqrstuvwxyz';
  var result = '';
  for (var i = 0; i < words.length; i++) {
    var found = false;
    for (var j = 0; j < libUpper.length; j++) {
      if (words[i] === libUpper[j]) {
        result += libLower[j];
        found = true;
      } else if (words[i] === libLower[j]) {
        found = true;
        result += libUpper[j];
      }
    }
    if (found === false) {
      result += words[i];
    }
  }
  return result;
}

console.log(switchCharCase('aXB******cEf')); //AxbCeF
console.log(switchCharCase('sAyA buKAN AnAK AlAy')); //SaYa BUkan aNak aLaY
