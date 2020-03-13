# Water Supply (Easy) <img align="right" width="100" height="70" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">

#### Time Estimation (30 Minutes)

Kalian diminta client untuk membuat suatu applikasi water supply, dimana client memiliki supplier yang menyediakan bahan berupa unsur kimia yaitu: C, F, H, O, dan P.

```javascript
const availableIngredient = 'CFHOP';
```

## Release 0 (Make solvent)

Kalian diminta oleh client untuk membuat suatu solvent yang terdiri dari 4 - 10 dari gabungan unsur kimia yang ada.

```javascript
function makeSolvent() {
    // proses untuk membuat 4 - 10 senyawa kimia dari available Ingridient secara random
}
makeSolvent();
/* 
	Expected output: (random solvent yang panjanganya 4 - 10, dan unsur kimia yang random)
	CHCP, HPOC, HHPPCPO
*/
```

## Release 1 (Check total energy)

Dari suatu solvent yang sudah ada kalian diminta oleh client, untuk menghitung potensi energi maksimum dari senyawa kimia random sebelumnya. Perhitungannya antara lain:

- 1 energi akan dihitung apabila terdapat setidaknya 2 H dan 1 O
- 2 energi akan dihitung apabila terdapat setidaknya 4 H dan 2 O
- dst

```javascript
function checkTotalEnergy(solvent) {
    // proses untuk menghitung total energy
}

checkTotalEnergy('HPHO'); // expected return 1 energy 2 H 1 O
checkTotalEnergy('HHHO'); // expected return 1 energy 3 H 1 O
checkTotalEnergy('HHHHOO'); // expected return 1 energy 4 H 2 O
```

## Release 2 (Water Supply)

Client meminta untuk untuk membuat suatu water supply yang meminta inputan total energi yang dibutuhkan oleh water supply tersebut.

```javascript
function waterSupply(needEnergy) {
    // proses untuk membuat solvent hingga energy yang dibutuhkan terpenuhi
}

console.log(waterSupply(3));
/*
	[
		{ name: 'HPHO', energy: 1 },
		{ name: 'CHPCO', energy: 0 },
		{ name: 'PCHOCHP', energy: 1 },
		{ name: 'HHHHHHOO', energy: 2 }
	]
*/
```

Notes:

- Water supply akan membuat random solvent, dan menampung ke output yang dihasilkan entah solvent tersebut menghasilkan energy atau tidak
- Proses berhenti ketika kebutuhan needEnergy sudah terpenuhi, bila tidak waterSupply akan terus memproduksi solvent hingga kebutuhan needEnergy sudah terpenuhi.

## Release 3 (Aggregate Solvent)

Client meminta agar bentukkan solvent dibuat menjadi senyawa aggregate agar lebih mudah dilihat

``` javascript
function aggregate(solvent) {
    // proses agregasi solvent
}

aggregate('HPCH'); // CH2P
aggregate('HHHO'); // H30
```

Notes:

- Urutan senyawa diasumsikan selalu berurutan dari C => F => H => O => P atau sesuai urutan alfabet a-z
- Apabila senyawa berjumlah 1 maka tidak perlu ditambahkan akhiran, apabila senyawa berjumlah lebih dari 1 maka tambahkan akhiran.
- Release ini dianggap dikerjakan apabila setiap output solvent di release 2 sudah di aggregate kan.

#### Apabila kalian membutuhkan function tambahan lainnya, silahkan tambahkan function tersebut.

