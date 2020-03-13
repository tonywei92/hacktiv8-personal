<template>
  <div id="nav">
      <div @click.prevent="toHome()" class="nav-img">
        <div class="nav-img-logo">
          <img src="../assets/logoimg.png" alt="logoImg">
        </div>
        <div class="nav-img-txt">
          <img src="../assets/logotext.png" alt="logoTxt">
        </div>
      </div>
      <div class="nav-menu">
        <router-link class="nav-menu-item" to="/tanya-dokter">TANYA DOKTER</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 10px 30px;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  justify-content:space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #00afb1;
}
.nav-img {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.nav-img-logo img{
  width: 50px;
}
.nav-img-txt img{
  width: 150px;
  margin-left: 10px;
}
.nav-menu-item {
  padding: 0 10px;
  text-decoration: none;
}
</style>
