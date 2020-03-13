const getQuery = (query, searchBy) => {
  const defaultQuery = `/factories?searchBy=${searchBy}&orderBy=ASC`
  if ( query === null ) {
    return defaultQuery
  } else {
    const getOrder =  query.split("=")[2]
    const getSearch = query.split("=")[1].split("&")[0]
    let option = ""
    if ( searchBy !== getSearch ) {
      return defaultQuery
    }
    if ( getOrder === "ASC" ) {
      option = "DESC"
    } else {
      option = "ASC"
    }
    return '/factories?searchBy='+ searchBy + '&orderBy=' + option 
  }
}

module.exports = getQuery