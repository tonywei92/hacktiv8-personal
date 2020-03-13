/*
  Buatlah sebuah algoritma atau pseudocode untuk kasus berikut:
  Suatu toko baju 'X' sedang mengadakan midnight sale dengan ketentuan sebagai berikut:
  - Jumlah baju yang dibeli lebih dari 9 maka akan mendapatkan 5 baju lagi
  - Jumlah baju yang dibeli lebih dari 5 maka akan mendapatkan 3 baju lagi
  - Jumlah baju yang dibeli lebih dari 2 maka akan mendapatkan 1 barang lagi
  Tampilkan jumlah baju yang didapatkan oleh pembeli.
  NOTED:
  Jika jumlah baju kurang dari 0 atau menerima input selain angka maka tampilkan 'Input Invalid'
*/

STORE 'jumlahBaju' with any value
STORE 'total' with blank value
DO
  IF 'jumlahBaju' less than equal to 0 or 'jumlahBaju' is not number 
    THEN 'total' is equal to 'Input invalid'
  IF 'jumlahBaju' greater than equal to 9
    THEN 'total' is 'total'+5
  IF 'jumlahBaju' greater than 5 and less than 9
    THEN 'total' is 'total'+3
  IF 'jumlahBaju' greater than 2 and less than 3
    THEN 'total' is 'total'+1

DISPLAY total

