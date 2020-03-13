/* 
====================
Multiplication Table
====================

[INSTRUCTIONS]

Diberikan sebuah array multidimensi yang berisikan angka - angka pada sisi atas table dan kiri nya.
tugas kalian adalah dapat mengalikan angka -angka tersebut sesuai dengan koordinatnya 

[EXAMPLES]
input : 
[
  [0,1,2,3,4],
  [5,0,0,0,0],
  [6,0,0,0,0],
  [7,0,0,0,0],
  [8,0,0,0,0]
]

proses :  
pertama, untuk mengetahui cara penghitungan angka - angka 0 yang belum diketahui hasil perkaliannya,
kita umpamakan mereka seperti variable : 
[
  [0,1,2,3,4], 
  [5,a,b,c,d],
  [6,e,f,g,h],
  [7,i,j,k,l],
  [8,m,n,o,p]
]

untuk mengetahui nilai a , maka kalikan 1 dengan 5, maka:
a = 5
b = 5 * 2 
c = 5 * 3 
d = 5 * 4 
e = 6 * 1 
dst ..

sehingga output nya : 
[
  [0,1,2,3,4], 
  [5,5,10,15,20],
  [6,6,12,18,24],
  [7,7,14,21,28],
  [8,8,16,23,32]
]

[RULES]
- HANYA boleh menggunakan push
- DILARANG menggunakan method REGEX

*/

function multiplicationTable(table) {
  
  for (var i = 1; i < table.length; i++) {
    for(var j = 1; j< table[i].length;j++){
      table[i][j] = table[0][j]*table[i][0]
    }
  }
  return table

}

console.log(multiplicationTable([
  [0, 1, 2, 3, 4],
  [5, 0, 0, 0, 0],
  [6, 0, 0, 0, 0],
  [7, 0, 0, 0, 0],
  [8, 0, 0, 0, 0]
]))
/*
[
  [0,1,2,3,4],
  [5,5,10,15,20],
  [6,6,12,18,24],
  [7,7,14,21,28],
  [8,8,16,23,32]
]
*/