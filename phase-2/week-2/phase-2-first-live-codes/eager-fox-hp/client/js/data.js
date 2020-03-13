function getStudents(){
    axios({
       method:'get',
       url: "https://www.potterapi.com/v1/characters?key=$2a$10$MkeSPtKOmD2eEonLKhU6z.v.3cGnlUs7EsfkQ6oYoZuOia1y4fR.q&role=student",
    })
    .then(({data})=>{
       app.students = data
       app.errorStudents = ""
    })
    .catch(error=>{
        errorHandler(error, "errorStudents")
    })
}

function getPlayers(){
    axios({
       method:'get',
       url: "http://localhost:3000/players",
       headers: {
           authorization : localStorage.getItem("token")
       }
    })
    .then(({data})=>{
       app.players = data
       app.errorPlayers = ""
    })
    .catch(error=>{
        errorHandler(error, "errorPlayers")
    })
}

function addPlayer(position){
    if(app.selectedStudent === null){
        app.errorPlayers = "Please select a student"
        return
    }

    axios({
       method:'post',
       url: "http://localhost:3000/players",
       data : {
        name: app.selectedStudent.name,
        house : app.selectedStudent.house,
        position
       },
       headers: {
           authorization : localStorage.token
       }
    })
    .then(({data})=>{
        app.players.push(data)
        app.errorPlayers = ""
    })
    .catch(error=>{
        errorHandler(error, "errorPlayers")
    })
    .finally(function(){
        app.selectedStudent = null
    })
}

function removePlayer(id){
    axios({
       method:'delete',
       url: `http://localhost:3000/players/${id}`,
       headers: {
        authorization : localStorage.token
       }
    })
    .then(({data})=>{
        app.players = app.players.filter(obj => obj._id !== data._id)
    })
    .catch(error=>{
        errorHandler(error, "errorPlayers")
    })
}