
function randomizer(max, addition = 0) {
  return Math.floor(Math.random() * max) + addition
}

function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let lengthSolvent = randomizer(6, 4);
  let solvent = '';
  for(let i = 0; i < lengthSolvent; i++) {
    solvent += availableIngredients[randomizer(availableIngredients.length)];
  }
  return solvent;
}

function checkTotalEnergy(solvent) {
  let countH = Math.floor(solvent.split('').filter(el => el === 'H').length/2);
  let countO = solvent.split('').filter(el => el === 'O').length;
  return countH > countO ? countO : countH;
}

function waterSupply(needEnergy) {
  const result = [];
  let currentEnergy = 0;
  while (needEnergy > currentEnergy) {
    let solvent = makeSolvent();
    let solventEnergy = checkTotalEnergy(solvent);
    if(solventEnergy) currentEnergy += solventEnergy;
    result.push({ name: aggregate(solvent), energy: solventEnergy });
  }
  return result;
}

function aggregate(solvent) {
  let aggregateName = '';
  let objSolvent = {};
  solvent
    .split('')
    .sort()
    .forEach(el => {
      if(objSolvent.hasOwnProperty(el)) {
        objSolvent[el]++;
      } else {
        objSolvent[el] = 1;
      }
    })
  for (el in objSolvent) {
    aggregateName += el;
    if(objSolvent[el] > 1) aggregateName += objSolvent[el]
  }
  return aggregateName;
}

console.log(waterSupply(3));