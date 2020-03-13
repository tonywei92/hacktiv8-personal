/**
 * ListItem is a List Item constuctor for an individual (single) list item
 * @param {String} server 
 * @param {Object} headers 
 * @param {String} id 
 * @param {String} name 
 * @param {String} description 
 * @param {String} status 
 * @param {String} due_date 
 * @param {String} status 
 * @param {Function} onDelete 
 */
var ListItem = function (server, headers, id, name, description, status, due_date, onDelete) {
    var self = this;

    this.getId = function () {
        return id;
    }

    this.updateDataToServer = function (onSuccess) {
        $.ajax({
            url: `${server}/todos/${id}`,
            method: "PUT",
            headers: headers,
            data: {
                id, name, description, status, due_date
            },
            success: onSuccess
        })
    }

    this.deleteThis = function (onSuccess) {
        $.ajax({
            url: `${server}/todos/${id}`,
            method: "DELETE",
            headers: headers,
            success: onSuccess
        })
    }

    this.setName = function (name) {
        this.$name.text(name);
    }

    this.setDescription = function (description) {
        this.$description.text(description);
    }

    this.setDone = function (status) {
        if (status === 'done') {
            this.$done.attr('checked', 'checked');
        }
        else {
            this.$done.removeAttr('checked', false);
        }
    }

    this.setDueDate = function (date) {
        const dateF = new Date(date);
        this.$due_date.text(dateF.toDateString());
        const dateFormatted = dateF.toISOString().split('T')[0];
        this.$due_date_input.val(dateFormatted);
    }

    this.bindEvents = function () {
        this.$done.on('change', function (e) {
            e.preventDefault();
            var checked = $(this).prop('checked');
            status = checked ? "done" : "pending";
            self.updateDataToServer();
        })

        this.$due_date.on('click', function (e) {
            e.preventDefault();
            $(this).hide();
            self.$due_date_input_container.show();
        })

        this.$delete.on('click', function (e) {
            e.preventDefault();
            self.deleteThis(function () {
                self.$content.hide();
            });
        })

        this.$due_date_input_button.on('click', function (e) {
            e.preventDefault();
            self.$due_date_input_container.hide();
            var date = new Date(self.$due_date_input.val());
            due_date = date.toISOString();
            self.updateDataToServer(function () {
                self.$due_date.text(date.toDateString())
                self.$due_date.show();
            })

        });
    }

    this.getDOM = function () {
        return this.$content;
    }

    this.init = function () {

        this.$template = $('#list-template');
        this.$content = $($(this.$template).html());
        this.$content.data('id', id);
        this.$name = this.$content.find('.name');
        this.$description = this.$content.find('.description');
        this.$description.text(description);
        this.$done = this.$content.find('.done');
        this.$due_date = this.$content.find('.due_date');
        this.$delete = this.$content.find('.delete');
        this.$due_date_input = this.$content.find('.due-date-input')
        this.$due_date_input_container = this.$content.find('.due-date-input-container')
        this.$due_date_input_container.hide();
        this.$due_date_input_button = this.$content.find('.due-date-button');
        this.setName(name);
        this.setDescription(description);
        this.setDone(status);
        this.setDueDate(due_date);
        this.bindEvents();
    }

    this.hide = function () {
        this.$content.hide();
    }

    this.init();
}


/**
 * 
 * @param {Object} $container 
 * @param {String} server 
 * @param {Object} headers 
 */
var initList = function ($container, server, headers) {
    var todoList = [];

    var requestList = function (onSuccess, onError) {
        $.ajax({
            url: `${server}/todos`,
            method: "GET",
            headers: headers,
            success: function (data) {
                todoList = [];
                for (var i = 0; i < data.length; i++) {
                    const id = data[i]._id;
                    const name = data[i].name;
                    const description = data[i].description;
                    const due_date = data[i].due_date;
                    const status = data[i].status;
                    todoList.push(new ListItem(server,
                        headers,
                        id,
                        name,
                        description,
                        status,
                        due_date,
                        function (id) {
                            for (var i = 0; i < todoList.length; i++) {
                                if (todoList[i].getId() === id) {
                                    todoList[i].hide();
                                    break;
                                }
                            }
                        }))
                }
                attachToListDom()
            },
            error: function (error, status) {
                onError(status);
            }
        })


        // Sample data:
        // var data = [
        //     {
        //         "_id": "5e25c4cbb138c012b102aefd",
        //         "name": "second todo",
        //         "description": "nothing to do again",
        //         "due_date": "1970-01-19T06:45:33.515Z",
        //         "status": "pending",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "5e25c4dab138c012b102aefe",
        //         "name": "third todo",
        //         "description": "well to do again",
        //         "due_date": "1970-01-19T06:45:33.530Z",
        //         "status": "pending",
        //         "__v": 0
        //     }
        // ];


    }

    var attachToListDom = function () {
        $container.empty();
        for (var i = 0; i < todoList.length; i++) {
            $container.append(todoList[i].getDOM())
        }
    }

    var onRequestError = function (err) {
        console.error(err);
    }


    var init = function () {
        requestList(function (list) {
            attachToListDom(list)
        }, onRequestError);
    }

    init();

    return requestList;
}

var formAdd = function (server, headers, onAdd) {
    var $form = $('#form-add');
    var $name = $('#add-name');
    // var $description = $('#add-description');
    var $due_date = $('#add-due-date');
    var $error = $('#add-error');

    var addTodo = function (onSuccess, onError) {
        $.ajax({
            url: `${server}/todos`,
            method: "POST",
            data: $form.serialize(),
            success: onSuccess,
            headers: headers,
            error: function (xhr, options, data) {
                if (onError) {
                    onError(data);
                }
            }
        })
    }

    function validateAddForm() {
        var name = $name.val();
        // var description = $description.val();
        var due_date = $due_date.val();
        var result = validator.validateSchema({
            Name: validator.value(name).required(),
            "Due date": validator.value(due_date).required()
        })

        if (result.valid) {
            return true;
        }
        else {
            $error.empty().hide();
            for (var i = 0; i < result.errors.length; i++) {
                $error.append(`<li>${result.errors[i].message}</li>`);
            }
            $error.show();
            return false;
        }
    }

    var bindEvents = function () {
        $form.on('submit', function (e) {
            e.preventDefault();
            if (validateAddForm()) {
                addTodo(function (data) {
                    if (onAdd) {
                        onAdd(data);
                    }
                    $form.trigger('reset');
                },
                    function (err) {
                        $error.empty();
                        $error.append(`<li>${err}</li>`)
                    })
            }
        })
    }

    var init = function () {
        bindEvents();
    }

    init();
}

var auth = function (server, onAuthenticated) {

    var $googleOauthBtn = $('#google-oauth');
    var $loginForm = $('#login-form');
    var $registerForm = $('#register-form');
    var $logoutButton = $('#logout');


    var $auth = $('#auth');
    var $loginEmail = $('#login-email');
    var $loginPassword = $('#login-password');
    var $regFullname = $('#reg-fullname');
    var $regEmail = $('#reg-email');
    var $regPassword = $('#reg-password');
    var $regPasswordConfirmation = $('#reg-password-confirmation');
    var $registerError = $('#register-error');
    var $registerInfo = $('#register-info');
    var $loginError = $('#login-error');

    var isLoginFormValid = function () {
        var loginEmail = $loginEmail.val();
        var loginPassword = $loginPassword.val();
        var result = validator.validateSchema({
            Email: validator.value(loginEmail).required().email(),
            Password: validator.value(loginPassword).required()
        })

        if (result.valid) {
            return true;
        }
        else {
            messageReset();
            for (var i = 0; i < result.errors.length; i++) {
                $loginError.append(`<li>${result.errors[i].message}</li>`)
            }
            $loginError.show();
            return false;
        }
    }

    var isRegisterFormValid = function () {
        var fullname = $regFullname.val();
        var email = $regEmail.val();
        var password = $regPassword.val();
        var passwordConfirmation = $regPasswordConfirmation.val();

        var result = validator.validateSchema({
            Fullname: validator.value(fullname).required(),
            Email: validator.value(email).required().email(),
            Password: validator.value(password).required().match(passwordConfirmation)
        });

        if (result.valid) {
            messageReset();
            return true;
        }
        else {
            messageReset();
            for (var i = 0; i < result.errors.length; i++) {
                $registerError.append(`<li>${result.errors[i].message}</li>`)
            }
            $registerError.show();
            return false;
        }

    }

    var messageReset = function () {
        $registerError.empty().hide();
        $registerInfo.empty().hide();
        $loginError.empty().hide();
    }

    var getGoogleAuthLink = function (onSuccess, onerror) {
        $.ajax({
            url: `${server}/auth/login/getgoogleoauth`,
            method: 'GET',
            success: onSuccess,
            error: function (error, status) {
                if (onerror) {
                    onerror(status);
                }
            }
        });
    }

    var loginWithGoogleOauth = function (code, onSuccess) {
        $.ajax({
            url: `${server}/auth/login/googleoauth?code=${code}`,
            method: 'GET',
            success: onSuccess,
            error: function (error, status) {
                if (onerror) {
                    onerror(status);
                }
            }
        });
    }

    var submitForm = function ($form, endpoint, onSuccess, onError) {
        $.ajax({
            url: `${server}/auth/${endpoint}`,
            method: 'POST',
            data: $form.serialize(),
            success: onSuccess,
            error: function (error, options, data) {
                if (onError) {
                    console.log(data)
                    onError(data);
                }
            }
        });
    }

    var setToken = function (data) {
        localStorage.setItem('token', data.token);
        location.href = '/';
    }



    function bindEvents() {
        $googleOauthBtn.on('click', function (e) {
            e.preventDefault();
            getGoogleAuthLink(function (data) {
                location.href = data;
            })
        });

        $logoutButton.on('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('token');
            location.href = "/";
        });

        $loginForm.on('submit', function (e) {
            e.preventDefault();
            if (isLoginFormValid()) {
                submitForm($(this), "login", setToken, function (data) {
                    $loginError.append(`<li>${data}</li>`);
                    $loginError.show();
                })
            }
        })

        $registerForm.on('submit', function (e) {
            e.preventDefault();
            if (isRegisterFormValid()) {
                submitForm($(this), "register", function (data) {
                    $registerInfo.append("<li>Success, you may try to login</li>")
                })
            }
        })
    }

    function init() {
        $auth.hide();
        $logoutButton.hide();
        bindEvents();

        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            loginWithGoogleOauth(code, setToken);
        }
        else {
            var token = localStorage.getItem('token');
            if (token) {
                onAuthenticated(token);
                $logoutButton.show();
            }
            else {
                $auth.show();
            }
        }
    }

    init();
}

var init = function () {
    var $todoList = $todoList = $('#todo-list');
    var server = "http://localhost:3000/api";

    var init = function () {
        auth(server, function (token) {
            var reloadList = initList($todoList, server, { token: token });
            formAdd(server, { token: token }, function () {
                reloadList();
            })

        })
    }

    init();
}

init();