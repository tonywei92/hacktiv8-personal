class RNG {
  static roll() {
    const tiers = [1, 2, 3, 4, 5];
    let num = Math.floor(Math.random() * 100) + 1;
    let result = 'UNKNOWN';
    if(num > 60) {
      result = tiers[0];
    } else if(num > 40) {
      result = tiers[1];
    } else if(num > 20) {
      result = tiers[2];
    } else if(num > 5) {
      result = tiers[3];
    } else {
      result = tiers[4];
    }

    return result;
  }

  static gatchaRoll(times, callback) {
    let best = 0;
    for(let i = 0; i < times; i++) {
      let res = RNG.roll();
      if(best < res) {
        best = res;
      }
    }

    setTimeout(function () {
      cb(best);
    }, 1000);
  }

  static gatchaRollPromise(times) {
    let best = 0;
    for(let i = 0; i < times; i++) {
      let res = RNG.roll();
      if(best < res) {
        best = res;
      }
    }

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if(best > 0) {
          resolve(best);
        }

        reject('Gatcha gagal!');
      }, 1000);
    });
  }
}

function viewGachaResult(best) {
  console.log(`YOUR BEST GATCHA ROLL RESULT: ${best}`);
}

// RELEASE 0 TEST CASES
RNG.gatchaRoll(5, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(1, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(0, function(result) { viewGachaResult(result) }); // output: 0

// RELEASE 1 TEST CASES
RNG.gatchaRollPromise(1)
  .then(viewGachaResult);