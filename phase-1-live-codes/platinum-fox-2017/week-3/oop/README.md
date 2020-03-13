# ** PABRIK ROBOT (30 Menit) **

Kamu diminta untuk mensimulasikan produksi robot di negara anda. Robot adalah kategori umum dan akan ada 3 macam robot yang akan diproduksi yaitu WallE, BayMax, dan AutoBot. Masing-masing robot akan memiliki kemampuan tersendiri tergantung dari tujuan diciptakan.

Buatlah class Robot dengan property name dan purpose
Buatlah class-class robot yang akan diproduksi.
Adapun spesifikasi setiap robot adalah sebagai berikut:

```text
WallE

name: 'Wall-E',
purpose: 'worker'
method:
work(), menuliskan 'Wall-E cleans the planet'

BayMax

name: 'BayMax'
purpose: 'medic'
method:
heal(), menuliskan 'Hi, I am BayMax, how may I help you?'

AutoBot

name: 'AutoBot'
purpose: 'defender'
method:
defend(), menuliskan "AutoBot, let's roll!"
```

## Lanjut halaman berikutnya

Selanjutnya, buatlah class RobotFactory dengan method produceRobot yang menerima parameter nama robot yang ingin dibuat beserta jumlah yang ingin dibuat. Method tersebut akan mengembalikan array of objects.

Berikut driver code yang harus kalian pakai:

```javascript
let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work()
}

for (var i = 0; i < baymax.length; i++) {
  baymax[i].heal();
}

for (var i = 0; i < autobot.length; i++) {
  autobot[i].defend();
}
```
### ** TEST CASE TIDAK BOLEH DIUBAH! **
```
============output yang diharapkan:
Wall-E cleans the planet
Wall-E cleans the planet
Wall-E cleans the planet
Wall-E cleans the planet
Wall-E cleans the planet
Wall-E cleans the planet
Hi, I am BayMax, how may I help you?
Hi, I am BayMax, how may I help you?
Hi, I am BayMax, how may I help you?
Hi, I am BayMax, how may I help you?
Hi, I am BayMax, how may I help you?
AutoBot, let's roll!
AutoBot, let's roll!
AutoBot, let's roll!
```
