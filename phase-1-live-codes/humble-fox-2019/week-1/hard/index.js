function pirateFindTreasure(str) {

}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
          break;
      }
  }
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

console.log(pirateFindTreasure("OOOOOOTTOPHOOTOO")) // 7 kotak
console.log(pirateFindTreasure("TOOOOPOHOTOTOTOO")) // 14 kotak
