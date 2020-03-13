exports.changeDateFormat = (format) => {
  format = new Date(format)
  const date = format.getDate()
  const month = format.getMonth()
  const year = format.getFullYear()
  switch (month+1) {
    case 1 : return date + ' Januari ' + year
    case 2 : return date + ' Februari ' + year
    case 3 : return date + ' Maret ' + year
    case 4 : return date + ' April ' + year
    case 5 : return date + ' Mei ' + year
    case 6 : return date + ' Juni ' + year
    case 7 : return date + ' Juli ' + year
    case 8 : return date + ' Agustus ' + year
    case 9 : return date + ' September ' + year
    case 10 : return date + ' Oktober ' + year
    case 11 : return date + ' November ' + year
    case 12 : return date + ' Desember ' + year
  }
  console.log(date, month, year)
}