/*
    =======================
    sumRange Multidimension
    =======================

    [INSTRUCTION]
    buatlah sebuah program yang dapat menjumlahkan angka 
    angka pada range tertentu yaitu : 
    1. atas kiri 
    2. atas kanan 
    3. sebelah kiri 
    dan hasilnya di letakkan pada sebelah kanan 
    
    dan inputnya berupa array multi dimensi yang berisi
    angka - angka di row paling atas dan col paling kiri 
    berikut contoh inputnya : 

    [
        [1,2,3,4,5],
        [6,0,0,0,0],
        [7,0,0,0,0],
        [8,0,0,0,0],
        [9,0,0,0,0]
    ]

    yang nantinya angka 0 harus diisi dengan syarat menjumlahkan
    3 angka disekitarnya yaitu : 
    1. atas kiri 
    2. atas kanan 
    3. sebelah kiri 

    [EXAMPLE]
    untuk mensimulasikannya ubah angka 0 menjadi variable 
    [
        [1,2,3,4,5],
        [6,a,b,c,d],
        [7,e,f,g,h],
        [8,i,j,k,l],
        [9,m,n,o,p]
    ]

    pertama kita kerjakan a , 
    1(atas kiri) + 2(atas kanan) + 6(kiri) = 9
    maka a = 9
    untuk b ,
    2(atas kiri) + 3(atas kanan) + 9(kiri) = 14
    untuk c ,
    3(atas kiri) + 4(atas kanan) + 14(kiri) = 21

    dan seterusnya 

*/

function sumRangeMultidimension(arr) {
  //your code here
}

console.log(sumRangeMultidimension( [
    [1,2,3,4,5],
    [6,0,0,0,0],
    [7,0,0,0,0],
    [8,0,0,0,0],
    [9,0,0,0,0]
]))
/*
[ 
  [ 1, 2, 3, 4, 5 ],
  [ 6, 9, 14, 21, 30 ],
  [ 7, 22, 45, 80, 131 ],
  [ 8, 37, 104, 229, 440 ],
  [ 9, 54, 195, 528, 1197 ] 
]
*/