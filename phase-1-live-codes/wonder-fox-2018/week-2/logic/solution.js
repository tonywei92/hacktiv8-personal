/*
    PERKALIAN MATRIKS
    ================

    gambar
    link penjelasan : 
    
    Syarat Perkalian Matriks 
    - Jumlah Kolom pada matriks pertama , harus sama dengan 
     Jumlah Baris Matriks ke dua

     RELEASE 0 - Cek Validitas Matriks 
     =========
     Buatlah sebuah fitur atau function yang mengecek apakah jumlah
     Kolom pada matriks Pertama sama dengan jumlah baris pada matriks kedua.
     jika terdapat perbedaan keluarkan pesan : 
     " Jumlah kolom pada matriks pertama tidak sama dengan jumlah 
     baris pada matriks ke dua  "

     pastikan bahwa semua jumlah kolom pada suatu matriks sama semua 
     contoh : 
     let m1 = [ 
       [2,3], --> 2
       [4,5]  --> 2
     ] 
     let m2 = [
       [2,3], --> 2
       [1,2,2] --> 3 // jumlah kolom berbeda dengan yg lainnya 
     ]
    kedua matriks ini tidak valid untuk dikalikan karena dalam 1 matriks 
    yaitu variable m2 tidak memiliki jumlah kolom yang sama dengan yang lainnya 
    jika jumlah kolom disemua baris pada matriks tidak sama , maka keluarkan pesan : 
    " jumlah kolom pada matriks ada yang tidak sama "

    FINISH
    =========
    
    let matriks1 = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    let matriks2 = [
        [6,5],
        [3,4],
        [2,1]
    ]

    console.log(matriksMultiply(matriks1,matriks2))

    [
        [(1*6)+(2*3)+(3*2), (1*5)+(2*4)+(3*1)], 
        [(4*6)+(5*3)+(6*2), (4*5)+(5*4)+(6*1)],
        [(7*6)+(8*3)+(9*2), (7*5)+(8*4)+(9*1)]
    ]

    [
        [18,16],
        [51,46],
        [84,76]
    ]

    Syarat mengerjakan soal : 
    - boleh memakai modular function 
     
*/

function matriksMultiply(matriks1,matriks2){
    
    // forming result;
    let result = []
    let totalCell = 0;

    let rowMatriks1 = [];

    if (matriks1[0].length !== matriks2.length){
        return `Jumlah kolom pada matriks pertama tidak sama dengan jumlah 
        baris pada matriks ke dua ` 
    }

    // sediakan dahulu result nya sesuai : 
    // kolom matriks1 dan baris matriks2  
    for(a = 0 ; a  < matriks1.length; a++){
        let tmp = [];
        for(b = 0; b < matriks2[0].length; b++){
            tmp.push(0); // 0 nilai sementara 
        }
        result.push(tmp);
    }

    // CHECK VALIDITAS kedua matriks
    if(matriksValidation(matriks1) && matriksValidation(matriks2)){
       
        // PANJANG KOLOM matriks1 === PANJANG BARIS matriks2
        for(i = 0; i < matriks1.length; i++){

            for(j = 0; j < matriks1[i].length; j++ ){
                
                rowMatriks1.push(matriks1[i][j]); // baris pertama matriks 1
            }

            //col matriks2 di sebut dahulu
            for(k = 0; k < matriks2[0].length; k++){
              let colM2 = [] // nampung data colom matriks2 ke dalam singel array 
              // baris
              for(l = 0; l < matriks2.length; l++){
                colM2.push(matriks2[l][k]); // masukkan data colom nya
              }

              //disini mengalikan dan menambahkan 
              for(m = 0; m < colM2.length; m++){
                 totalCell += colM2[m] * rowMatriks1[m]
              }

              result[i][k] = totalCell // ubah index result yang sudah ada menjadi totalCell
              //colMatriks2.push(colM2);

              totalCell = 0; // reset 
            }

            rowMatriks1 = []; // reset 
           
        }

        return result;

    }else{
        return " jumlah kolom pada matriks ada yang tidak sama "
    }
}

function matriksValidation(matriks){
    
    let isSameRow = true;
    let firstRow = matriks[0].length;

    for(i = 0; i < matriks.length; i++){
        if(matriks[i].length !== firstRow){
            isSameRow = false;
            break;
        }
    }

    return isSameRow ;
}



/* 
    testcase 1
    ========== 
*/

let matriks1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let matriks2 = [
    [6,5],
    [3,4],
    [2,1]
]

console.log(matriksMultiply(matriks1,matriks2))

/*
   [
    [(1*6)+(2*3)+(3*2), (1*5)+(2*4)+(3*1)], 
    [(4*6)+(5*3)+(6*2), (4*5)+(5*4)+(6*1)],
    [(7*6)+(8*3)+(9*2), (7*5)+(8*4)+(9*1)]
   ]

   [
    [18,16],
    [51,46],
    [84,76]
   ]
*/


/* 
    testcase 2
    ========== 
*/

let matriks3 = [
    [1,2,3,4],
    [5,6,7,8],
   
]

let matriks4 = [
    [1,2],
    [3,4],
    [5,6],
    [7,8]
]

console.log(matriksMultiply(matriks3,matriks4))
/*
    [ 
      [ 50, 60 ], 
      [ 114, 140 ] 
    ]
*/

/* 
    testcase 3
    ========== 
*/

let matriks5 = [
    [1,2],
    [3,4],
   
]

let matriks6 = [
    [1,2],
    [3,4],
    
]

console.log(matriksMultiply(matriks5,matriks6))

/* 
   [ 
    [ 7, 10 ], 
    [ 15, 22 ]  
   ]
*/