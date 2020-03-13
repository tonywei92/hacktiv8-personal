class View {
  static showInfo(data) {
    console.log(data);
  }

  static showErr(err) {
    console.log(`ERROR: ${err}`);
  }
}

module.exports = View
