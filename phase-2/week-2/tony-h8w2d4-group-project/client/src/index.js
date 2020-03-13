import Vue from 'vue';
import App from './App.vue';
import { BaseInput, BaseButton } from "./components/UI/Input";

Vue.component('BaseInput', BaseInput);
Vue.component('BaseButton', BaseButton);

new Vue({
    el: "#app",
    render: (h) => h(App)
})