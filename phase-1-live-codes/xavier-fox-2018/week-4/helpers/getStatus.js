module.exports = function (price) {
  if ( price >= 1000000 ) {
    return "lightgreen"
  } else if ( price >= 0 ) {
    return "lightyellow"
  } else {
    return "pink"
  }
}