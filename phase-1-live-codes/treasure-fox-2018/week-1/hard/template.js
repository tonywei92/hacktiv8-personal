function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function raceSimulation (text) {
  // Code here
}

const text = 'Fujiwara Takumi,0,20,45,70,80,100,120,100,100,90,100,110,120,140,110,90,75,70,80,90,100,110,140,145,150,150,150,110,95,70,60,60,60,60,55,60,60,75,100,120,135,145,145,150,150,150,160,170,180,180,180,190,194,196,190,180,160,120,95,100,120,130,160,165,170,170,180,190,194,195,196';

raceSimulation(text);
