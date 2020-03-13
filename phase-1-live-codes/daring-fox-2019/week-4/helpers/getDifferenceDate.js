module.exports = (date) => {
  const today = new Date().getDate()
  return `${today - date.getDate()} days ago`
}