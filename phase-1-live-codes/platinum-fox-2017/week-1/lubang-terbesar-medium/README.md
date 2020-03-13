# Lubang Terbesar

Hari ini kamu mendapatkan tugas dari pemerintah untuk menemukan jalan dengan besar lubang terbesar untuk segera diperbaiki oleh pemerintah.

#### PETA JALAN
```
1 1 1 1 1
0 1 0 0 1
0 1 1 1 0
0 1 1 1 0
```
** Angka 1 ** melambangkan jalan yang **tidak rusak**

** Angka 0 ** melambangkan jalan yang **rusak**

besar lubang dihitung dari kotak yang ada angka 0 secara berdampingan. untuk kasus diatas besar lubang terbesarnya adalah 3 karna ada angka 0 berurutan secara *Vertical*

untuk menghitung besar lubah bisa vertical ataupun horizontal.

munculkan hanya angka yang paling besar saja jika terdapat lebih dari 1 lubang yang paling besar maka outputnya hanya angka besar lubangnya saja


Gunakan driver code di bawah ini :

```javascript
console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
```
