import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        server: "http://localhost:3000",
        token: ""
    },
    mutations: {
        setToken(state, token){
            state.token = token;
        }
    }
})

export default store;