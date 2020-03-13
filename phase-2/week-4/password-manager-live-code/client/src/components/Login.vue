<template>
  <div>
    <h2>Login</h2>
    <ul>
      <li v-for="error in errors" v-bind:key="error" class="text-red-500">{{error}}</li>
    </ul>
    <form action method="post" @submit.prevent="login()">
      <div>
        <input type="text" name="email" placeholder="Email" v-model="email" class="rounded p-1 m-2 border" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" v-model="password" class="rounded p-1 m-2 border" />
      </div>
      <div>
        <input type="submit" value="Login" class="rounded p-1 m-2 border bg-blue-500 text-white" />
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-console */

import apiClient from "../lib/apiClient";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    login() {
      this.errors = [];
      apiClient
        .post(this.$store.state.server + "/api/users/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("token", res.data.token);
          this.$store.commit("setToken", res.data.token);
        })
        .catch(err => {
          this.errors = err.response.data.errors;
        });
    }
  }
};
</script>