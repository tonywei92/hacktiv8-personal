/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/
/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/

/*
STORE `str` with any string
STORE `tampil` with any string
STORE `a` with 0
WHILE `a` less than LENGTH OF `str` DO
  IF `srt[a]` equal 1
    DO SET `tampil` with `tampil` + `i`
  ELSE IF `srt[a]` equal 4
    DO SET `tampil` with `tampil` + `a`
  ELSE IF `srt[a]` equal 3
    DO SET `tampil` with `tampil` + `e`
  ELSE IF `srt[a]` equal 7
    DO SET `tampil` with `tampil` + `u`
  ELSE IF `srt[a]` equal 0
    DO SET `tampil` with `tampil` + `o`
  ELSE
    DO SET `tampil` with `tampil` + `str[a]`
DISPLAY `tampil`
*/


function numberLetters (str) {
   
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //
