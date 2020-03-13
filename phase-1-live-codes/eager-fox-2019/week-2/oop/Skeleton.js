let tasker = new System()

// ---- Release 1 ----
let antonio  = tasker.createUser('antonio', 'banderaz', 'antonio@mail.com')
// User antonio banderaz berhasil di buat
let antonio2 = tasker.createUser('antonio', 'bonito', 'antonio@mail.com')
// Email antonio@mail.com telah digunakan


// ---- Release 2 & 3 ----
tasker.createTask(antonio, 'Daily', 1, 'Absen', 'Absen Masuk', '2019-05-08')
// Task 1. Absen Berhasil dibuat
tasker.createTask(antonio, 'Onetime', 2, 'ikrar', 'Asyhadu an laa ilaaha illallāh wa asyhadu anna Muhammad Rasuulullāh.', '2019-05-08', 3)
// Task 2. Laporan SPT berhasil dibuat
// Silahkan dikerjakan dalam jangka waktu 3 hari


// ---- Release 4 ----
console.log(tasker.getTask);
/**
 { 
   Daily:
   [ Daily {
       id: 1,
       name: 'Absen',
       desc: 'Absen Masuk',
       startDate: 2019-05-08T00:00:00.000Z,
       completeDate: '',
       creator: [User] } ],
  Onetime:
   [ OneTime {
       id: 2,
       name: 'Laporan SPT',
       desc: 'Buat Laporan Pajak',
       startDate: 2019-05-08T00:00:00.000Z,
       completeDate: '',
       creator: [User],
       duration: 3 } ] 
  }
 */
console.log(tasker.getTaskById(1));
/**
  Daily {
  id: 1,
  name: 'Absen',
  desc: 'Absen Masuk',
  startDate: 2019-05-08T00:00:00.000Z,
  completeDate: '',
  creator:
   User {
     first_name: 'antonio',
     last_name: 'banderaz',
     email: 'antonio@mail.com' } 
  }
 */

tasker.setCompleteTask(1, "2019-05-20")

 // ---- Rekease 5 ----
 system.getCreatedByEmail("antonio@mail.com")
 /**
  [ Daily {
    id: 1,
    name: 'Absen',
    desc: 'Absen Masuk',
    startDate: 2019-05-08T00:00:00.000Z,
    completeDate: 2019-05-20T00:00:00.000Z,
    creator:
     User {
       first_name: 'antonio',
       last_name: 'banderaz',
       email: 'antonio@mail.com' } },
  OneTime {
    id: 2,
    name: 'Laporan SPT',
    desc: 'Buat Laporan Pajak',
    startDate: 2019-05-08T00:00:00.000Z,
    completeDate: '',
    creator:
     User {
       first_name: 'antonio',
       last_name: 'banderaz',
       email: 'antonio@mail.com' },
    duration: 3 } ]
  */
 tasker.getOutScheduleTask()
 /**
  [ Daily {
    id: 1,
    name: 'Absen',
    desc: 'Absen Masuk',
    startDate: 2019-05-08T00:00:00.000Z,
    completeDate: 2019-05-20T00:00:00.000Z,
    creator:
     User {
       first_name: 'antonio',
       last_name: 'banderaz',
       email: 'antonio@mail.com' } } ]
  */







