<template>
  <div class="rounded shadow-xl w-full bg-white p-4">
      <div>
        <p>{{user.name}}</p>
        <p>{{user.gender}}</p>
        <p>lives in {{user.lives_in}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style>
</style>