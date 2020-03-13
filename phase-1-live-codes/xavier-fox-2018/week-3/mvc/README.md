# YuTweet

![](YuTweet.jpg 'YuTweet Image')

## Summary

YuTweet adalah salah satu Product dari Yudhistira Standard Network.
YuTweet adalah aplikasi tempat orang untuk sharing story

**Note before starting !!**

Sebelum melakukan pengerjaan tugas silahkan jalankan command dibawah ini.

> **npm install** ( melakukan instalasi dependensi)
>
> **node setup.js** ( command untuk mejalankan query membuat table)

Berikut detail dari data dalam aplikasi ini:

## Users

- id
- name
- username
- password

## Tweets

- id
- description
- tweet_date
- userId

## Release 0 - Menu and Register User

### Menu

Aplikasi ini terdiri dari beberapa menu :

```javascript
/*

YuTweet Menu : 
==============

node index.js //tampilkan menu
node index.js menu
node index.js user register <name> <email> <password>

node index.js tweet // tampilkan all tweet
node index.js tweet post <uid> <word> <word> <word> ...
node index.js tweet update <tweetid> <word> <word> <word> <word> ...
node index.js tweet delete <tweetid>
node index.js tweet search <field> <value> <value> <value> ...

*/
```

### Register Rules :

> - name must be filled
> - username must be filled
> - password must be filled
> - validasi username unique
> - **DB sudah disediakan jangan melakukan perubahan pada database (Kecuali insert, update, delete )**

**Contoh Register Success :**

```javascript
node index.js user register 'Aries Dimas' '@ariesdimas' 'dimas12345'

// node index.js user register name email password

/*
Halo, Aries Dimas
Welcome to YuTweet !
*/
```

**Contoh Register Gagal :**

```javascript
node index.js user register 'Dimas Palsu' ariesdimas dimas12345
// Oops something wrong !
// username is already exist

node index.js user register 'Dimas Palsu' ariesganteng
// Oops something wrong !
// password must be filled
```

## Release 1 - Post Tweet

**Rules**

> - Tweet harus diisi dengan menggunakan argv seperti pada contoh dibawah
> - panjang Tweet minimal 5 character dan maximal 30 character
> - **untuk post tweet tidak perlu login, masukan saja userid yang sudah terdaftar**

```javascript
node index.js tweet post <uid> <words>

example command:
node index.js tweet post 1 hello my name is dimas. nice to meet you
// Congratulation! Your tweet successfully posted

node index.js tweet post 1 hello ... ( asumsi panjang tweet lebih dari 30 karakter)
// Oops something wrong
// Maximum character is only 30 character per tweet

// untuk error selain validasi jumlah karakter kurang dari 5 karakter
node index.js tweet post 1 hai
// Oops something wrong
// Minimum character is 5 character more per tweet
```

## Release 2 - Read Tweet

Fitur ini berguna untuk melihat seluruh tweet yang sudah dibuat oleh user.
Tampilkan semua tweet yang sudah pernah dibuat oleh user.

**Rules**

> - Tambahkan character `@` sebelum menampilkan data username contoh: ( @ariesdimas)
> - Tanggal harus diformat menjadi ( 18 Okt 10:10:10)

**Format All Tweet**

```javascript
node index.js tweet
// LIST TWEETS:
// [ { username: '@ariesdimas',
//     description: 'hello my name is dimas . nice to meet you',
//     tweet_date: '18 Okt 10:10:10',
//     name: 'Aries Dimas' },
//   { username: '@ariesdimas',
//     description: 'halo nama saya dimas',
//     tweet_date: '18 Okt 10:10:10',
//     name: 'Aries Dimas' } ]
```

## Release 3 - Update Tweet

**Rules**

> - Tweet harus diisi dengan menggunakan argv seperti pada contoh dibawah
> - panjang Tweet minimal 5 character dan maximal 30 character
> - **untuk update tweet tidak perlu login, masukan saja tweet idnya seperti pada contoh**
> - saat update tweet pastikan tanggal tweet juga diupdate

```javascript
node index.js tweet update <tweetid> <word>

example command:

node index.js tweet update 1 check my last update
// Congratulation! Your tweet successfully updated

node index.js tweet update 3 hello ... ( asumsi panjang tweet lebih dari 30 karakter)
// Oops something wrong
// Maximum character is only 30 character per tweet

// untuk error selain validasi jumlah karakter boleh dibuat custom atau dari sqlite3 nya
node index.js tweet post haha haha haha
// Oops something wrong
// ...<error message>
```

## Release 4 - Delete Tweet

**Rules**

> - **untuk delete tweet tidak perlu login, masukan saja tweet idnya seperti pada contoh**
> - pastikan id tweet yang sudah ada didalam tabel

```javascript
node index.js tweet delete <tweetid>

example command:

node index.js tweet delete 1
// Congratulation! Your tweet successfully deleted

// Apabila error misal salah query atau tidak ada di table tweets boleh mengembalikan error dari sqlite3 atau dibuat custom
node index.js tweet delete 9999
// Oops something wrong
// ...<your error message here>
```

## Release 5 - Search Tweet

Search tweet adalah fitur pencarian tweet dengan keyword tertentu dengan syarat keyword tersebut ada pada field yang ingin kita cari.

**Rules:**

> - Bisa digunakan untuk search tweet berdasarkan username atau deskripsi
> - Format data yang ditampilkan harus sama dengan yang ditampilkan ketika melihat semua tweet
> - **Wajib menggunakan db.each() untuk mengambil data dari databasenya**

```javascript
node index.js tweet search <field> <keyword>

example command:

node index.js tweet username ariesdimas
// LIST TWEETS:
// [ { username: '@ariesdimas',
//     description: 'hello my name is dimas . nice to meet you',
//     tweet_date: '18 Okt 10:10:10',
//     name: 'Aries Dimas' },
//   { username: '@ariesdimas',
//     description: 'halo nama saya dimas',
//    tweet_date: '18 Okt 10:10:10',
//     name: 'Aries Dimas' } ]

node index.js tweet description saya dimas
// LIST TWEETS:
// [
//   {
//     username: '@ariesdimas',
//     description: 'halo nama saya dimas',
//     tweet_date: '18 Okt 10:10:10',
//     name: 'Aries Dimas'
//    }
// ]

// Apabila tidak ada tweet yang ditemukan
node index.js tweet description penguasa dunia
// No Tweets are found
```
