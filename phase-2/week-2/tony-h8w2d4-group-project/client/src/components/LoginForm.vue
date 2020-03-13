<template>
  <form class="p-4" @submit.prevent="login">
    <BaseInput title="Email" id="email" placeholder="email..." v-model="email" />
    <BaseInput title="Password" id="password" placeholder="password..." v-model="password" />
    <BaseButton type="submit">Login</BaseButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("login");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>