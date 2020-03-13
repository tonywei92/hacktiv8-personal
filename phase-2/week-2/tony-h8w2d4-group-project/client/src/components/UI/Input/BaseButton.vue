<template>
  <button
    v-bind="$attrs"
    class="focus:outline-none rounded px-3 py-1 bg-green-500 hover:bg-green-400 text-white"
  >
    <slot></slot>
  </button>
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