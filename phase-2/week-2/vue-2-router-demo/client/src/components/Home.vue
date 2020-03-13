<template>
<div class="w-full flex justify-center">
  <div class="w-2/3 flex">
    <div class="w-1/3">
      <profile-card :user="user" v-if="user" />
      <button @click="toFriend" class="px-2 py-4 bg-white rounded"> ke friend</button>
    </div>
    <div class="w-2/3">
      <div v-if="posts" >
        <post v-for="post in posts" :post="post" :key="post.id" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard";
import Post from "./Post";
import axios from "axios";
export default {
  components: {
    ProfileCard,
    Post
  },
  data() {
    return {
      user: null,
      posts: null
    };
  },
  methods:{
      toFriend(){
          this.$router.push({name: "friends"})
      }
  },
  mounted() {
    axios
      .get("http://localhost:3000/users/1")
      .then(res => (this.user = res.data))
      .catch(err => console.log(err));
    axios
      .get("http://localhost:3000/posts")
      .then(res => (this.posts = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>