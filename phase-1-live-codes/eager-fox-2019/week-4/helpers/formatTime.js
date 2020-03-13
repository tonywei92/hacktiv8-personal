module.exports = time => {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  return `${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`
}