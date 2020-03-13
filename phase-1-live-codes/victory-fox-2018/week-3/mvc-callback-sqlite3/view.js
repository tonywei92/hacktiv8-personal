class View {
  static showInfo(data) {
    console.log(data);
  }

  static showError(err) {
    console.log("ERROR");
    console.log("======");
    console.log(err);
  }
}

module.exports = View
