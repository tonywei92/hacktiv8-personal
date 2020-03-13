/*
    diberikan sebuah array angka dimana , angka - angka tersebut adalah 
    increment dari angka sebelumnya sebesar 1 . 
    tugas kalian adalah menjumlahkan seluruh angka tersebut dengan syarat: 
    - Tidak boleh memakai perulangan 
    - Tidak boleh memakai function magic apapun kecuali .length pada array
    - Tidak boleh memakai rekursif 
*/


function addAll(numbers)
{
    var index = 0;
    var result;
    if(numbers.length%2 === 1){
        index = Math.floor(numbers.length/2);
        result = numbers.length * numbers[index];
    }
    else{
        index = Math.floor(numbers.length/2) - 1;
        result = numbers.length * numbers[index] + Math.ceil(numbers.length/2);
    }    
    return result;
}

console.log(addAll([1,2,3,4,5,6,7,8,9,10]));
// 15
    
console.log(addAll([5,6,7,8,9,10]));
// 45

console.log(addAll([2,4,6,8,10]));
// 20

console.log(addAll([8,7,6,5,4,3,2])); 
// 35