    /*
    =======================
    Bank Fraud Notification
    =======================

    [INSTRUCTION]
    Sebuah Bank memiliki sebuah aturan yang mengharuskan sistem untuk memberikan
    pemberitahuan ke klien-kliennya terhadap kemungkinan pencurian. Jika penggunaan
    uang pada suatu hari pengeluaran sama dengan atau lebih dari 2x dari
    Median pengeluaran pada hari-hari sebelumnya maka Bank akan mengirimkan
    notifikasi tentang potensial pencurian ke para klien. Bank tidak akan mengecek
    kemungkinan pencurian sampai terdapat pengeluaran berhari-hari.

    Diberikan jumlah rentang hari d, dan total pengeluaran-pengeluaran
    (expenditures) harian dalam array.

    contohnya, apabila diberikan d = 3 dan expenditures = [10, 20, 30, 40, 50].
    pada hari ke 4, kita memiliki 3 (d) hari sebelumnya yaitu [10, 20, 30] dan
    mediannya adalah 20, pada hari pengeluaran ke 4 adalah 40, karena 40 >= 20x2,
    maka bank akan mengirimkan notifikasi.

    Pada hari berikutnya, yaitu hari ke 5, kita memiliki 3 (d) hari sebelumnya yaitu
    [20, 30, 40] mediannya adalah 30, dan hari ke 5 pengeluarannya adalah 50, karena
    50 kurang dari 2x30, maka bank tidak mengirimkan notifikasi.

    Sampai pengeluaran hari terakhir jumlah notifikasi yang dikirim oleh bank adalah
    1 notifikasi.

    [EXAMPLE]
    Bila input array adalah [2, 3, 4, 2, 3, 6, 8, 4, 5] dan rentang hari adalah 5
    maka hasilnya adalah 2.
    */

    function activityNotifications(expenditure, d) {
        
    }

    //TEST CASES
    console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)) // 2
    console.log(activityNotifications([1, 2, 3, 4, 4], 4)) // 0
    console.log(activityNotifications([10, 20, 30, 40, 50], 3)) // 1