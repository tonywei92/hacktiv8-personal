module.exports = (status) => {
  if (status === "pending") {
    return "#fff9c4"
  } else if (status === "rejected") {
    return "#ef9a9a"
  } else if (status === "accepted") {
    return "#c8e6c9"
  }
}