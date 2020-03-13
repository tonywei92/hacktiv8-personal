

var app = new Vue({
  el: "#app",
  data: {
    isLogin: false,
    email: "",
    password: "",
    selectedStudent: null,
    students: [],
    players: [],
    errorLoginText: "",
    errorPlayers : "",
    errorStudents : ""
  },
  created(){
    if(localStorage.getItem("token")){
      getStudents()
      getPlayers()
      this.isLogin = true
    }
  },
  methods: {
    login() {
      signin()
    },
    logout(){
      signout()
    },
    setSelectedStudent(student){
      this.selectedStudent = student
    },
    addPlayer(position) {
      addPlayer(position)
    },
    removePlayer(id){
      removePlayer(id)
    }
  },
  computed: {
    goalkeeper() {
      let player = this.players.find(obj => obj.position === 'goalkeeper')
      return player
    },
    chaser() {
      return this.players.filter(obj => obj.position === "chaser")
    },
    beater() {
      return this.players.filter(obj => obj.position === "beater")
    },
    seeker() {
      let player = this.players.find(obj => obj.position === 'seeker')
      return player
    }
  }
})