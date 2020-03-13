class GeneralView {
  static showError(message) {
    console.log("ERROR");
    console.log("=====");
    console.log(message);
  }

  static showSuccess(message) {
    console.log("SUCCESS");
    console.log("=======");
    console.log(message);
  }
}

module.exports = GeneralView;
