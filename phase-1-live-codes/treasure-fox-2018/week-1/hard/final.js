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

function output (driverName, time, currentSpeed, topSpeed, avgSpeed) {
  console.log('Driver\t\t:\t' + driverName);
  console.log('Time\t\t:\t' + time + 's');
  console.log('Current Speed\t:\t' + currentSpeed + 'km/h');
  console.log('Top Speed\t:\t' + topSpeed + 'km/h')
  console.log('Avg Speed\t:\t' + avgSpeed + 'km/h');
}

function raceSimulation (text) {
  let driverName = getDriverName(text);
  let speedData = text.slice(text.indexOf(',') + 1, text.indexOf('\n')) + ',';
  let time = 0;
  let totalSpeed = 0;
  let topSpeed = 0;
  let avgSpeed = 0;

  let speed = '';

  clearScreen();

  for (let i = 0; i < speedData.length; i++) {
    const char = speedData[i];
    if (char !== ',') {
      speed += char;
    } else {

      const currentSpeed = Number(speed);

      if (topSpeed < currentSpeed) {
        topSpeed = currentSpeed;
      }

      time++;
      totalSpeed += currentSpeed;
      avgSpeed = (totalSpeed / time).toFixed(2);

      speed = '';

      output(driverName, time, currentSpeed, topSpeed, avgSpeed);

      if (speedData[i + 1]) {
        sleep(1000);
        clearScreen();
      } else {
        console.log('\nFINISHED!');
      }

    }
  }
}

const fs = require('fs');
const text = fs.readFileSync('./sample.txt', 'utf8');

raceSimulation(text);
