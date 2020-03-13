const arr = [];

Array(4).fill('').forEach(el => arr.push(Array(4).fill("*")));

arr[1][1] = "a"
console.log(arr)