function test(objParam) {
    let nama = objParam.nama;
    let umur = objParam.umur;
    let alamat = objParam.alamat;
    let hobby = objParam.hobby;
    if (umur) {
        console.log(`nama saya ${nama}, umur saya ${umur}, alamat saya di ${alamat}`)
    }
    else {
        console.log(`nama saya ${nama}, alamat saya di ${alamat}`)
    }
}

test({
    nama: 'abdullah',
    alamat: 'kebayoran',
    hobby: ['makan', 'tidur']
})