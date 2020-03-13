/**
 [Instruction]
 Tukar isi variable a dan b! jangan membalik isi console.log()!
 */
// a = 1 /2
// b = 2
//  a = b
// b = a
function tukar(a, b) {
  var temp = a;
  a = b;
  b = temp;
  return 'variable a adalah ' + a + ' dan variable b adalah ' + b;
}

console.log(tukar('Hello', 'World')); // variable a adalah World dan variable b adalah Hello
console.log(tukar('latte', 'coffee')); // variable a adalah coffee dan variable b adalah latte
console.log(tukar('i am', 'great')); // variable a adalah great dan variable b adalah i am
