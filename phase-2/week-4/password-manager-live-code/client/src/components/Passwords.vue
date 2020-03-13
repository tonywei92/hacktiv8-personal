<template>
  <div>
    <h2 class="text-2xl">Your passwords</h2>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{error}}</li>
    </ul>
    <div class="flex flex-wrap">
      <div v-for="password in passwords" v-bind:key="password._id" class="border m-1 p-4 rounded shadow w-1/2">
        <div>
          URL:
          <span>{{password.url}}</span>
        </div>
        <div>
          Username:
          <span>{{password.username}}</span>
        </div>
        <div>
          Password:
          <span>{{password.password}}</span>
        </div>
        <div>
          <button class="text-white bg-red-500 rounded p-2 m-1" @click.prevent="deletePassword(password._id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import apiClient from "../lib/apiClient";

export default {
  data() {
    return {
      passwords: [],
      errors: []
    };
  },
  methods: {
    loadPasswords() {
      apiClient
        .get(this.$store.state.server + "/api/passwords")
        .then(res => (this.passwords = res.data))
        .catch(err => console.log(err));
    },
    deletePassword(id) {
      apiClient
        .delete(this.$store.state.server + "/api/passwords/" + id)
        .then(() => this.loadPasswords())
        .catch(err => {
          this.errors = err.response.data.errors;
        });
    }
  },
  created() {
    this.loadPasswords();
  }
};
</script>

<style scoped>
</style>