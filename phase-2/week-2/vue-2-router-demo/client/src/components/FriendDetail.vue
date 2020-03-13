<template>
    <div v-if="user" class="rounded shadow-xl p-2 bg-white">
        <p>{{user.name}}</p>
        <p>{{user.gender}}</p>
        <p>Lives in {{user.lives_in}}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            user: null
        }
    },
    mounted(){
        this.fetch();
    },
    watch:{
        '$route': function(){
            this.fetch();
        }
    },
    methods:{
        fetch(){
            const {id} = this.$route.params;
            axios.get(`http://localhost:3000/users/${id}`)
                .then(res => this.user = res.data)
                .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>