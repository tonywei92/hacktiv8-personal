/*
==============
Favorite Color
==============

[INSTRUCTIONS]
Kita tahu bahwa warna dasar adalah: 'red', 'yellow', 'blue'
Pada sebuah panelis pemilihan warna, function akan me-return output warna terbanyak.
Apabila jumlah 'red' dalam array lebih besar dari jumlah 'yellow' dan 'blue', maka function akan mereturn "red the most favorite!".
Apabila jumlah 'yellow' dalam array lebih besar dari jumlah 'red' dan 'blue', maka function akan mereturn "yellow the most favorite!".
Apabila jumlah 'blue' dalam array lebih besar dari jumlah 'red' dan 'yellow', maka function akan mereturn "blue the most favorite!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!"

[RULE]
- Wajib menuliskan algoritma/pseudocode.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

function favoriteColor (input) {
  if(input.length === 0) return "There are no favorite!";
  var arr = input;
  var red = 0;
  var blue = 0;
  var yellow = 0;
  
  for(var i = 0; i< arr.length; i++){
    if(arr[i] === "red"){
      red++;
    }
    if(arr[i] === "blue"){
      blue++;
    }
    if(arr[i] === "yellow"){
      yellow++;
    }
  }

  if(yellow > red && yellow > blue){
    return "Yellow the most favorite";
  }
  else if(red > yellow && red > blue){
    return "Red the most favorite";
  }
  else if(blue > yellow && blue > red){
    return "Blue the most favorite";
  }
  else{
    return "all equally favorite";
  }

}

console.log(favoriteColor(['red', 'red', 'yellow'])); // "red the most favorite!"
console.log(favoriteColor(['blue', 'red', 'yellow', 'blue'])); // "blue the most favorite!"
console.log(favoriteColor(['yellow', 'yellow', 'yellow'])); // "yellow the most favorite!"
console.log(favoriteColor(['red'])); // "red the most favorite!"
console.log(favoriteColor([])); // "There are no favorite!"