/**
 * ================
 * String Evaluator
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function untuk menghitung kalkulasi dari input yang bentuknya berupa string
 * Operator yang digunakan adalah + - * /
 * 
 * Rules
 * -----
 * 1. WAJIB dilakukan dengan rekursif
 * 2. dilarang menggunakan built-in function eval
 * 3. Dilarang menambah dan merubah tipe data parameter
 * 4. Dilarang membuat function lain selain evaluate
 */

function evaluate(str) {

    let numStr = '0';
    let sliceIndex = -1;
    let operator = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            numStr += str[i];
        }
        else {
            operator = str[i];
            sliceIndex = i;
            break;
        }
    }

    if (sliceIndex === -1) {
        return Number(numStr);
    }

    // lakukan + - * / sesuai operator
    let num = Number(numStr);
    if (operator === '+') {
        return num + evaluate(str.slice(sliceIndex + 1));
    } else if (operator === '-') {
        return num - evaluate(str.slice(sliceIndex + 1));
    } else if (operator === '*') {
        return num * evaluate(str.slice(sliceIndex + 1));
    } else if (operator === '/') {
        return num / evaluate(str.slice(sliceIndex + 1));
    }
}

console.log(evaluate('1+2+3+4+5')) // 15
console.log(evaluate('1*2*3*4*5')) // 120
console.log(evaluate('20/4')) // 5
console.log(evaluate('20-6')) // 14