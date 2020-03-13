<template>
  <div v-if="user">
      <p>{{user.name}}</p>
      <p>{{user.gender}}</p>
      <p>lives in {{user.lives_in}}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            user: null
        }
    },
     mounted(){
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`)
        .then(res => this.user = res.data)
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>