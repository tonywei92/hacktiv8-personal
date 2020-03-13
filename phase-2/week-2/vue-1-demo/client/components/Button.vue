<template>
  <button :class="`${defaultStyle} ${customStyle}`" class="btn" @click="$emit('click')">
      <slot></slot>
  </button>
</template>


<script>
export default {
  data: function() {
    return {
      defaultStyle:
        "font-bold text-white transition-colors duration-300 px-4 py-2 rounded shadow-xl"
    };
  },
  props: {
    type: {
      default: "primary"
    }
  },
  computed: {
    customStyle: function() {
      if (this.type === "primary") {
        return "bg-green-500 hover:bg-green-300";
      } else {
        return "bg-blue-500 hover:bg-blue-300";
      }
    }
  }
};
</script>

<style>
</style>