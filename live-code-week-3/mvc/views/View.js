class View {
  static showError(err) {
    console.log("ERROR\n================")
    console.log(err)
  }

  static showMessage(msg) {
    console.log(msg)
  }

  static showOrder(data) {
    console.table(data)
  }
}

module.exports = View