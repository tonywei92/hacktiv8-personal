import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vue)

export default new Vuex.Store({
  state: {
    articles: [],
    doctors: [],
    user: {
      name: '',
      phone: ''
    }
  },
  mutations: {
    FETCH_ARTICLES (state, payload) {
      state.articles = payload
    },
    FETCH_DOCTORS (state, payload) {
      state.doctors = payload
    },
    UPDATE_USER_DATA (state, payload) {
      state.user.name = payload.name
      state.user.phone = payload.phone
    }
  },
  actions: {
    fetchArticles ({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/articles'
      })
        .then(({ data }) => {
          commit('FETCH_DOCTORS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchDoctors ({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/doctors'
      })
        .then((data) => {
          commit('FETCH_DOCTORS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    sendMessage ({ commit }, payload) {
      return axios({
        method: 'put',
        url: `http://localhost:3000/doctors/${payload.id}`,
        data: {
          name: payload.name,
          spesialis: payload.spesialis,
          id: payload.id,
          imageUrl: payload.imageUrl,
          rating: payload.rating,
          messages: payload.messages

        }
      })
    },
    getDetailDokter ({ commit }, payload) {
      return axios({
        method: 'get',
        url: `http://localhost:3000/doctors/${payload}`
      })
    }
  },
  modules: {
  }
})
