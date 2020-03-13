// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    comments: [],
    songs: [],
    currentCharacter: {}
  },
  mutations: {
    SET_CHARACTERS (state, payload) {
      state.characters = payload
    },
    SET_SONGS (state, payload) {
      state.songs = payload
    },
    SET_COMMENTS (state, payload) {
      state.comments = payload
    },
    SET_CURRENT_CHARACTER (state, payload) {
      state.currentCharacter = payload
    },
    SET_CURRENT_CHARACTER_VIDEO (state, payload) {
      state.currentCharacter.featuredVideo = state.songs[payload].url
    }
  },
  actions: {
    fetchComments (context, id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/comments?characterId=${id}`
      })
        .then(({ data }) => {
          context.commit('SET_COMMENTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCharacters (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/characters'
      })
        .then(({ data }) => {
          context.commit('SET_CHARACTERS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCharacterDetail (context, id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/characters/${id}?_embed=songs&_embed=comments`
      })
        .then(({ data }) => {
          let featuredVideo = null
          if (data.songs.length) {
            featuredVideo = data.songs[0].url
          }
          context.commit('SET_CURRENT_CHARACTER', {
            name: data.name,
            featuredVideo
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchSongs (context, id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/songs?characterId=${id}`
      })
        .then(({ data }) => {
          context.commit('SET_SONGS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postComment (context, payload) {
      axios({
        method: 'POST',
        url: `http://localhost:3000/comments`,
        data: {
          name: payload.name,
          msg: payload.msg,
          characterId: payload.characterId
        }
      })
        .then(_ => {
          context.dispatch('fetchComments', payload.characterId)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
