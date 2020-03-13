module.exports = {
  dispError: (msg) => {
    console.log("error")
    console.log(msg)
  },
  dispSuccess: (msg) => {
    console.log("success")
    console.log(msg)
  },
  dispNotFound: (msg) => {
    console.log("not found")
    console.log(msg)
  },
  dispList: (data) => {
    console.log("LIST SCHOOLS")
    console.log("====================================")
    for(const school in data) {
      console.log(`${school} Student List:`)
      if (data[school].length === 0) {
        console.log(`Oops, ${school} doesn't have students yet`)
      } else {
        data[school].forEach((student, idx) => {
          if (student) {
            console.log(`${idx + 1}. ${student.studentName}: ${student.stage} stage`)
          }
        })
      }
      console.log("====================================")
    }
  }
}