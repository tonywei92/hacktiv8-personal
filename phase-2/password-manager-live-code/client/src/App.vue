<template>
  <div id="app">
    <router-link to="login"></router-link>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
       
    }
  },
  computed: {
    isLogin() {
     return this.$store.state.isLogin
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
