var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        isLogin: false,
        login: {
            email: '',
            password: ''
        },
        host: 'http://localhost:3000'
    },
    methods: {
        submitLogin: function () {
            $.ajax({
                method: "POST",
                url: this.host + "/login",
                data: {
                    email: this.login.email,
                    password: this.login.password
                }
            })
            .done(response => {
                localStorage.setItem("access_token", response["access_token"])
                this.checkLogin()
            })
            .fail(err => {
                console.log(err)
            })
        },
        checkLogin() {
            if(localStorage.getItem("access_token")) {
                this.isLogin = true
            }
        }
    }
})