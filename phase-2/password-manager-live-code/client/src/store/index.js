import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,

  },
  mutations: {
  },
  actions: {
    login(context, payload) {
      axios({
        url: 'http://localhost:3000/auth/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        },
      })
      .then(({ data }) => {
        localStorage.setItem('authorization', 'token ' + data.token);
      })
      .catch(err => {
        console.log(err);
      })
    },
    register() {
      axios({
        url: 'http://localhost:3000/auth/register',
        method: 'post',
        data: {
          email: '',
          password: '',
        },
      })
      .then(({ data }) => {
        localStorage.setItem('authorization', 'token ' + data.token);
      })
      .catch(err => {
        console.log(err);
      })
    },
    signOut() {
      localStorage.removeItem('authorization');
    }
  },
  modules: {
  }
})
