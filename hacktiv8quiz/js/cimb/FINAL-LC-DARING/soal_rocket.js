/*
  ======================
  Group Object Recursive
  ======================

  [INSTRUCTION]
  buatlah sebuah program yang dapat mengelompokkan hewan berdasarkan 
  huruf depan nya. tidak perlu di sorting data arraynya. cukup dikelompokkan saja 
  tapi buatlah dengan menggunakan metode rekursif. output nya 
  berupa object. 

  [EXAMPLE]
  input :  ["anoa","ayam","badak","bebek"]
  output : 

  karena hanya ada 2 huruf depan yang terdeteksi di data , maka 
  hanya ada 2 key yang ada di output 

  { a:[], b:[]}

  kemudian isilah datanya pada masing - masing group menjadi : 
  { a: [ 'anoa', 'ayam' ], b: [ 'badak', 'bebek' ] }  

  [RULE]
- HARUS MENGGUNAKAN REKURSIF
- TIDAK MENGGUNAKAN REKURSIF NILAI 0


*/

function objectRecursive( arr ){
  //your code here
}

console.log(objectRecursive( ["anoa","ayam","badak","bebek"] )) 
// { a: [ 'anoa', 'ayam' ], b: [ 'badak', 'bebek' ] }

console.log(objectRecursive(['Ayam','Kucing','Bebek','Sapi','Babon','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babon'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(objectRecursive(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/