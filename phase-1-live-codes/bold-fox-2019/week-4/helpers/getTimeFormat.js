module.exports = (date) => {
  const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  return `${days[date.getDay() - 1]} ` + date.toISOString().slice(0, 10)
  // return days[date.getDay()] + ` ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}