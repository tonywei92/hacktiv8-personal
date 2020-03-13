// release 0

function convertTo12(time) {
  // code here
}


// release 1

function convertTo24(time) {
  // code here
}

console.log(convertTo12("13:15:22")); // 01:15:22PM
console.log(convertTo12("12:00:00")); // 12:00:00PM
console.log(convertTo12("00:00:00")); // 12:00:00AM
console.log(convertTo12("24:00:00")); // invalid time
console.log(convertTo12("21:00:60")); // invalid time

console.log(convertTo24("03:10:00PM")); // 15:10:00
console.log(convertTo24("09:50:30AM")); // 09:50:30
console.log(convertTo24("11:50:00XS")); // invalid time
console.log(convertTo24("12:00:00AM")); // invalid time
console.log(convertTo24("13:50:00PM")); // invalid time
console.log(convertTo24("1:50:00PM")); // invalid time
