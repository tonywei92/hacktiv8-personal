/** Insert your code here */

/** Test Case */
let octoberDiary = DiaryFactory.create('oktober')
console.log(octoberDiary)
// OUTPUT

//  DIARY {
//  month: 'oktober',
//  totalDays: 31
//  diaries: [ ]
// }
//

octoberDiary.write(1, 'belajar sudoku')
// Berhasil menulis diary di hari 1

octoberDiary.write(1, 'belajar boogle')
// Berhasil menulis diary di hari 1

octoberDiary.write(2, 'belajar mango tree')
// Berhasil menulis diary di hari 2

octoberDiary.write(32, 'belajar sudoku')
// Hari yang dimasukkan tidak ada pada bulan october

console.log(octoberDiary.diaries)
/*
 * [ Note { note: 'belajar sudoku', day: 1}, Note { note: 'belajar boogle', day: 1}, Note { note: 'belajar mango tree', day: 2}]
 */

const firstNote = octoberDiary.diaries[0]

console.log(firstNote.report) // 'Dear diary hari ini aku belajar sudoku'

const secondNote = octoberDiary.diaries[1]

console.log(secondNote.report) // 'Dear diary hari ini aku belajar boogle'

const report = octoberDiary.report(1)

console.log(report)

/**
 * Day 1
 * Dear diary hari ini aku belajar sudoku
 * Dear diary hari ini aku belajar boogle
 *
 */

const report2 = octoberDiary.report(2)

console.log(report2)

/**
 * Day 2
 * Dear diary hari ini aku belajar mango tree
 *
 */

const report3 = octoberDiary.report(3)

console.log(report3)
//	Tidak ada note di hari ini

const report4 = octoberDiary.report(32)

console.log(report4)
// Hari yang dimasukkan tidak ada pada bulan october
