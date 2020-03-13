<template>
  <div>
    <div class="flex justify-center pt-8">
      <div class="w-1/2 border rounded pt-6">
        <div class="px-4">
          <h1 class="text-xl">Login</h1>
        </div>
        <login-form />
      </div>
    </div>
    <div class="flex justify-center pt-8">
      <div class="w-8/12">
        <MemeForm />
      </div>
    </div>
    <div class="flex justify-center w-full">
      <div class="w-9/12">
        <MemeCollections />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";
import MemeForm from "./components/MemeForm";
import MemeCollections from "./components/MemeCollections";
export default {
  data() {
    return {};
  },
  components: {
    LoginForm,
    MemeForm,
    MemeCollections
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>