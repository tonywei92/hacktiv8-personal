<template>
    <div>
        <button @click.prevent="logout()" class="border p-2 rounded bg-blue-500 text-white">Logout</button>
    </div>
</template>

<script>
export default {
    data(){
        return {};
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$store.commit("setToken", "");
        }
    }
}
</script>