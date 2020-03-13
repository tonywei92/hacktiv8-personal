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

function getDriverName (text) {
  let driverName = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char !== ',') {
      driverName += char;
    } else {
      return driverName;
    }
  }
}

function output (driverName, topSpeed) {
  console.log('Driver\t\t:\t' + driverName);
  console.log('Top Speed\t:\t' + topSpeed + 'km/h')
}

function raceSimulation (text) {
  let driverName = getDriverName(text);
  let speedData = text.slice(text.indexOf(',') + 1, text.indexOf('\n')) + ',';
  let topSpeed = 0;

  let speed = '';

  for (let i = 0; i < speedData.length; i++) {
    const char = speedData[i];
    if (char !== ',') {
      speed += char;
    } else {

      const currentSpeed = Number(speed);

      if (topSpeed < currentSpeed) {
        topSpeed = currentSpeed;
      }

      speed = '';
    }
  }

  output(driverName, topSpeed);
}

const fs = require('fs');
const text = fs.readFileSync('./sample.txt', 'utf8');

raceSimulation(text);
