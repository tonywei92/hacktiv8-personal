<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 3

# RecipeManager
![MVC/SQLITE3/CALLBACK](https://img.shields.io/badge/Tech%20Stack-MVC%2FSQLITE3%2FCALLBACK-green.svg)

> ⏰ Time limit: **90 min**

Anda ditugaskan untuk membuat app sederhana untuk me-_manage_ resep menggunakan _command-line_.

Sederhananya app ini mengizinkan kita untuk memasukkan infomasi resep makanan beserta bahan-bahannya dan dapat melakukan CRUD data-nya ketika dibutuhkan.

App ini akan dibangun menggunakan arsitektur `MVC`, `sqlite3` dan menggunakan `callback`.

App ini juga memiliki parameter _help_ untuk menampilkan _command-command_ yang tersedia.

### Release 0

Buatlah interface pada `index.js` yg menerima _argument_ dari _command line_, beserta helpnya, berikut daftar _commands_-nya:

```
node index.js recipe:delete recipe_id
node index.js recipe:view recipe_id
node index.js recipe:update name recipe_id new_name
node index.js recipe:update origin recipe_id new_origin
node index.js recipe:all
node index.js recipe:origin origin
node index.js recipe:name name
node index.js ingredient:add recipe_id name amount
```


Jalankan __setup__ dan __seed__ untuk memulai pengoperasian _SQL_.
1. Buatlah fungsi-fungsi untuk `Update` resep:
   - Mengubah nama resep berdasarkan _id_ resep.
   - Mengubah asal berdasarkan _id_ resep.

    ```bash
    $ node index.js recipe:update name 1 "Sate Padang"
    
    SUCCESS
    =====
    Recipe with id `1`, name updated to `Sate Padang`

    $ node index.js recipe:update origin 1 Padang

    SUCCESS
    =====
    Recipe with id `1`, origin updated to `Padang`

    $ node index.js recipe:update origin 1000 Padang

    ERROR
    =====
    Recipe with id `1000` does not exist !

    $ node index.js recipe:update origin

    ERROR
    =====
    Masukkan input dengan lengkap !
    ```

### Release 1
1. Buatlah fungsi untuk `Create` bahan:
   - menambahkan bahan serta takarannya ke dalam suatu resep bersarkan `id` resep.
   ```bash
    $ node index.js ingredient:add 1 "daging" "1 kilo"
    
    SUCCESS
    =====
    Berhasil menambahkan bahan "daging" dengan amount : "1 kilo" untuk resep `Sate Padang`

    $ node index.js ingredient:add 1000 "daging" "1 kilo"
    
    ERROR
    =====
    Resep dengan id 1000 tidak ditemukan !

    $ node index.js ingredient:add 1 "daging"

    ERROR
    =====
    Masukkan input dengan lengkap !
    ```

### Release 2

1. Buatlah fungsi-fungsi untuk `Read` resep:
   - Menampilkan satu resep saja tetapi harus **beserta bahan-bahan lengkapnya**.

  ```bash
    $ node index.js recipe:read 1 
    
    SUCCESS
    =====
    
  ```

2. Buatlah fungsi untuk `Delete` resep:
   - menghapus resep sekaligus bahan-bahan yang terkait.

  ```bash
    $ node index.js recipe:delete 1 
    
    SUCCESS
    =====
    Berhasil menghapus recipe serta ingredient terkait
  ```