module.exports = (baseUrl, field, order) => {
  let orderBy = order || "DESC"
  if (orderBy === "DESC") {
    orderBy = "ASC"
  } else {
    orderBy = "DESC"
  }
  return `${baseUrl}?field=${field}&order=${orderBy}`
}