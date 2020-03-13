const getContractDuration = function(rating) {
  if(rating >= 5) {
    return 4
  } else if(rating >= 4) {
    return 3
  } else if (rating >= 3) {
    return 2
  } else if (rating >= 1) {
    return 1
  }
}

module.exports = {
  getContractDuration
}