const sequelize = require('sequelize')
const Op = sequelize.Op

exports.searchFormat = (option, searchInput) => {
  let opt = {}

  switch (option) {
    case "title":
      opt = {
        [Op.iLike]: `%${searchInput}%`
      }
      break;
    case "rating":
      opt = Number(searchInput)
      break
    case "createdAt":
      opt = {
        [Op.gt]: new Date(new Date(searchInput) - 24 * 60 * 60 * 1000)
      }
      break
  }
  return opt
}