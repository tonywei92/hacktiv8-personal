class View {
  
  static displaySuccess(msg) {
    console.log(msg)
  }

  static displayError(msg) {
    console.log("Oops something wrong")
    console.log(msg)
  }
}

module.exports = View