/*
=================
generate calendar
=================

[INSTRUCTION]
buatlah sebuah program yang dapat mengenerate calendar dalam 1 bulan. dengan 2 parameter yaitu:
- dayName, yaitu nama hari yang ada dalam seminggu.
nama  hari ini dijadikan hari yang ada di tanggal 1 dalam bulan itu, 
- dayCount , yaitu jumlah tanggal yang ada pada bulan itu

[EXAMPLE]
- dayName : "monday", // hari dimulainya tanggal 1 
- dayCount : 30

maka outputnya adalah 
{
  "sunday"  :['', 7, 14, 21, 28],
  "monday"  :[1 , 8, 15, 22, 29], // tanggal 1 dimulai dari monday
  "tuesday" :[2 , 9, 16, 23, 30],
  "wenesday":[3 ,10, 17, 24, ''],
  "thursday":[4 ,11, 18, 25, ''],
  "friday"  :[5 ,12, 19, 26, ''],
  "saturday":[6 ,13, 20, 27, '']
}
*/

function generateCalendar(dayName, dayCount) {
  // your code here 
}

generateCalendar("thursday", 31)
/*
{
  "sunday"  :['', 4, 11, 18, 25],
  "monday"  :['', 5, 12, 19, 26], 
  "tuesday" :['', 6, 13, 20, 27],
  "wenesday":['', 7, 14, 21, 28],
  "thursday":[1 , 8, 15, 29, ''],
  "friday"  :[2 , 9, 16, 30, ''],
  "saturday":[3 , 10,17, 31, '']
}
*/