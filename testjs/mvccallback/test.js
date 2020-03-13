const students = [
  {
    name: "danang",
    umur: 21
  },
  {
    name: "edison",
    umur: 20
  },
  { name: "ilham", umur: 35 },
  { name: "faisal", umur: 40 }
];

function filter(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const filteredStudents = filter(students, function(student) {
  return student.umur > 30;
});
console.log(filteredStudents);
