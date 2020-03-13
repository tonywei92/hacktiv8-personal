<template>
  <div id="app">
    <div class="w-full flex justify-center bg-purple-800 text-white shadow-xl mb-8">
      <navbar />
    </div>
    
      <transition name="asdasd">
        <router-view></router-view>
      </transition>
   
  </div>
</template>

<script>
import "./style/tailwind.css";
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {Navbar}
  
}
</script>

<style scoped>
.asdasd-enter-active, .asdasd-leave-active {
  transition: opacity .3s;
}
.asdasd-enter, .asdasd-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
