class InstructorView {
  static showMany(instructors) {
    for (let i = 0; i < instructors.length; i++) {
      console.log(
        `[${instructors[i].id}] ${instructors[i].name}, max: ${instructors[i].maxslots}`
      );
    }
  }

  static showOne(instructor) {}
}

module.exports = InstructorView;
