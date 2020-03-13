# TIME FORMAT CONVERSION

> ⏰ time estimation: 25 minutes

Buat sebuah fungsi yang mengubah Military Time `13:00:00` menjadi 12-hours time `01:00:00PM`,
dan buat juga fungsi yang dapat mengubah menjadi sebaliknya, berikan validasi apabila input yang diberikan valid atau tidak.

[Referensi](https://en.wikipedia.org/wiki/24-hour_clock)
 
### Release 0
---
Tampilkan konversi dari Military Time ke 12hours time dengan fungsi `convertTo12`

Notes:
  - Format input time yang valid adalah "HH:MM:SS"
    

```javascript
console.log(convertTo12("13:15:22")); // 01:15:22PM
console.log(convertTo12("12:00:00")); // 12:00:00PM
console.log(convertTo12("00:00:00")); // 12:00:00AM
console.log(convertTo12("24:00:00")); // invalid time input
console.log(convertTo12("21:00:60")); // invalid time input
console.log(convertTo12("22:00")); // invalid time input
```

### Release 1
Tampilkan konversi dari 12hours time ke Military Time dengan fungsi `convertTo24`


Notes:
  - Format input time yang valid adalah "HH:MM:SSA" (A adalah "PM" atau "AM")

```javascript
console.log(convertTo24("03:10:00PM")); // 15:10:00
console.log(convertTo24("09:50:30AM")); // 09:50:30
console.log(convertTo24("11:50:00XS")); // invalid time input
console.log(convertTo24("12:00:00AM")); // invalid time input
console.log(convertTo24("10:00:00")); // invalid time input
console.log(convertTo24("13:50:00PM")); // invalid time input
console.log(convertTo24("1:50:00PM")); // invalid time input
console.log(convertTo24("01:50PM")); // invalid time input
```
