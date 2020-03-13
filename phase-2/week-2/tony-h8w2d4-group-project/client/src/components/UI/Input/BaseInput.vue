<template>
  <div class="flex flex-col mb-4">
    <label :for="id" class="mb-1">{{title}}</label>
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      v-bind="$attrs"
      :id="id"
      class="px-2 py-1 outline-none border border-teal-400 rounded"
    />
  </div>
</template>

<script>
export default {  
  props: ["title", "id", "value"],
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>