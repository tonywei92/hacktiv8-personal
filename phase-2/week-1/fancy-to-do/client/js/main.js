let left = 0
const baseUrl = 'http://localhost:3000'
let projectIdLive = null

function setting(params) {
  $('#div').removeProp('left')
}

$(document).ready(function() {
  if (!localStorage.token) {
    showLoginPage()
    getHolidayDate()
  } else {
    showPrivateTodo()
    getHolidayDate()
  }
  $('#button').click(function() {
    showHideLogin()
  })

  // $('body').click(function(e) {
  //   if ($(e.target).prop('id') == 'menu' || $(e.target).hasClass('sidebar'))
  //     return false
  //   $('.sidebar').sidebar('toggle')
  // })

  $('#register').click(function(e) {
    e.preventDefault()
    let name = $('#registerName').val()
    let email = $('#registerEmail').val()
    let password = $('#registerPassword').val()
    register(name, email, password)
  })

  $('#login').click(function(e) {
    e.preventDefault()
    // localStorage.setItem('token', )
    let email = $('#loginEmail').val()
    let password = $('#loginPassword').val()
    login(email, password)
  })

  $('#addPrivateTodo').click(function(e) {
    e.preventDefault()
    let title = $('#titleAddTodo').val()
    let description = $('#descriptionAddTodo').val()
    let due_date = $('#dateAddTodo').val()
    addPrivateTodo(title, description, due_date)
  })

  $('#addProject').click(function(e) {
    e.preventDefault()
    let name = $('#titleAddProject').val()
    addProject(name)
  })

  $('#addProjectTodo').click(function(e) {
    e.preventDefault()
    let title = $('#titleProjectTodo').val()
    let description = $('#descriptionProjectTodo').val()
    let due_date = $('#dateProjectTodo').val()
    addProjectTodo(title, description, due_date)
  })

  $('#searchUser').click(function(e) {
    e.preventDefault()
    let email = $('#inputUserSearch').val()
    searchOne(email)
  })

  $('#addHolidayPlan').click(function(e) {
    e.preventDefault()
    let title = $('#titleHolidayTodo').val()
    let description = $('#descriptionHolidayTodo').val()
    let due_date = $('#dateHolidayTodo').val()
    addHolidaysPlan(title, description, due_date)
  })
})

// function sidebar() {
//   $('#sidebar').sidebar('toggle')
// }

function register(name, email, password) {
  $.ajax(`${baseUrl}/users`, {
    type: 'post',
    data: {
      name,
      email,
      password
    },
    success: function(data) {
      console.log('ini sukses')
      console.log(data)
      showHideLogin()
    },
    error: function(err) {
      console.log('ini error')
      console.log(err)
    }
  })
}

function addPrivateTodo(title, description, due_date) {
  $.ajax(`${baseUrl}/todos`, {
    type: 'post',
    data: {
      title,
      description,
      due_date
    },
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      $('#emptyPrivateTodo').hide()
      console.log('ini sukses')
      console.log(data)
      $('#privateTodoList').append(`
          <div id="${data.id}" class="col-3 ui card mx-3 animated flipInY delay">
            <div class="content">
                <span class="tandaSelesai"></span>
                <!-- <i class="right floated star icon"></i> -->
                <div class="header">${data.title}</div>
                <div class="description">
                    <p>${data.description}</p>
                </div>
                <div class="right floated author">
                    <img class="ui avatar image"
                        src="https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png">
                    Matt
                </div>
            </div>
            <div class="extra content">
                <span onclick="deletePrivateTodo('${data.id}')" class="left floated star cursorNya">
                    <i class="red trash alternate icon"></i>
                    Delete
                </span>
                <span onclick="privateTodoDone('${data.id}')" class="right floated like cursorNya">
                    <i class="green check icon"></i>
                    Done
                </span>
            </div>
          </div>
          `)
    },
    error: function(err) {
      console.log('ini error')
      console.log(err)
    }
  })
}

function findPrivateTodo() {
  $.ajax(`${baseUrl}/todos`, {
    type: 'get',
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      console.log('ini dari find user todo')
      // console.log(data)
      $('#privateTodoList').empty()
      // let $newPrivateTodo = $(todoTemplate)
      if (data.length == 0) {
        $('#privateTodoList').append(`
        <div id="emptyPrivateTodo" class="col-6 ui card mx-3 animated flipInY delay-1s">
          <div class="content">
              <!-- <i class="right floated star icon"></i> -->
              <div class="header">You Still not have any todo</div>
              <div class="description">
                  <p>Add yours :)</p>
              </div>
          </div>
        </div>
        `)
      } else {
        data.forEach(element => {
          $('#privateTodoList').append(`
          <div id="${element.id}" class="col-3 ui card mx-3 animated flipInY delay-1s">
            <div class="content">
                <span class="tandaSelesai"></span>
                <!-- <i class="right floated star icon"></i> -->
                <div class="header">${element.title}</div>
                <div class="description">
                    <p>${element.description}</p>
                </div>
                <div class="right floated author">
                    <img class="ui avatar image"
                        src="${element.user.imageUrl}">
                    ${element.user.name}
                </div>
            </div>
            <div class="extra content">
                <span onclick="deletePrivateTodo('${element.id}')" class="left floated star cursorNya">
                    <i class="red trash alternate icon"></i>
                    Delete
                </span>
                <span onclick="privateTodoDone('${element.id}')" class="right floated like cursorNya">
                    <i class="green check icon"></i>
                    Done
                </span>
            </div>
          </div>
          `)

          if (element.status === 'done') {
            $(`#${element.id} .tandaSelesai`).prepend(`
              <i class="bounceIn right floated check icon"></i>
              `)
            $(`#${element.id}`).css({ 'background-color': 'grey' })
          }
        })
      }
    },
    error: function(err) {
      console.log('ini error user todo')
      console.log(err)
    }
  })
}

function deletePrivateTodo(todoId) {
  console.log(todoId)

  $.ajax(`${baseUrl}/todos/${todoId}`, {
    type: 'delete',
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      console.log('ini sukses')
      console.log(data)
      findPrivateTodo()
    },
    error: function(err) {
      console.log('ini error')
      console.log(err)
    }
  })
}

function login(email, password) {
  $.ajax(`${baseUrl}/users/login`, {
    type: 'post',
    data: {
      email,
      password
    },
    success: function(data) {
      setTimeout(function() {
        findPrivateTodo()
        showPrivateTodo()
      }, 1000)
      console.log('ini sukses')
      console.log(data)
      localStorage.setItem('token', data.token)
    },
    error: function(err) {
      console.log('ini error')
      console.log(err)
    }
  })
}

function showHideLogin() {
  if (left == 1) {
    left = 0
    setting()
    $('#div').animate({ right: 0, left: '50%' }, 2500)
  } else {
    left = 1
    $('#div').animate({ left: '16.7%', right: 0 }, 2500)
  }
}

function showPrivateTodo() {
  findPrivateTodo()
  $('#registerLoginPage').hide()
  $('#privateTodo').show()
  $('#projectTodo').hide()
  $('#holidayTodo').hide()
  $('#project').hide()
}

function showLoginPage() {
  $('#registerLoginPage').show()
  $('#privateTodo').hide()
  $('#projectTodo').hide()
  $('#holidayTodo').hide()
  $('#project').hide()
}

function privateTodoDone(todoId) {
  $.ajax(`${baseUrl}/todos/${todoId}/findone`, {
    type: 'get',
    headers: {
      token: localStorage.getItem('token')
    }
  })
    .then(result => {
      if (result.status === 'done') {
        $(`#${todoId} .tandaSelesai`).empty()
        $(`#${todoId}`).css({ 'background-color': 'white' })
        return $.ajax(`${baseUrl}/todos/${todoId}/updatestatus`, {
          type: 'patch',
          data: {
            status: 'start'
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
      } else {
        setTimeout(function() {
          $(`#${todoId} .tandaSelesai`).prepend(`
            <i class="bounceIn right floated check icon" style="animation-duration: 10s;"></i>
            `)
        }, 500)
        $(`#${todoId}`).css({ 'background-color': 'grey' }, 5000)
        return $.ajax(`${baseUrl}/todos/${todoId}/updatestatus`, {
          type: 'patch',
          data: {
            status: 'done'
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
      }
    })
    .then(result => {
      console.log(result)
    })
    .catch(err => {})
}

// function hideSideBar() {
//   $('.modal-backdrop .fade .show').remove()
// }

function findAllProject() {
  $('#registerLoginPage').hide()
  $('#privateTodo').hide()
  $('#project').show()
  $('#projectTodo').hide()

  $.ajax(`${baseUrl}/projects`, {
    type: 'get',
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      console.log('ini dari find user todo')
      // console.log(data)
      $('#projectList').empty()
      // let $newPrivateTodo = $(todoTemplate)
      if (data.length === 0) {
        $('#projectList').append(`
        <div id="emptyPrivateTodo" class="col-6 ui card mx-3 animated flipInY delay-1s">
          <div class="content">
              <!-- <i class="right floated star icon"></i> -->
              <div class="header">You Still not have any project</div>
              <div class="description">
                  <p>Add yours :)</p>
              </div>
          </div>
        </div>
        `)
      } else {
        data.forEach(element => {
          // console.log(element)
          $('#projectList').append(`
          <div onclick="showProjectTodos('${element.projectId}')" class="col-3 ui card mx-3 animated flipInY delay-1s cursorNya">
            <div class="content">
                <span class="tandaSelesai"></span>
                <!-- <i class="right floated star icon"></i> -->
                <div class="header">${element.project.name}</div>
            </div>
          </div>
          `)
        })
      }
    },
    error: function(err) {
      console.log('ini error user todo')
      console.log(err)
    }
  })
}

function logout() {
  localStorage.removeItem('token')
  showLoginPage()
}

function addProject(name) {
  $.ajax(`${baseUrl}/projects`, {
    type: 'post',
    data: {
      name
    },
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      // $('#emptyPrivateTodo').hide()
      console.log('ini sukses')
      // console.log(data)
      getUserProject()
      // $('#privateTodoList').append()
    },
    error: function(err) {
      console.log('ini error')
      console.log(err)
    }
  })
}

function getUserProject() {
  $.ajax(`${baseUrl}/projects`, {
    type: 'get',
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      // $('#emptyPrivateTodo').hide()
      console.log('ini sukses')
      console.log(data)
      // $('#privateTodoList').append()
    },
    error: function(err) {
      console.log('ini error')
      console.log(err)
    }
  })
}

function showProjectTodos(projectId) {
  getProjectTodos(projectId)
  $('#registerLoginPage').hide()
  $('#privateTodo').hide()
  $('#project').hide()
  $('#holidayTodo').hide()
  $('#projectTodo').show()
}

function getProjectTodos(projectId) {
  projectIdLive = projectId
  $.ajax(`${baseUrl}/projects/${projectId}/todo`, {
    type: 'get',
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      $('#projectTodoList').empty()
      // let $newPrivateTodo = $(todoTemplate)
      if (data.length === 0) {
        $('#projectTodoList').append(`
        <div id="emptyPrivateTodo" class="col-6 ui card mx-3 animated flipInY delay-1s">
          <div class="content">
              <!-- <i class="right floated star icon"></i> -->
              <div class="header">This project not have any todo</div>
              <div class="description">
                  <p>Add yours :)</p>
              </div>
          </div>
        </div>
        `)
      } else {
        data.forEach(element => {
          // console.log('ini dari element nya', element,'dr function get project todo')

          $('#projectTodoList').append(`
          <div id="${element.id}" class="col-3 ui card mx-3 animated flipInY delay-1s">
            <div class="content">
                <span class="tandaSelesai"></span>
                <!-- <i class="right floated star icon"></i> -->
                <div class="header">${element.title}</div>
                <div class="description">
                    <p>${element.description}</p>
                </div>
            </div>
            <div class="extra content">
                <span onclick="deleteProjectTodo('${element.id}')" class="left floated star cursorNya">
                    <i class="red trash alternate icon"></i>
                    Delete
                </span>
                <span onclick="projectTodoDone('${element.id}')" class="right floated like cursorNya">
                    <i class="green check icon"></i>
                    Done
                </span>
            </div>
          </div>
          `)
        })
      }
    },
    error: function(err) {
      console.log(err)
    }
  })
}

function addProjectTodo(title, description, due_date) {
  $.ajax(`${baseUrl}/projects/${projectIdLive}/todo`, {
    type: 'post',
    data: {
      title,
      description,
      due_date
    },
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      console.log('ini dari function add project', data)
      showProjectTodos(projectIdLive)
    },
    error: function(err) {
      console.log('ini dari error function add project todo', err)
    }
  })
}

function searchOne(email) {
  $.ajax(`${baseUrl}/users/`, {
    type: 'get',
    data: {
      email
    },
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      $('#UserMemberToAddDiv').empty()
      if (!data) {
        $('#UserMemberToAddDiv').append(`
           <h4 id="userToAdd">email is not exist</h4>
        `)
      } else {
        $('#UserMemberToAddDiv').append(`
        <h4 id="userToAdd">${data.email}</h4>
         <i onclick="inviteMember('${data.email}')" id="addProjectMember" class="grey plus circle alternate icon cursorNya"></i>
     `)
      }
      console.log(data, 'ini datanya')
    },
    error: function(err) {
      console.log(err)
    }
  })
}

function inviteMember(email) {
  $.ajax(`${baseUrl}/projects/${projectIdLive}/invitemember`, {
    type: 'post',
    data: {
      email
    },
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      $('#UserMemberToAddDiv').empty()
    },
    error: function(err) {}
  })
}

function showHoliday() {
  getHolidaysPlan()
  $('#registerLoginPage').hide()
  $('#privateTodo').hide()
  $('#projectTodo').hide()
  $('#project').hide()
  $('#holidayTodo').show()
}

function getHolidayDate() {
  $.ajax(`${baseUrl}/holidays/date`, {
    type: 'get',
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      data.forEach(el => {
        $('#dateHolidayTodo').append(`
            <option value ="${el.date.iso}">${el.name} - ${el.date.iso}</option>
        `)
      })
    }
  })
}

function addHolidaysPlan(title, description, due_date) {
  $.ajax(`${baseUrl}/holidays`, {
    type: 'post',
    data: {
      title,
      description,
      due_date
    },
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      console.log('ini dari function add project', data)
      getHolidaysPlan()
    },
    error: function(err) {
      console.log('ini dari error function add project todo', err)
    }
  })
}

function getHolidaysPlan() {
  $.ajax(`${baseUrl}/holidays`, {
    type: 'get',
    headers: {
      token: localStorage.getItem('token')
    },
    success: function(data) {
      console.log('ini dari find user holidays plan')
      // console.log(data)
      $('#holidayTodoList').empty()
      // let $newPrivateTodo = $(todoTemplate)
      if (data.length == 0) {
        $('#holidayTodoList').append(`
        <div id="emptyPrivateTodo" class="col-6 ui card mx-3 animated flipInY delay-1s">
          <div class="content">
              <!-- <i class="right floated star icon"></i> -->
              <div class="header">You Still not have any todo</div>
              <div class="description">
                  <p>Add yours :)</p>
              </div>
          </div>
        </div>
        `)
      } else {
        data.forEach(element => {
          $('#holidayTodoList').append(`
          <div id="${element.id}" class="col-3 ui card mx-3 animated flipInY delay-1s">
            <div class="content">
                <span class="tandaSelesai"></span>
                <!-- <i class="right floated star icon"></i> -->
                <div class="header">${element.title}</div>
                <div class="description">
                    <p>${element.description}</p>
                </div>
                <div class="right floated author">
                    <img class="ui avatar image"
                        src="${element.user.imageUrl}">
                    ${element.user.name}
                </div>
            </div>
            <div class="extra content">
                <span onclick="deletePrivateTodo('${element.id}')" class="left floated star cursorNya">
                    <i class="red trash alternate icon"></i>
                    Delete
                </span>
                <span onclick="privateTodoDone('${element.id}')" class="right floated like cursorNya">
                    <i class="green check icon"></i>
                    Done
                </span>
            </div>
          </div>
          `)

          if (element.status === 'done') {
            $(`#${element.id} .tandaSelesai`).prepend(`
              <i class="bounceIn right floated check icon"></i>
              `)
            $(`#${element.id}`).css({ 'background-color': 'grey' })
          }
        })
      }
    },
    error: function(err) {
      console.log('ini error user todo')
      console.log(err)
    }
  })
}
