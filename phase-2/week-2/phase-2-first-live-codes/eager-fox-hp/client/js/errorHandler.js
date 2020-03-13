
function errorHandler(error, textField) {
  if (error.response) {
    let errorData = error.response.data
    let statusCode = error.response.status

    //handle error base on status code
    if (statusCode === 500) {
      textField = "Internal Server Error" 
    } else {
      if(statusCode === 401){
        signout()
      }
      app[textField] = errorData.message
    }
  }
  else if (error.request) {
    //request aman tapi tidak ada respon dari server
    console.log('No response from server')
    console.log(error.request)
    app[textField] = "No response from server"
  }
  else {
    //something error with request
    console.log('Error', error.message);
    app[textField] = "Oops, Something error!"
  }
}
