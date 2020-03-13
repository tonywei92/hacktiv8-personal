function convertTo12(time, reversed) {
  const sTime = time.split(":");
  let symbol = "AM";
  let hour = Number(sTime[0]);

  if (reversed) {
    if(hour === 12 && symbol === "AM"){
      return "invalid time"
    }
    if(hour > 12){
      return "invalid time"
    }
    let seconds = 0;
    seconds = sTime[2].substr(0,2);
    symbol = time.slice(-2);
    if (!(symbol === "PM" || symbol === "AM")) {
      return "invalid time";
    }
    if (symbol === "PM") {
      hour += 12;
    }
    return `${("00" + hour).slice(-2)}:${sTime[1]}:${seconds}`;
  } else {
    if (hour === "12") {
      symbol = "PM";
    }
    if (hour > 12) {
      hour = sTime[0] - 12;
      symbol = "PM";
    }
    if (hour >= 24) {
      return "invalid time";
    }

    if (sTime[0] > 23 || sTime[1] > 59 || sTime[2] > 59) {
      return "invalid time";
    }
    return `${("00" + hour).substr(-2)}:${sTime[1]}:${sTime[2]}${symbol}`;
  }
}

console.log(convertTo12("13:15:22")); // 01:15:22PM
console.log(convertTo12("12:00:00")); // 12:00:00PM
console.log(convertTo12("00:00:00")); // 12:00:00AM
console.log(convertTo12("24:00:00")); // invalid time
console.log(convertTo12("21:00:60")); // invalid time
console.log(convertTo12("03:10:00PM", true)); // 15:10:00
console.log(convertTo12("09:50:30AM", true)); // 09:50:30
console.log(convertTo12("11:50:00XS", true)); // invalid time
console.log(convertTo12("12:00:00AM", true)); // invalid time
console.log(convertTo12("13:50:00PM", true)); // invalid time
