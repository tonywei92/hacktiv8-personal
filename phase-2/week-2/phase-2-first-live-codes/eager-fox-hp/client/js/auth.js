function signin(){
  axios({
    method: 'post',
    url: "http://localhost:3000/login",
    data: {
      email : app.email,
      password : app.password
    }
  })
  .then(({ data }) => {
    localStorage.setItem("token", data.token)
    if(app.students.length === 0){
      getStudents();
    }
    if(app.players.length === 0){
      getPlayers();
    }
    app.isLogin = true
    app.errorLoginText = ""
  })
  .catch(error => {
    errorHandler(error, "errorLoginText")
  })
}

function signout(){
    app.isLogin = false
    app.errorLoginText = ""
    app.errorStudents = ""
    app.errorPlayers = ""
    app.players = []
    app.students = []
    localStorage.removeItem("token")
}
