exports.dayConverter = (time) => {
  let dictMonths = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MEI',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]
  return `${time.getDate()} - ${dictMonths[time.getMonth()]} - ${time.getFullYear()}`
}

exports.durationConverter = (duration) => {
  let minutes = duration % 60
  let hours = Math.floor(duration / 60)
  return `${hours}h ${minutes}min`
}