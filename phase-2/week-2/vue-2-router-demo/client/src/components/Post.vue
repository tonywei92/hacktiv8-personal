<template>
  <div class="ml-4 mb-4">
    <div class="rounded-md overflow-hidden bg-white shadow-xl">
      <div class="p-4" v-if="user">
        <router-link :to="{name: 'profile', params: {id: user.id}}">{{user.name}}</router-link>
        <p>Posted at {{post.posted_at}}</p>
      </div>
      <div class="bg-red-300 h-32 flex justify-center items-center text-3xl p-4 text-center">{{post.content}}</div>
      <div class="flex">
        <div class="w-1/3 text-center p-2 border-l">Like</div>
        <div class="w-1/3 text-center p-2">Comment</div>
        <div class="w-1/3 text-center p-2 border-r">Share</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ["post"],
    data() {
        return {
            user: null
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/users/${this.post.posted_by}`)
            .then(res => this.user = res.data)
            .catch(err => console.log(err))
    }
};
</script>

<style>
</style>