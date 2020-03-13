<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 2

#===================
# BLOOD TRANSFUSION
#===================


> ⏰ Time limit: **45 min**

Terdapat daftar golongan darah dari orang - orang seperti dibawah ini :

```
javascript:

{
    A: ['Olive', 'Queen', 'Scala', 'Uranium', 'Wick', 'Yongki'],
    B: ['Nancy', 'Patrick', 'Rust', 'Tesla', 'Vans', 'Xavier'],
    AB: ['Bolt', 'Daniel', 'Frans', 'Hans', 'Jack', 'Laura'],
    O: ['Alan', 'Charly', 'Ester', 'George', 'Intan', 'Mona', 'Zend']
}
```

### Release 0
Buat fungsi cekDarah ( kecocokan darah antara donor dan recipient )
fungsi akan menerima dua parameter berupa string,
parameter pertama adalah korban / penerima darah
parameter kedua adalah pendonor darah

Fungsi akan mereturn true / false sesuai dengan kecocokan tipe darah seperti dibawah ini : 
#Notes : 
List kecocokan pendonor dengan recipient ::
A = A, AB, ==>> Artinya golongan darah A dapat mendonor ke golongan A dan AB
B = B, AB,
AB = AB,
O = A, B, AB, O

### Release 1
Buatlah function transfusionProcess.
Transfusion process menerima 2 parameter, 
- Parameter pertama berupa daftar orang yang akan menerima darah / recipients
- Parameter kedua berupa daftar orang yang akan menjadi pendonor darah
Fungsi ini akan mencari pendonor yang cocok dari tiap recipient, pendonor hanya bisa mendonorkan darahnya satu kali


