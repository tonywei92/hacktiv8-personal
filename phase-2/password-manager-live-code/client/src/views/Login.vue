<template>
    <div class="container w-25">
        <form>
            <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary mr-2" v-on:click.prevent="login">Login</button>
            <button type="submit" class="btn btn-success" v-on:click.prevent="register">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            this.$store.commit('login', { email: this.email, password: this.password})
        },
        register() {

        }
    }

}
</script>

<style scoped>
.container {
    margin-top: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    border: 1px solid rgba(200,200,200,1);
    border-radius: 10px;
    box-shadow: 5px 8px 18px rgba(200,200,200,1)
}
</style>