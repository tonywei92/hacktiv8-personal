const fs = require('fs');

function test() {
    let data1 = ''
    fs.readFile('./students.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            data1 = data;
            const students = JSON.parse(data);
            students.push({
                name: "patra",
                age: 30
            })
            save(students, function (err, message) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('sukses')
                    students.push({
                        name: "Edi",
                        umur: 70
                    })
                    save(students, function (err) {
                        if (err) {
                            console.log(err, message)
                        }
                        else {
                            console.log('sukses 2', message)
                        }
                    })
                }
            })
        }
    })

}

function save(data, callback) {
    fs.writeFile(
        './students.json',

        JSON.stringify(data, null, 2),

        function (err) {
            if (err) {
                callback(err, 'gagal')
            }
            else {
                callback(null, 'sukses')
            }
        }
    )
}

test();




function beli(uang, barang, callback) {
    //code dsini
}

function setelahBeli(kembalian, callback) {

}

beli(5000, 'tas', function (kembalian) {
    beli(kembalian, 'kue', function (kembalian) {

    })
})