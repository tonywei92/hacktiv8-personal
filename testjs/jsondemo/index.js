const fs = require('fs');

const students = fs.readFileSync('./students.json', 'utf8');
const objStudents = JSON.parse(students);

objStudents.push({
    name: "jansen",
    umur: 45
})

fs.writeFileSync('./students.json', JSON.stringify(objStudents, null, 2));