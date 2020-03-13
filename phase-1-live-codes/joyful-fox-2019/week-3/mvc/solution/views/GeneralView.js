class GeneralView {
  static showMessage(msg) {
    console.log(msg);
  }
  static showError(err) {
    console.log("ERROR");
    console.log("-----");
    console.log(err);
  }
}

module.exports = GeneralView;
