function linearSearch(key, numbers){
    for(let i = 0; i < numbers.length;i++){
        if(numbers[i] === key){
            return i;
        }
    }
    return -1;
}   

let random_numbers = [6,29,18,2,72,19,18,10,37];

console.log(linearSearch(18, random_numbers));  