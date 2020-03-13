function lubangTerbesar(strArr) {
  let arrBaru = [];
  let hitung = 0;
  for (var i = 0; i < strArr.length; i++) {
    arrBaru.push(strArr[i].split(''))
  }
  for (let j = 0; j < arrBaru.length; j++) {
    for (let r = 0; r < arrBaru[j].length; r++) {
      if(arrBaru[j][r] == 0){
        let countj = 1
        let countr = 1
        let posisij = j
        let posisir = r
        while(posisir < arrBaru[j].length - 1){
          if(arrBaru[j][posisir + 1] == 0){
            posisir++
            countr++
          }else{
            posisir = arrBaru[j].length
          }
          if(countr >= hitung){
            hitung = countr
          }
        }
        while(posisij < arrBaru.length - 1){
          if(arrBaru[posisij+1][r] == 0){
            posisij++
            countj++
          }else{
            posisij = arrBaru.length
          }
          if(countj >= hitung){
            hitung = countj
          }
        }
      }
    }
  }
  console.log(arrBaru);
  return hitung
}
console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
