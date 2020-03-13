/*
PT XYZ memiliki beberapa cabang usaha masing masing cabang meberikan laporan bulanan income dan outcome mereka,
data ini telah terkumpul dalam bentuk berikut

EXAMPLE:

INPUT:
month  = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec'];
branches = [
  [
    [1000, 1500, 2000, 1500, 2500, 3000, 3000, 2500, 1000, 2000, 1000, 4000], //Income
    [500, 700, 700, 700, 1000, 1300, 1300, 1000, 500, 1000, 500, 2200] //Outcome
  ], //Branch 1
  [
    [1000, 2500, 2000, 2000, 1500, 2000, 1000, 1000, 2000, 2500, 2000, 3000], //Income
    [700, 1000, 700, 1000, 700, 1000, 500, 500, 500, 1000, 1200, 1700] //Outcome
  ], //Branch 2
  [
    [2000, 1500, 1000, 1000, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1000, 1000, 1000, 1500, 1000, 1500, 1000, 2200] //Outcome
  ] //Branch 3
]

dari data tersebut tampikan hasil income dan outcome perbulan masing masing cabang dengan formatsebagai berikut
| {bulan} | Branch-1 IN: {income} OUTCOME: {outcome} | Branch-2 IN: {income} OUT{outcome} | Branch-3 IN: {income} OUT{outcome} |

OUTPUT:

| jan | Branch-1 IN: 1000 | OUT: 500 | Branch-2 IN: 1000 | OUT: 700 | Branch-3 IN: 2000 | OUT: 500 |
| feb | Branch-1 IN: 1500 | OUT: 700 | Branch-2 IN: 2500 | OUT: 1000 | Branch-3 IN: 1500 | OUT: 600 |
| march | Branch-1 IN: 2000 | OUT: 700 | Branch-2 IN: 2000 | OUT: 700 | Branch-3 IN: 1000 | OUT: 500 |
| april | Branch-1 IN: 1500 | OUT: 700 | Branch-2 IN: 2000 | OUT: 1000 | Branch-3 IN: 1000 | OUT: 700 |
| mei | Branch-1 IN: 2500 | OUT: 1000 | Branch-2 IN: 1500 | OUT: 700 | Branch-3 IN: 1500 | OUT: 1000 |
| jun | Branch-1 IN: 3000 | OUT: 1300 | Branch-2 IN: 2000 | OUT: 1000 | Branch-3 IN: 2000 | OUT: 1000 |
| jul | Branch-1 IN: 3000 | OUT: 1300 | Branch-2 IN: 1000 | OUT: 500 | Branch-3 IN: 2000 | OUT: 1000 |
| august | Branch-1 IN: 2500 | OUT: 1000 | Branch-2 IN: 1000 | OUT: 500 | Branch-3 IN: 2500 | OUT: 1500 |
| sept | Branch-1 IN: 1000 | OUT: 500 | Branch-2 IN: 2000 | OUT: 500 | Branch-3 IN: 2000 | OUT: 1000 |
| oct | Branch-1 IN: 2000 | OUT: 1000 | Branch-2 IN: 2500 | OUT: 1000 | Branch-3 IN: 2500 | OUT: 1500 |
| nov | Branch-1 IN: 1000 | OUT: 500 | Branch-2 IN: 2000 | OUT: 1200 | Branch-3 IN: 2000 | OUT: 1000 |
| dec | Branch-1 IN: 4000 | OUT: 2200 | Branch-2 IN: 3000 | OUT: 1700 | Branch-3 IN: 4000 | OUT: 2200 |

*/

function printBranch(branches) {
 let month  = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec'];

  
}
 
//TEST CASE 1
var data1 = [
  [
    [1000, 1500, 2000, 1500, 2500, 3000, 3000, 2500, 1000, 2000, 1000, 4000], //Income
    [500, 700, 700, 700, 1000, 1300, 1300, 1000, 500, 1000, 500, 2200] //Outcome
  ],
  [
    [1000, 2500, 2000, 2000, 1500, 2000, 1000, 1000, 2000, 2500, 2000, 3000], //Income
    [700, 1000, 700, 1000, 700, 1000, 500, 500, 500, 1000, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1000, 1000, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1000, 1000, 1000, 1500, 1000, 1500, 1000, 2200] //Outcome
  ]
]

console.log(printBranch(data1));

/*
| jan | Branch-1 IN: 1000 | OUT:500 |Branch-2 IN: 1000 | OUT:700 |Branch-3 IN: 2000 | OUT:500 |
| feb | Branch-1 IN: 1500 | OUT:700 |Branch-2 IN: 2500 | OUT:1000 |Branch-3 IN: 1500 | OUT:600 |
| march | Branch-1 IN: 2000 | OUT:700 |Branch-2 IN: 2000 | OUT:700 |Branch-3 IN: 1000 | OUT:500 |
| april | Branch-1 IN: 1500 | OUT:700 |Branch-2 IN: 2000 | OUT:1000 |Branch-3 IN: 1000 | OUT:700 |
| mei | Branch-1 IN: 2500 | OUT:1000 |Branch-2 IN: 1500 | OUT:700 |Branch-3 IN: 1500 | OUT:1000 |
| jun | Branch-1 IN: 3000 | OUT:1300 |Branch-2 IN: 2000 | OUT:1000 |Branch-3 IN: 2000 | OUT:1000 |
| jul | Branch-1 IN: 3000 | OUT:1300 |Branch-2 IN: 1000 | OUT:500 |Branch-3 IN: 2000 | OUT:1000 |
| augst | Branch-1 IN: 2500 | OUT:1000 |Branch-2 IN: 1000 | OUT:500 |Branch-3 IN: 2500 | OUT:1500 |
| sept | Branch-1 IN: 1000 | OUT:500 |Branch-2 IN: 2000 | OUT:500 |Branch-3 IN: 2000 | OUT:1000 |
| oct | Branch-1 IN: 2000 | OUT:1000 |Branch-2 IN: 2500 | OUT:1000 |Branch-3 IN: 2500 | OUT:1500 |
| nov | Branch-1 IN: 1000 | OUT:500 |Branch-2 IN: 2000 | OUT:1200 |Branch-3 IN: 2000 | OUT:1000 |
| dec | Branch-1 IN: 4000 | OUT:2200 |Branch-2 IN: 3000 | OUT:1700 |Branch-3 IN: 4000 | OUT:2200 |
*/

// TEST CASE 2
var data2 = [
 [
    [1000, 1500, 2000, 1500, 2500, 3000, 3000, 2500, 1000, 2000, 1000, 4000], //Income
    [500, 700, 700, 700, 1000, 1300, 1300, 1000, 500, 1000, 500, 2200] //Outcome
 ]
]


console.log(printBranch(data2))
/*
| jan | Branch-1 IN: 1000 | OUT:500 |
| feb | Branch-1 IN: 1500 | OUT:700 |
| march | Branch-1 IN: 2000 | OUT:700 |
| april | Branch-1 IN: 1500 | OUT:700 |
| mei | Branch-1 IN: 2500 | OUT:1000 |
| jun | Branch-1 IN: 3000 | OUT:1300 |
| jul | Branch-1 IN: 3000 | OUT:1300 |
| augst | Branch-1 IN: 2500 | OUT:1000 |
| sept | Branch-1 IN: 1000 | OUT:500 |
| oct | Branch-1 IN: 2000 | OUT:1000 |
| nov | Branch-1 IN: 1000 | OUT:500 |
| dec | Branch-1 IN: 4000 | OUT:2200 |
*/
