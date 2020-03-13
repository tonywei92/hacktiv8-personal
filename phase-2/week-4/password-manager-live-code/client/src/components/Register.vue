<template>
  <div>
    <h2>Register</h2>
    <ul>
      <li v-for="error in errors" class="text-red-500" v-bind:key="error">{{error}}</li>
    </ul>
    <form action method="post" @submit.prevent="register">
      <div>
        <input type="text" name="full_name" placeholder="Full name" v-model="full_name" class="rounded p-1 m-2 border" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" v-model="email" class="rounded p-1 m-2 border" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" v-model="password"  class="rounded p-1 m-2 border"/>
      </div>
      <input type="submit" value="Register" class="rounded p-1 m-2 border bg-blue-500 text-white" />
    </form>
  </div>
</template>

<script>
/* eslint-disable no-console */

import apiClient from "../lib/apiClient";

export default {
  data() {
    return {
      full_name: "",
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    register() {
      this.errors = [];
      apiClient
        .post(this.$store.state.server + "/api/users/register", {
          full_name: this.full_name,
          email: this.email,
          password: this.password
        })
        .then(res => res.data)
        .catch(err => {
          this.errors = err.response.data.errors;
        });
    }
  }
};
</script>