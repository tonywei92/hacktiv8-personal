/*
    SNAKE AND LADDER SORTING
    ========================

    diberikan sebuah array multidimensi yang berisi
    angka acak. 

    tugas kalian adalah mengurutkan angka tersebut
    sesuai dengan urutan seperti 
    board snake and ladder.
    urutkan secara ascending ( dari kecil ke besar )

    ukuran array multidimensi ini tak harus 
    persegi ( panjang dan lebar tak mesti sama  )

    - tidak boleh memakai array function apapun kecuali push


*/
function snakeLadderSorting(arr){

    console.log(arr);

    let collectNum = [];
    let result = [];

    // baris dan kolom bisa beda , maka simpan keduanya 
    let numRow = arr.length;
    let numCol = arr[0].length

    // tampung semua angka dalam singel array
    for(let i = 0; i < numRow; i++){
        for(let j = 0; j < numCol; j++){
            collectNum.push( arr[i][j] );
        }
    }

    // sorting angka di singel array terlebih dahulu 
    let sortingArr =  sortSelection(collectNum);
    let counter = sortingArr.length; // length 
    let rowCounter = 0;

    // perulangan sesuai baris 
    for(let k = numRow; k > 0; k--){

        let newRow = []; 
        if(rowCounter % 2 === 0){

             //  maju 
            let start = counter-numCol; // idx
            let finish = counter;
           
            for(l = start ; l < finish; l++){
               
                newRow.push(sortingArr[l])
                counter--;
            }
            
        }else
        {
            // mundur
            let finish = (counter-1)-numCol; // idx
            let start = counter-1;

            //console.log( counter,"+",numRow," ==> ",start , finish )

            for(l = start ; l > finish; l--){
                newRow.push(sortingArr[l])
                counter--;
            }
            
        }

        rowCounter++;
        result.push(newRow);
      
    }

    return result;

}

function sortSelection(row){
    
    //console.log("row : ",row);

    for(let i = 0; i < row.length; i++){

        let firstNum = row[i];
        let small = row[i+1];
        let smallIdx = i+1;
        for(let j = i+1; j < row.length; j++){
            if(row[j] < small){
                small = row[j];
                smallIdx = j;
            }
        }
       
        if(small < firstNum){
            let tmp = row[i];
            row[i] = small;
            row[smallIdx] = tmp;
        }
    }

    //console.log("row : ",row);
    return row;
    
}

// 4 * 3 
console.log(snakeLadderSorting([
   [6,4,5,12],
   [1,3,8,11],
   [9,2,7,13]
]));
/* [ 
     [ 9, 11, 12, 13 ], 
     [ 8, 7, 6, 5 ], 
     [ 1, 2, 3, 4 ] 
   ] 
*/

// 5 * 5 
console.log(snakeLadderSorting([
    [11,65,88,12,66],
    [18,55,33,24,78],
    [44,58,35,76,19],
    [35,67,90,19,25],
    [97,46,37,17,29],
]));
/*
[ [ 76, 78, 88, 90, 97 ],
  [ 67, 66, 65, 58, 55 ],
  [ 35, 35, 37, 44, 46 ],
  [ 33, 29, 25, 24, 19 ],
  [ 11, 12, 17, 18, 19 ] ]

*/