module.exports = (value) => {
  if (value > 200) {
    return "#d9534f"
  } else if (value > 100) {
    return "#ffbb33"
  } else {
    return "#00C851"
  }
}