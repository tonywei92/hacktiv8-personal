class Diary {
  constructor(name, totalDays) {
    this.name = name
    this.totalDays = totalDays
    this.diaries = []
  }

  write(day, note) {
    if (day > this.totalDays) {
      console.log(`Hari yang dimasukkan tidak ada pada bulan ${this.name}`)
      return
    }
    let noteInstance = new Note(note, day)

    this.diaries.push(noteInstance)

    console.log(`Berhasil menulis diary di hari ${day}`)
  }

  report(day) {
    const noteInSelectedDay = this.diaries
      .filter(diary => diary.day === day)
      .map(diary => diary.report)
      .join('\n')
    if (day > this.totalDays) {
      return `Hari yang dimasukkan tidak ada pada bulan ${this.name}`
    }

    if (!noteInSelectedDay) {
      return `Tidak ada note di hari ini`
    }

    return `Day ${day} \n${noteInSelectedDay}`
  }
}

class Note {
  constructor(note, day) {
    this.note = note
    this.day = day
  }

  get report() {
    return `Dear diary hari ini aku ${this.note}`
  }
}

class DiaryFactory {
  static create(month) {
    let monthDictionary = {
      january: 31,
      februari: 28,
      maret: 31,
      april: 30,
      mei: 31,
      juni: 30,
      juli: 31,
      agustus: 31,
      september: 30,
      october: 31,
      november: 30,
      december: 31
    }
    const totalDays = monthDictionary[month]

    return new Diary(month, totalDays)
  }
}

let octoberDiary = DiaryFactory.create('october')
console.log(octoberDiary)

octoberDiary.write(1, 'belajar sudoku')
// Berhasil menulis diary di hari 1

octoberDiary.write(1, 'belajar boogle')
// Berhasil menulis diary di hari 1

octoberDiary.write(2, 'belajar mango tree')
// Berhasil menulis diary di hari 2

octoberDiary.write(32, 'belajar sudoku')
// Hari yang dimasukkan tidak ada pada bulan october

console.log(octoberDiary.diaries)

const firstNote = octoberDiary.diaries[0]

console.log(firstNote.report) // 'Dear diary hari ini aku belajar sudoku'

const secondNote = octoberDiary.diaries[1]

console.log(secondNote.report) // 'Dear diary hari ini aku belajar boogle'

const report = octoberDiary.report(1)

console.log(report)
//	'Day 1' => 'Dear diary hari ini aku belajar sudoku, Dear diary hari ini aku belajar boogle,'
/**
 * Day 1
 * Dear diary hari ini aku belajar sudoku
 * Dear diary hari ini aku belajar boogle
 *
 *
 */
//	'Day 1' => 'Dear diary hari ini aku belajar sudoku, Dear diary hari ini aku belajar boogle,'

const report2 = octoberDiary.report(2)

console.log(report2)
//	'Day 2' => 'Dear diary hari ini aku belajar mango tree'

const report3 = octoberDiary.report(3)

console.log(report3)
//	Tidak ada note di hari ini

const report4 = octoberDiary.report(32)

console.log(report4)
// Hari yang dimasukkan tidak ada pada bulan october
