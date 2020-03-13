/*
    ==================
    Filter Odd Number
    ==================

    buatlah sebuah program yang dapat memfilter angka ganjil
    dari sebuah array dengan metode rekursive

    [EXAMPLE]
    input : 
    [1,8,4,3,7,3,9,10,4,21,8]

    output:
    [1,3,7,3,9,21]

    [Rules]
    1. Dilarang menggunakan loop apapun

*/

function filterData(arr) {
	if(arr.length===0){
        return []
    }
    return arr[0]%2===1 ? [arr[0]].concat(filterData(arr.slice(1))) : filterData(arr.slice(1));
    
}

console.log(filterData([
    1,2,3,4,5,6
]))
// [1,3,5]

console.log(filterData([1,8,4,3,7,3,9,10,4,21,8]))
//  [1,3,7,3,9,21]




