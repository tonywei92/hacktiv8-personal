Buat sebuah function yang menerima 3 parameter.
parameter 1 (start) : start angka pohon
parameter 2 (level) : level pohon
parameter 3 (divider): angka pembagi

Function tersebut akan men-generate pohon angka sesuai dengan angka start dan level nya. <Br>
**CASE 1** : Apabila start nya 3 dan level nya , maka pohon angka seperti ini :

```
3
3-3
3-6-3
3-9-9-3
```

**CASE 2** : Apabila start nya 2 dan level nya 5, maka pohon angka seperti ini :

```
2
2-2
2-4-2
2-6-6-2
2-8-12-8-2
```

**CASE 3** : Apabila start nya 5 dan level nya 7, maka pohon angka seperti ini :

```
5
5-5
5-10-5
5-15-15-5
5-20-30-20-5
5-25-50-50-25-5
5-30-75-100-75-30-5
```
Setelah itu, hitung jumlah angka yang habis dibagi dengan value `parameter 3` !

untuk **CASE 1**
- apabila value `divider` adalah 6, maka output nya harus 1 (karena hanya ada 1 angka yang habis dibagi 6)
- apabila value `divider` adalah 3, maka output nya harus 10 (karena  terdapat angka 10 angka yang habis dibagi 3)
- apabila value `divider` adalah 2, maka output nya harus 0 (karena  tidak ada angka yang habis dibagi 2)

**CASE 2**
- apabila value `divider` adalah 6, maka output nya harus 2 (karena ada 2 angka yang habis dibagi 6)
- apabila value `divider` adalah 2, maka output nya harus 10 (karena  terdapat angka 10 angka yang habis dibagi 2)
- apabila value `divider` adalah 5, maka output nya harus 0 (karena  tidak ada angka yang habis dibagi 5)


Gunakan driver code dibawah ini :

```
function tree(start, level, divider) {

}



console.log(tree(1, 6, 3))  //output: 3
console.log(tree(1, 6, 2))  //output: 6

console.log(tree(1, 8, 3))  //output: 9
console.log(tree(1, 8, 8))  //output: 0

console.log(tree(5, 6, 5))  //output: 21
console.log(tree(5, 6, 10)) //output: 6
```
