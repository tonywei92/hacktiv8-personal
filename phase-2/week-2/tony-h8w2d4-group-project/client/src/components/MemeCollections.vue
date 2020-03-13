<template>
  <div class="flex w-full flex-wrap">
    <div class="w-full">
      <h1 class="text-2xl font-bold mb-4">Your collections:</h1>
    </div>
    <div class="w-4/12 p-4" v-for="(n,i) in 10" :key="i">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <p class="text-gray-700 text-base">Created at: 17 Jan 2020</p>
        </div>
        <div class="px-6 py-4">
          <BaseButton>Delete</BaseButton>
          <BaseButton>Share</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>