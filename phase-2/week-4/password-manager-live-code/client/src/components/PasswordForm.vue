<template>
  <div>
    <h2 class="text-xl mb-2">Add new password</h2>
    <ul>
      <li v-for="error in errors" class="text-red-500" v-bind:key="error">{{error}}</li>
    </ul>
    <form action method="POST" @submit.prevent="createPassword">
      <div>
        <input type="text" name="url" placeholder="Url" v-model="url" class="border rounded p-1 m-1"/>
      </div>
      <div>
        <input type="text" name="username" placeholder="Username" v-model="username" class="border rounded p-1 m-1" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" v-model="password" class="border rounded p-1 m-1" />
      </div>
      <div>
        <input type="submit" value="Save" class="border rounded bg-blue-500 text-white p-2 m-1" />
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
      url: "",
      username: "",
      password: "",
      errors: []
    };
  },
  methods: {
    createPassword() {
      this.errors = [];
      apiClient
        .post(this.$store.state.server + "/api/passwords", {
          url: this.url,
          username: this.username,
          password: this.password
        })
        .then(res => this.$emit("passwordCreated", res))
        .catch(err => {
          this.errors = err.response.data.errors;
        });
    }
  }
};
</script>