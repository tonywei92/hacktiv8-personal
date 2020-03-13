<template>
  <div id="app" class="p-8">
    <div class="flex justify-center items-center mb-8">
      <h1 class="text-4xl mr-2">Password Manager</h1>
      <Logout v-if="$store.state.token" />
    </div>
    <div v-if="!$store.state.token">
    <Register />
    <p class="text-2xl my-8 font-bold">Or</p>
    <Login/>
    </div>
    <div class="mb-8">
      <PasswordForm v-if="$store.state.token" @passwordCreated="notifyPasswordToRefresh()"/>
    </div>
    <Passwords v-if="$store.state.token" ref="passwordsRef" />
  </div>
</template>

<script>
import Logout from "./components/Logout";
import Register from "./components/Register";
import Login from "./components/Login";
import Passwords from "./components/Passwords";
import PasswordForm from './components/PasswordForm';

export default {
  name: "app",
  components: {
    Register,
    Login,
    Passwords,
    Logout,
    PasswordForm
  },
  data(){
    return {
    }
  },
  created(){
    if(localStorage.getItem("token")){
      this.$store.commit('setToken', localStorage.getItem("token"));
    }
  }, 
  methods: {
    notifyPasswordToRefresh(){
      this.$refs.passwordRef.loadPasswords()
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
