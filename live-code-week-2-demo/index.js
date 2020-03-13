class Person {
    static all() {

    }
    static findAll(objParam) {

    }
    static update(objParam) {

    }

    static delete(objParam) {

    }

}


class Controller {
    static login(username, password) {
        Person.findOne(username, function (err, person) {
            if (err) {
                console.log(err)
            }
            else {
                if (!person) {
                    console.log('user tidak ditemukan')
                }
                else {
                    if (person.password !== password) {
                        console.log('password salah')
                    }
                    else {
                        Person.update({
                            where
                        })
                    }
                }
            }
        })
    }
}


/*
    LECTURE EXPRESS + EJS

    bagi jadi 3 SESI
    ================

    SESI 1:
    ceritakan filosofi server-client, ada REQuest pasti ada RESpond, tidak mungkin ada respond bila tidak ada request.

    perkenalkan apa itu express, install express, contohkan router biasa, bilang ke murid kita hanya mengajarkan 'GET dan POST'

    tunjukkan kelemahannya bila development hanya menggunakan node biasa, kemudian perkenalkan nodemon (install global)

    tunjukkan router dengan param, tunjukkan bisa pakai regex dan parameter lain dengan '?' dari dokumentasi (tapi jangan dicontohin)

    contohkan prioritas router, dan akibatnya bila dibalik
        get(/username/create)
        get(/username/:id)

    router dengan query
        contohkan dengan search query tokopedia
        contohkan kegunaannya

    ~ akhir dari SESI 1, minta murid2 cuci muka

    SESI 2
    contohin res.send html
        copy markup html langsung ke res.send-nya, file jsnya jadi besar, bilang ini biasanya anak2 pas live-code pasti stress karena satu file jadi berantakan karena HTMLnya (ditakut2in)

    lalu promosikan EJS
        install ejs, bilang bahwa ini solusi buat masalah diatas. lalu coba2 rendering dengan perintah javascript dalam EJS <% let nama = "nadia" %> <%= nama%>
        lalu coba test looping dengan array yang di lempar dari router ke EJSnya, di html pake <ul><li>

    buat form EJS, method harus POST dan tunjukkan bedanya bila "ACTION" di form dikosongin dan diisi.
        bilang karena formnya method POST, maka di expressnya harus tambahkan router post juga, buat console.log('ini dari post') di router POSTnya, agar dapat membedakan requestnya masuk ke GET atau POST

    kemudian test submit, nah pasti tampilan kosong, karena formnya mengirim data ke POST dalam jenis x-www-form-urlencoded, dan express tidak paham dengan tipe data ini, jadi kita harus masukkan
    tambahan script agar express bisa membaca data POST dari form (jangan terlalu detail menjelaskan bagian ini).
        app.use(express.urlencoded({ extended: true }))

    ~ akhir dari SESI 2, minta murid2 cuci muka

    SESI 3
    bila sudah berhasil, coba bikin CREATE dan DELETE ke array kosong yang di hardcode di JS, ingatkan kalo server restart (karena nodemon) maka arraynya kembali lagi menjadi array kosong.
    contohnya:
        - tampilkan list students: get(/students)
        - tampilkan form tambah students: get(/students/add)
            untuk menuju ke form pakai ANCHOR tag
        - router submit student: post(/students/add)
        - router delete 1 student get(/students/delete/:id)
            untuk menuju ke router delete pakai ANCHOR tag yang idnya dinamis
    note: pakai res.redirect untuk kembali ke url list students

*/

