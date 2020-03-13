module.exports = function(district) {
  if (district) {
    return `District: ${district.districtName}`
  } else {
    return "Unassigned"
  }
}