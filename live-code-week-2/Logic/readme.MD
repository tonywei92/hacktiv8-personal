# Game Adventure (60 Menit ) 🎮

Dengan fs dan process.argv, kamu akan membuat game text-based 
adventure yang akan menggunakan nama pemain sebagai inputan dan menyimpan progressnya ke dalam suatu file.

Nama dan level pemain akan disimpan di dalam file bernama `save.json`.

Dibawah ini adalah contoh isi `save.json`:
```json
{
	currentPlayer: {
			"name": "isro",
			"level": 1
		},
	players: [
		{
			"name": "isro",
			"level": 0
		},
		{
			"name": "nadia",
			"level": 29
		}
	]
}
```

<br />

## Release 0

Berikut adalah perintah yang akan dibuat:
```
- register [playerName]
- login [playerName]
- fight
- save
- logout
```

Perintah `register` akan mendaftarkan pemain ke dalam (`players`), jika belum terdaftar.

Bila perintah `register` tidak disertai argument nama pemain, maka pesan yang muncul di terminal:
```
$ node app.js register
Welcome to AdventureGame, please input register [playerName]
```

<br />

## Release 1
Saat pemain melakukan perintah `register`: 
```
$ node app.js register [playerName]
```
Cek, apakah ada nama pemain di dalam file `save.json` ?

Jika tidak ada, simpan nama pemain baru tersebut di file `save.json`.
Lalu tampilkan pesan di terminal seperti dibawah ini:
```
Welcome new player [playerName]!
```

Jika pemain sudah ada, tampilkan pesan di terminal:

```
Already registered: [playerName] lv. [playerLevel]
```

> Note: Level pemain baru selalu dimulai dari **level 0**

<br />

## Release 2  
Saat pemain melakukan perintah `login`:
```
$ node app.js login [playerName]
```

Untuk pemain yang belum terdaftar, tampilkan pesan:
```
Player not found, you may register new player or login using another name.
```


Bila pemain sudah terdaftar, program akan meng-copy pemain yang dimaksud ke (`currentPlayer`) dan simpan di file `save.json`. Pesan di terminal:
```
Login success, welcome [playerName] lv. [level]
```

<br />

## Release 3

- Saat pemain melakukan perintah `fight`:
```
$ node app.js fight
```
Program akan mengacak angka dari `-1` **sampai** `3`, untuk menentukan naik-turunnya level pemain.	

Tampilkan pesan sesuai angka yang dihasilkan:
```
// untuk -1
[playerName] lost fight, lost 1 level

// untuk 0
[playerName] survived fight, nothing was gained

// untuk 1
[playerName] won fight, gained 1 level

// untuk 2
[playerName] won fight, gained 2 levels

// untuk 3
[playerName] won fight, gained 3 levels
```

* Ketika pemain melakukan perintah `save`, progress (`currentPlayer`) akan disimpan ke (`players`) di `save.json`,
lalu tampilkan pesan:

```
$ node app.js save
[playerName] saved progress.
```


* Ketika pemain melakukan perintah `logout`, hapus (`currentPlayer`).

```
$ node app.js logout
[playerName] has quit game.
```


