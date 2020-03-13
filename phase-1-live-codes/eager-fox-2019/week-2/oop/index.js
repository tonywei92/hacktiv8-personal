class Task {
	constructor(id, name, desc, startDate, creator) {
		this.id = id
		this.name = name
		this.desc = desc
		this.startDate = new Date(startDate)
		this.completeDate = ""
		this.creator = creator
	}

	afterCreate() {
		console.log(`Task ${this.id}. ${this.name} berhasil dibuat`)
	}
}

class OneTime extends Task {
	constructor(id, name, desc, startDate, creator, duration) {
		super(id, name, desc, startDate, creator)
		this.duration = duration
		this.afterCreate()
	}

	afterCreate() {
		super.afterCreate()
		console.log(`Silahkan dikerjakan dalam jangka waktu ${this.duration} hari`)
	}
}

class Periodic extends Task {
	constructor(id, name, desc, startDate, creator, duration) {
		super(id, name, desc, startDate, creator)
		this.duration = duration
		this.afterCreate()
	}

	afterCreate() {
		super.afterCreate()
		console.log(`Silahkan dikerjakan dalam jangka waktu ${this.duration} hari`)
	}
}

class Daily extends Task {
	constructor(id, name, desc, startDate, creator) {
		super(id, name, desc, startDate, creator)
		this.afterCreate()
	}
}

class User {
	constructor(firstName, lastName, email) {
		this.first_name = firstName
		this.last_name = lastName
		this.email = email
	}

	get fullName() {
		return `${this.first_name} ${this.last_name}`
	}
}

class System {
	constructor() {
		this._tasks = {}
		this._users = []
	}

	get users() {
		return this._users
	}

	get tasks() {
		return this._tasks
	}

	createUser(fn, ln, email) {
		let found = this.users.find((user) => user.email === email)
		if (found) {
			console.log(`Email ${email} telah digunakan`)
			return null
		} else {
			let newUser = new User(fn, ln, email)
			this._users.push(newUser)
			console.log(`User ${newUser.fullName} berhasil di buat`)
			return newUser
		}
	}

	createTask(objUser, type, id, name, desc, startDate, duration) {
		let newTask = null
		if(type === "Daily") {
			newTask = new Daily(id, name, desc, startDate, objUser)
		} else if(type === "Onetime") {
			newTask = new OneTime(id, name, desc, startDate, objUser, duration)
		} else if(type === "Periodic") {
			newTask = new Periodic(id, name, desc, startDate, objUser, duration)
		}
		if(!this.tasks[type]) {
			this.tasks[type] = []
		}
		this.tasks[type].push(newTask)
	}

	getTaskById(id) {
		let listTasks = Object.values(this.tasks)
		for(let i = 0; i < listTasks.length; i++) {
			for(let j = 0; j < listTasks[i].length; j++) {
				if(listTasks[i][j].id === id) {
					return listTasks[i][j]
				}
			}
		}
		return null
		// let found = this._tasks.find((task) => task.id === id)
		// return found
	}

	setCompleteTask(id, date) {
		let task = this.getTaskById(id)
		if(task) {
			task.completeDate = new Date(date)
		}
	}

	getCreatedByEmail(email) {
		let listTasks = Object.values(this.tasks)
		let filteredTasks = []
		for(let i = 0; i < listTasks.length; i++) {
			for(let j = 0; j < listTasks[i].length; j++) {
				if(listTasks[i][j].creator.email === email) {
					filteredTasks.push(listTasks[i][j])
				}
			}
		}
		console.log(filteredTasks)
		return filteredTasks
	}

	getOutScheduleTask() {
		// const tasks = this._tasks.filter((task) => {
		// 	if(task.type === )
		// })
		// console.log(tasks)
		let listTasks = Object.values(this.tasks)
		let keys = Object.keys(this.tasks)
		let filterTasks = []
		for(let i = 0; i < listTasks.length; i++) {
			for(let j = 0; j < listTasks[i].length; j++) {
				let duration = null
				if(keys[i] === "Daily") {
					duration = 0
				} else {
					duration = listTasks[i][j].duration
				}
				duration = new Date(listTasks[i][j].startDate.getTime()+((duration)*24*60*60*1000))
				if(listTasks[i][j].completeDate !== "") {
					let diffDate = listTasks[i][j].completeDate.getDate() - duration.getDate()
					if (diffDate > 0) {
						filterTasks.push(listTasks[i][j])
					}
				}
				// if(listTasks[i][j].creator.email === email) {
				// 	console.log(listTasks[i][j])
				// 	return listTasks[i][j]
				// }
			}
		}
		console.log(filterTasks)
	}
}
let tasker = new System()
// ---- Release 1 ----
let antonio  = tasker.createUser('antonio', 'banderaz', 'antonio@mail.com')
// User antonio banderaz berhasil di buat
let antonio2 = tasker.createUser('antonio', 'bonito', 'antonio@mail.com')
// Email antonio@mail.com telah digunakan


// ---- Release 2 & 3 ----
tasker.createTask(antonio, 'Daily', 1, 'Absen', 'Absen Masuk', '2019-05-08')
// Task '1. Absen' Berhasil dibuat
tasker.createTask(antonio, 'Onetime', 2, 'Laporan SPT', 'Buat Laporan Pajak', '2019-05-08', 3)
// Task '2. ikrar' Berhasil dibuat
// Silahkan dikerjakan dalam jangka waktu 3 hari


// ---- Release 4 ----
console.log(tasker.tasks);
/**
 {
   "Daily": Daily {
      "id": 1,
      "name": "Absen",
      "desc": "Absen Masuk",
      "startDate": "2019-05-08",
      "completeDate": "",
      "creator": User {
        first_name: "antonio"
        last_name: "banderaz"
        email: "antonio@mail.com" 
      }
    },
   "Onetime": Onetime {
      "id": 2,
      "name": "ikrar",
      "desc": "Asyhadu an laa ilaaha illallāh wa asyhadu anna Muhammad Rasuulullāh",
      "startDate": "2019-05-08",
      "completeDate": "",
      "creator": User {
        first_name: "antonio"
        last_name: "banderaz"
        email: "antonio@mail.com" 
      }
      "duration": 3
    }
   }
 }
 */
console.log(tasker.getTaskById(1));
/**
  Daily {
    "id": 1,
    "name": "Absen",
    "desc": "Absen Masuk",
    "startDate": "2019-05-08",
    "completeDate": "",
    "creator": User {
      first_name: "antonio"
      last_name: "banderaz"
      email: "antonio@mail.com" 
    }
  }
 */

tasker.setCompleteTask(1, "2019-05-20")

 // ---- Rekease 5 ----
 tasker.getCreatedByEmail("antonio@mail.com")
 /**
  [
    Daily {
      "id": 1,
      "name": "Absen",
      "desc": "Absen Masuk",
      "startDate": "2019-05-08",
      "completeDate": "",
      "creator": User {
        first_name: "antonio"
        last_name: "banderaz"
        email: "antonio@mail.com" 
      }
    },
    Onetime {
      "id": 2,
      "name": "ikrar",
      "desc": "Asyhadu an laa ilaaha illallāh wa asyhadu anna Muhammad Rasuulullāh",
      "startDate": "2019-05-08",
      "completeDate": "2019-05-20",
      "creator": User {
        first_name: "antonio"
        last_name: "banderaz"
        email: "antonio@mail.com" 
      }
      "duration": 3
    }
  ]
  */
 tasker.getOutScheduleTask()
 /**
  Onetime {
    "id": 2,
    "name": "ikrar",
    "desc": "Asyhadu an laa ilaaha illallāh wa asyhadu anna Muhammad Rasuulullāh",
    "startDate": "2019-05-08",
    "completeDate": "2019-05-20",
    "creator": User {
      first_name: "antonio"
      last_name: "banderaz"
      email: "antonio@mail.com" 
    }
    "duration": 3
  }
  */







