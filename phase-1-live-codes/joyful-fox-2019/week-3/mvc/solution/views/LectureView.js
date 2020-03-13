class LectureView {
  static showMany(instructor, lectures) {
    console.log(
      `Instructor: ${instructor.name}, slots: ${lectures.length}/${instructor.maxslots}`
    );
    if (lectures.length === 0) {
      console.log("no lectures yet");
    } else {
      for (let i = 0; i < lectures.length; i++) {
        console.log(
          `[${lectures[i].done ? "√" : " "}] id: ${lectures[i].id}, title: ${
            lectures[i].title
          }, created at: ${lectures[i].created_at}`
        );
      }
    }
  }
}

module.exports = LectureView;
