function pasienGroup(pasienlist) {
  // your code here
}

console.log(pasienGroup([["Awtian", "II"],["Dimas", "I"],["Dimitri", "II"],["Icha", "II"]]));
/*
{ I: [ [ 'Dimas' ] ],
  II: [ [ 'Awtian', 'Dimitri' ], [ 'Icha' ] ] }
*/

console.log(pasienGroup([["Arthamevia", "IV"],["Adhi", "III"],["Agus", "III"],["Zaskia", "I"],["Abu Hanifah", "III"],["Umi Hani", "I"],["Umar", "III"]]))
/* 
{ I: [ [ 'Zaskia' ], [ 'Umi Hani' ] ],
  III: [ [ 'Adhi', 'Abu Hanifah', 'Agus' ], [ 'Umar' ] ],
  IV: [ [ 'Arthamevia' ] ] }
*/

console.log(pasienGroup([["Bagus", "II"],["Nanda", "II"],["Maya", "II"],["Putri", "II"], ["Putra", "II"], ["Budi", "II"], ["Nuri", "II"], ["Oki", "IV"], ["Sabda", "IV"], ["Lila", "IV"], ["Nur", "IV"], ["Apa", "IV"]]));
/*
{ II:
   [ [ 'Bagus', 'Nanda' ],
     [ 'Maya', 'Putri' ],
     [ 'Putra', 'Budi' ],
     [ 'Nuri' ] ],
  IV: [ [ 'Oki', 'Sabda', 'Lila', 'Nur' ], [ 'Apa' ] ] }
*/