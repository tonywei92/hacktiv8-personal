# Generating Trapesium 

Buatlah sebuah program yang berfungsi mengenerate Trapesium sama sisi. 
dimana program ini membutuhkan 2 parameter yaitu 

- topside : yaitu panjang sisi atas dari trapesium
- height : yaitu tinggi dari trapesium 

**contoh :** 
```javascript

function generateTrapesium(topside,height) {
    // your code here 
}

generateTrapesium(3,4)
/*
OUTPUT:

   OOO
  O   O
 O     O
OOOOOOOOO
*/
```

## Release 0
trapesium tidak memiliki panjang alas atas ( topside ) sebesar 1 maka validasi topside nya harus lebih dari 1 

**contoh :**
```javascript

generateTrapesium(1,4)
// topside invalid

```

## Release 1 

langkah nya adalah buat trapesium sama sisi dimana trapesium nya masih dalam keadaan penuh 

**contoh :**

```javascript

generateTrapesium(3,4)
/*
OUTPUT :

   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO

*/
```

## Final Release

Setelah itu buat versi terakhirnya dimana hanya rangkanya saja   

**contoh :**

```javascript

generateTrapesium(3,4)
/*
OUTPUT :

   OOO
  O   O
 O     O
OOOOOOOOO

*/
```

