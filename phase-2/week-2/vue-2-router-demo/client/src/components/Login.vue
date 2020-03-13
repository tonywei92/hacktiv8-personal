<template>
    <div>
        <form action="" @submit.prevent="login">
            <input type="text" placeholder="email" class="block border">
            <input type="password" placeholder="password" class="block border">
            <input type="submit" value="login" class="border text-white bg-green-500">
        </form>
    </div>
</template>

<script>
export default {
    methods:{
        login(){
            localStorage.setItem("token","asdasdasd")
        }
    }
}
</script>

<style>

</style>