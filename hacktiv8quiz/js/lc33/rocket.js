/*
    ============
    Paging Data
    ============

    [INSTRUCTION]
    buatlah program yang berfungsi untuk membuat fitur paging. 
    program ini memiliki 2 input yaitu 
    - dataCount -> banyaknya data 
    - perPage -> banyaknya data yang di tampilkan dalam 1 page 
    output program ini berbentuk object literal yang berisikan detail data yang
    ditampilkan perPage nya 

    [EXAMPLE]
    console.log( pagingData(47,10) )
    output: 
    {
        "page 1":[1,2,3,4,5,6,7,8,9,10], <--- 10 data ( perPage ) 
        "page 2":[11,12,13,14,15,16,17,18,19,20], <-- 10 data
        "page 3":[21,22,23,24,25,26,27,28,29,30],
        "page 4":[31,32,33,34,35,36,37,38,39,40],
        "page 5":[41,42,43,44,45,46,47]
    }
    page nya ada 5

    console.log( pagingData(23,5) )
    output:
    {
        "page 1":[1,2,3,4,5], <--- 5 data (perPage)
        "page 2":[6,7,8,9,10],
        "page 3":[11,12,13,14,15],
        "page 4":[16,17,18,19,20],
        "page 5":[21,22,23]
    }
    page nya ada 5

    [RULE]
    - boleh menggunakan Math
*/

function pagingData(dataCount, perPage) {
    var result = {};
    var pages = [];
    var pageNumber = 1;
    for (var i = 1; i <= dataCount; i++) {
        pages.push(i);
        if(i%perPage === 0){
            result['Page ' + pageNumber] = pages
            pageNumber++;
            pages = [];
        }
    }
    if(pages.length){
        result['Page ' + pageNumber] = pages;
    }
    return result;

}

console.log(pagingData(47, 10))
/* 
  {
      "page 1":[1,2,3,4,5,6,7,8,9,10],
      "page 2":[11,12,13,14,15,16,17,18,19,20],
      "page 3":[21,22,23,24,25,26,27,28,29,30],
      "page 4":[31,32,33,34,35,36,37,38,39,40],
      "page 5":[41,42,43,44,45,46,47]
  }
*/

console.log(pagingData(23, 5))
/* 
  {
      "page 1":[1,2,3,4,5],
      "page 2":[6,7,8,9,10],
      "page 3":[11,12,13,14,15],
      "page 4":[16,17,18,19,20],
      "page 5":[21,22,23]
  }
*/

console.log(pagingData(16, 3))
/*
{ 'page 1': [ 1, 2, 3 ],
  'page 2': [ 4, 5, 6 ],
  'page 3': [ 7, 8, 9 ],
  'page 4': [ 10, 11, 12 ],
  'page 5': [ 13, 14, 15 ],
  'page 6': [ 16 ] }

*/