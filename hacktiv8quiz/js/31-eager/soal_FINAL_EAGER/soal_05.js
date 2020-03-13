/*
=================================
Object group class and sort score
=================================

[INSTRUCTION]
Diberikan array object nilai-nilai murid dengan struktur object nama, score dan class,
tugas anda adalah memanipulasi data tersebut dengan meng-group berdasarkan
kelas dan sort ascending untuk score-nya!

[EXAMPLE]
- Bila array of ojects adalah :
console.log(
 [
    {
      name: 'debby',
      score: 100,
      class: 'A'
    },
    {
      name: 'amy',
      score: 80,
      class: 'A'
    },
    {
      name: 'david',
      score: 32,
      class: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      class: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      class: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      class: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      class: 'C'
    }
  ]
maka hasilnya adalah:
{ A:
   [ { name: 'david', score: 32 },
     { name: 'amy', score: 80 },
     { name: 'debby', score: 100 } ],
  B:
   [ { name: 'aakansha', score: 75 },
     { name: 'heraldo', score: 90 },
     { name: 'arnold', score: 100 } ],
  C: [ { name: 'aleksa', score: 90 } ] }

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
*/

function groupSort(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    if (result[arr[i].class] === undefined) {
      result[arr[i].class] = [];
    }
    result[arr[i].class].push({
      name: arr[i].name,
      score: arr[i].score
    });
  }
  for (var cls in result) {
    for (var i = 0; i < result[cls].length - 1; i++) {
      for (var j = 0; j < result[cls].length - 1 - i; j++) {
        if (result[cls][j].score > result[cls][j + 1].score) {
          var temp = result[cls][j];
          result[cls][j] = result[cls][j + 1];
          result[cls][j + 1] = temp;
        }
      }
    }
  }
  return JSON.stringify(result, null, 2);
}

console.log(
  groupSort([
    {
      name: 'debby',
      score: 100,
      class: 'A'
    },
    {
      name: 'amy',
      score: 80,
      class: 'A'
    },
    {
      name: 'david',
      score: 32,
      class: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      class: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      class: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      class: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      class: 'C'
    }
  ])
);
/*
 { A:
    [ { name: 'david', score: 32 },
      { name: 'amy', score: 80 },
      { name: 'debby', score: 100 } ],
   B:
    [ { name: 'aakansha', score: 75 },
      { name: 'heraldo', score: 90 },
      { name: 'arnold', score: 100 } ],
   C: [ { name: 'aleksa', score: 90 } ] }
   */
