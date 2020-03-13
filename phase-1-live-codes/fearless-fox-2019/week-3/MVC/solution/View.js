class View{
  static success(msg){
    console.log(msg)
  }

  static error(msg){
    console.log(`warning: ${msg}`)
  }
}
module.exports = View