# Clock Wise rotation
> ⏰ Time Estimation: ? mins

Kamu diminta untuk membuat dua buah box dimana box pertama akan memutari box kedua. Box pertama berputar searah jarum jam ke arah jam 12, jam 3, jam 6 dan jam 9.
Ukuran box pertama sesuai dengan input `width` dan `height` yang diberikan, sedangkan box kedua sesuai dengan input `width`.

## Relase 0
Buatlah sebuah function `clockWiseBox` menerima input `width` dan `height` yang akan menghasilkan kedua box tersebut mengarah ke jarum jam 12.

Minimum `width` dan `height` adalah `3`



<b>code sample</b>
```javascript
function clockWiseBox(width, height){
  //put your code here
}

clockWiseBox(4, 6)
clockWiseBox(2, 12)
clockWiseBox(7, 2)
```
<b>result</b>
```
size: 4 x 6
     ****     
     *  *     
     *  *     
     *  *     
     *  *     
     ****     
     *  *     
     *  *     
     ****  
Invalid width value
Invalid height value
```


## Release 1
Tambahkan input `direction` untuk merubah arah box tersebut,
Nilai `direction` `0` akan mengarah ke jam 12, nilai `1` untuk kearah jam 3.

<b>code sample</b>
```javascript
function clockWiseBox(width, height, direction){
  //put your code here
}

clockWiseBox(4, 6, 0)
clockWiseBox(4, 6, 1)
```
<b>result</b>
```
size: 4 x 6
     ****     
     *  *     
     *  *     
     *  *     
     *  *     
     ****     
     *  *     
     *  *     
     ****  
size: 4 x 6
              
              
              
              
              
     *********
     *  *    *
     *  *    *
     *********
```

## Release 2
Melanjutkan sebelumnya input direction `2` dan `3` untuk kearah jam 6 dan jam 9.

Kemudian dengan buatlah sebuah animasi yang melakukan pergerakan tersebut secara berulang dari input awal yang diberikan jika `direction` tidak di input maka secara default nilainya 0.

<b>code sample</b>
```javascript

function clockWiseBox(width, height, direction){
  // membersihkan layar
  console.clear()

  //put your code here
  
  // Menjalankan kembali setiap 1 detik
  setTimeout(function(){
    rotatingBox(width, height, direction)
  }, 1000)
}

clockWiseBox(4, 6)
```
<b>result</b>

Detik pertama
```
size: 4 x 6
     ****     
     *  *     
     *  *     
     *  *     
     *  *     
     ****     
     *  *     
     *  *     
     ****     
              
              
              
              
```
Detik kedua
```
size: 4 x 6
              
              
              
              
              
     *********
     *  *    *
     *  *    *
     *********
              
              
              
              
              

```
Detik ke tiga
``` 
size: 4 x 6
              
              
              
              
              
     ****     
     *  *     
     *  *     
     ****     
     *  *     
     *  *     
     *  *     
     *  *     
     ****  
```
Detik ke empat
```
size: 4 x 6
              
              
              
              
              
*********     
*    *  *     
*    *  *     
*********     
              
              
              
              
              

```
Detik berikutnya akan mejalankan pola yang sama.

Notes:

* Silahkan mengubah skeleton code jika dibutuhkan

~Good Luck~