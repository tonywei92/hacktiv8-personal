# MVC, Callback, SQLite ( 90 menit )

Pada challenge kali ini kamu diwajibkan untuk membuat code dalam struktur `MVC`, menggunakan database `SQLite` dan package `node-sqlite3` / `npm sqlite3`.

Input akan diterima lewat `Terminal` kamu dan urutan *command* **WAJIB** mengikuti apa yang akan diminta di bawah.

Good luck! 👊

Songs : `id`, `title`, `released`, `genre`  
Singers : `id`, `name`, `origin`, `label`, `year_of_debut`, `song_id`

## Preparation

Telah disediakan file `package.json` dan `setup.js` untuk membuat *database* dan *table* yang diperlukan. Jadi kamu hanya perlu menjalankan perintah ini sebelum memulai coding:
```bash
npm install
node setup.js
```

## Summary

Command yang perlu dibuat adalah:
- `node index.js song add [released] [genre] [title]`
- `node index.js song delete [id]`
- `node index.js song firstOrCreate [released] [genre] [title]`
- `node index.js singer findBy [input_column]:[input_value]`
- `node index.js singer last ATAU node index.js singer last [input_number]`

## Details

- **Command** : `node index.js song add [released] [genre] [title]`<br>

    **Contoh penggunaan** : `node index.js song add 2018 pop dulu kita masih SMA` <br>

    **Output**: `'Successfully created a new song with ID: 7'` <br>

    **Keterangan** :
    - Ketika command dijalankan, akan menambah `Song` baru
    - `title` **bisa lebih** dari 1 kata.
    - Angka 7 pada contoh output adalah ID dari data yang baru saja di add, untuk mendapatkan ID ini dilarang menggunakan query lagi! Pakailah method yang disediakan `node-sqlite3`

- **Command** : `node index.js song delete [id]` <br>

    **Contoh Penggunaan** : `node index.js song delete 5` <br>

    **Output**: `'Successfully deleted a song, 3 singers were updated.'`<br>

    **Keterangan** :
    - Ketika command dijalankan, akan menghapus data `Song` yg id nya sesuai `inputan`
    - Akan meng-update semua data `Singer` yang song_id nya sesuai `inputan`.
    - Angka 3 pada output adalah jumlah data singers yang di update, angka ini **tidak** boleh didapatkan dari query! Harus didapatkan dari salah 1 cara yang sudah disediakan `node-sqlite3`.

- **Command** : `node index.js song firstOrCreate [released] [genre] [title]`<br>

    **Contoh Penggunaan** : `node index.js song firstOrCreate 2018 pop dulu kita masih SMA`<br>

    **Output** (Ada 2 **kondisi**): <br>
        Kondisi pertama apabila memenuhi syarat untuk di-create:  
        `'Successfully created a new song with ID: 7'`  
        Kondisi kedua apabila tidak memenuhi syarat dan gagal create:  
        `'Song already exists with ID: 3'`  

    **Keterangan** :
    - Ketika command dijalankan, akan melakukan validasi: Apabila `title`, `genre` dan `release` sudah ada di database yang isinya sama persis, maka data tersebut TIDAK boleh di insert lagi DAN mengembalikan `ID` yang sesuai. Selain itu, data boleh di insert.
    - `title` **bisa lebih** dari 1 kata.
    - Angka 7 pada contoh output adalah ID dari data yang baru saja di add, untuk mendapatkan ID ini dilarang menggunakan query lagi! Pakailah method yang disediakan `node-sqlite3`

- **Command** : `node index.js singer findBy [input_column]:[input_value]` <br>

    **Contoh Penggunaan** : `node index.js singer findBy name:michael` <br>

    **Output**:  
    ```
    [ { id: 3,
        name: 'Michael Bubble',
        origin: 'Canada',
        label: 'Reprise',
        year_of_debut: 1996,
        song_id: 1 },
      { id: 6,
        name: 'Michael Jackson',
        origin: 'Indiana',
        label: 'MJJ Productions',
        year_of_debut: 1958,
        song_id: 1 },
      { id: 7,
        name: 'George MiChAeL',
        origin: 'London',
        label: 'Sony',
        year_of_debut: 1981,
        song_id: 3 } ]
    ```

    **Contoh Penggunaan** : `node index.js singer findBy id:1` <br>

    **Output**:  
    ```
    [ { id: 1,
        name: 'Nina Simone',
        origin: 'California',
        label: 'Legacy Recordings',
        year_of_debut: 1993,
        song_id: 1 } ]
    ```

    **Keterangan** :
    - Ketika command dijalankan, akan mencari data singers yang column nya sesuai dengan `input_column` DAN value nya **MENGANDUNG** kata `input_value` DAN mengabaikan huruf besar / kecil. Misalnya : mencari data singer yang name nya mengandung kata 'michael', akan menampilkan 3 data.
    - Gunakan method yang tepat!

- **Command** : `node index.js singer last` ATAU `node index.js singer last [input_number]` <br>

    **Contoh Penggunaan**: `node index.js singer last` <br>

    **Output**:  
    ```
    { id: 7,
      name: 'George MiChAeL',
      origin: 'London',
      label: 'Sony',
      year_of_debut: 1981,
      song_id: 3 }
    ```

    **Contoh penggunaan** : node index.js singer last 3 <br>

    **Output**:  
    ```
    [ { id: 7,
        name: 'George MiChAeL',
        origin: 'London',
        label: 'Sony',
        year_of_debut: 1981,
        song_id: 3 },
      { id: 6,
        name: 'Michael Jackson',
        origin: 'Indiana',
        label: 'MJJ Productions',
        year_of_debut: 1958,
        song_id: 1 },
      { id: 5,
        name: 'Westlife',
        origin: 'Ireland',
        label: 'Sony BMG',
        year_of_debut: 1997,
        song_id: 2 } ]
    ```

    **Keterangan** :
    - ketika command dijalankan, akan menampilkan data terakhir dari singer sebanyak `input_number` sesuai urutan ID nya. Apabila `input_number` kosong maka default nya adalah 1.
