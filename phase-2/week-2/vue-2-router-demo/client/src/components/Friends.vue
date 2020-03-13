<template>
<div class="w-full flex justify-center">
  <div class="w-2/3 flex">
    <div class="w-1/3">
        <div v-if="friends">
            <div class="bg-white mb-2 rounded shadow-xl p-2" v-for="friend in friends" :key="friend.id">
                <router-link :to="{name: `friendDetail`, params: {id: friend.id}}">{{friend.name}}</router-link>
            </div>
        </div>
    </div>
    <div class="w-2/3 pl-8">
        
            <router-view></router-view>
        
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
   data(){
       return {
           friends: null
       }
   },
   mounted(){
       axios.get("http://localhost:3000/users/1")
        .then(res => this.friends = res.data.friends)
   }
}
</script>

<style scoped>

</style>