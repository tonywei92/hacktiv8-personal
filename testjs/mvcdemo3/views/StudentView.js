class StudentView {
    static showMany(students) {
        for (let i = 0; i < students.length; i++) {
            console.log(`[${i}] ${students[i].name}, umur: ${students[i].age} `)
        }
    }
}

module.exports = StudentView;