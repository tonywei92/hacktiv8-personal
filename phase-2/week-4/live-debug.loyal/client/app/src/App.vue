<template>
  <div id="app">
    <h1>test</h1>
    <nav class="navbar navbar-light bg-turquoise">
      <router-link :to="'/'">
        <span class="navbar-brand mb-0 h1 text-white clickable">
          <strong>Hacktiv8 Final</strong>
        </span>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(~@/assets/background.jpg);
  background-size: cover;
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

.bg-turquoise {
  background-color: turquoise;
}

.clickable {
  cursor: pointer !important;
}

.clickable:hover {
  background-color: turquoise !important;
  color: white;
}

.cover {
  object-fit: cover !important;
  max-width: 100%;
  height: auto;
}

.card-text {
  color: grey;
}
</style>
