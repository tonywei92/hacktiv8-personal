class GeneralView {
  static showMessage(msg) {
    console.log(msg);
  }

  static showError(msg) {
    console.log("ERROR");
    console.log("-----");
    console.log(msg);
  }

  static showSuccess(msg) {
    console.log("SUCCESS");
    console.log("-------");
    console.log(msg);
  }
}
