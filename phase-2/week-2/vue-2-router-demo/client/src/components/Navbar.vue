<template>
  <div class="w-2/3 flex justify-between items-center">
    <router-link :to="{name: `home`}" class="text-xl font-bold">
        Social Router
    </router-link>
    <div>
        <router-link active-class="bg-purple-900" exact :to="{ name: 'home' }" class="inline-block px-2 py-4 bg-purple-800 hover:bg-purple-900 transition-colors duration-300">Home</router-link>
        <router-link active-class="bg-purple-900" :to="{ name: 'friends'}" class="inline-block px-2 py-4 bg-purple-800 hover:bg-purple-900 transition-colors duration-300">Friend</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>