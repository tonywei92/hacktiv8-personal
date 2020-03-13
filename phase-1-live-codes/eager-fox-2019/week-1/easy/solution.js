const layout = {
  '`': '`', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 0: '0', '[': '-', ']': '=',
  '~': '⇧`', '!': '⇧1', '@': '⇧2', '#': '⇧3', '$': '⇧4', '%': '⇧5', '^': '⇧6', '&': '⇧7', '*': '⇧8', '(': '⇧9', ')': '⇧0', '{': '⇧-', '}': '⇧=',
  "'": 'Q', ',': 'W', '.': 'E', p: 'R', y: 'T', f: 'Y', g: 'U', c: 'I', r: 'O', l: 'P', '/': '[', '=': ']', '\\': '\\',
  '"': '⇧Q', '<': '⇧W', '>': '⇧E', P: '⇧R', Y: '⇧T', F: '⇧Y', G: '⇧U', C: '⇧I', R: '⇧O', L: '⇧P', '?': '⇧[', '+': '⇧]', '|': '⇧\\',
  a: 'A', o: 'S', e: 'D', u: 'F', i: 'G', d: 'H', h: 'J', t: 'K', n: 'L', s: ';', "-": "'",
  A: '⇧A', O: '⇧S', E: '⇧D', U: '⇧F', I: '⇧G', D: '⇧H', H: '⇧J', T: '⇧K', N: '⇧L', S: '⇧;', '_': "⇧'",
  ';': 'Z', q: 'X', j: 'C', k: 'V', x: 'B', b: 'N', m: 'M', w: ',', v: '.', z: '/',
  ':': '⇧Z', Q: '⇧X', J: '⇧C', K: '⇧V', X: '⇧B', B: '⇧N', M: '⇧M', W: '⇧,', V: '⇧.', Z: '⇧/',
  ' ': ' '
}

function whatToPress(words) {
  return words.split('').map(char => layout[char]).join('')
}

console.log(whatToPress('The very first live code in phase 1 for EAGER FOX.')) // ⇧KJD .DOT YGO;K PG.D ISHD GL RJA;D 1 YSO ⇧D⇧A⇧U⇧D⇧O ⇧Y⇧S⇧BE
console.log(whatToPress('So how are you feeling today??')) // ⇧;S JS, AOD TSF YDDPGLU KSHAT⇧[⇧[
console.log(whatToPress("Don't get nervous, keep your focus!")) // ⇧HSLQK UDK LDO.SF;W VDDR TSFO YSIF;⇧1

console.log(whatToPress('`1234567890[]')) // `1234567890-=
console.log(whatToPress(`~!@#$%^&*(){}`)) // ⇧`⇧1⇧2⇧3⇧4⇧5⇧6⇧7⇧8⇧9⇧0⇧-⇧=
console.log(whatToPress(`',.pyfgcrl/=`)) // QWERTYUIOP[]
console.log(whatToPress(`"<>PYFGCRL?+|`)) // ⇧Q⇧W⇧E⇧R⇧T⇧Y⇧U⇧I⇧O⇧P⇧[⇧]⇧\
console.log(whatToPress('aoeuidhtns-')) // ASDFGHJKL;'
console.log(whatToPress('AOEUIDHTNS_')) // ⇧A⇧S⇧D⇧F⇧G⇧H⇧J⇧K⇧L⇧;⇧'
console.log(whatToPress(';qjkxbmwvz')) // ZXCVBNM,./
console.log(whatToPress(':QJKXBMWVZ')) // ⇧Z⇧X⇧C⇧V⇧B⇧N⇧M⇧,⇧.⇧/


function whatIType(string) {
  let pressedButtons = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '⇧') {
      pressedButtons.push(string[i] + string[i + 1])
      i++
    } else {
      pressedButtons.push(string[i])
    }
  }

  const inverseLayout = Object.entries(layout)
    .reduce((acc, [k, v]) => Object.assign(acc, { [v]: k }), {})

  return pressedButtons.map(p => inverseLayout[p]).join('')
}


console.log(whatIType('⇧KJD .DOT YGO;K PG.D ISHD GL RJA;D 1 YSO ⇧D⇧A⇧U⇧D⇧O ⇧Y⇧S⇧BE')) // The very first live code in phase 1 for EAGER FOX.
console.log(whatIType('⇧;S JS, AOD TSF YDDPGLU KSHAT⇧[⇧[')) // So how are you feeling today??
console.log(whatIType("⇧HSLQK UDK LDO.SF;W VDDR TSFO YSIF;⇧1")) // Don't get nervous, keep your focus!

console.log(whatIType('`1234567890-=')) // `1234567890[]
console.log(whatIType('⇧`⇧1⇧2⇧3⇧4⇧5⇧6⇧7⇧8⇧9⇧0⇧-⇧=')) // ~!@#$%^&*(){}
console.log(whatIType(`QWERTYUIOP[]`)) // ',.pyfgcrl/=
console.log(whatIType(`⇧Q⇧W⇧E⇧R⇧T⇧Y⇧U⇧I⇧O⇧P⇧[⇧]`)) // "<>PYFGCRL?+
console.log(whatIType("ASDFGHJKL;'")) // aoeuidhtns-
console.log(whatIType("⇧A⇧S⇧D⇧F⇧G⇧H⇧J⇧K⇧L⇧;⇧'")) // AOEUIDHTNS_
console.log(whatIType('ZXCVBNM,./')) // ;qjkxbmwvz
console.log(whatIType('⇧Z⇧X⇧C⇧V⇧B⇧N⇧M⇧,⇧.⇧/')) // :QJKXBMWVZ

